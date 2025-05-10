import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Donvitinh } from "./Donvitinh";
import { Sanpham } from "./Sanpham";

@Index("chitietdonvi_pk", ["madonvitinh", "masanpham"], { unique: true })
@Entity("chitietdonvi", { schema: "public" })
export class Chitietdonvi {
  @Column("character varying", { primary: true, name: "masanpham" })
  masanpham: string;

  @Column("character varying", { primary: true, name: "madonvitinh" })
  madonvitinh: string;

  @Column("character varying", { name: "giaban", nullable: true })
  giaban: string | null;

  @Column("integer", { name: "dinhluong", nullable: true })
  dinhluong: number | null;

  @ManyToOne(() => Donvitinh, (donvitinh) => donvitinh.chitietdonvis, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "madonvitinh", referencedColumnName: "madonvitinh" }])
  madonvitinh2: Donvitinh;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.chitietdonvis, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "masanpham", referencedColumnName: "masanpham" }])
  masanpham2: Sanpham;
}
