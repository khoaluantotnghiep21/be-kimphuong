import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Donhang } from "./Donhang";
import { Sanpham } from "./Sanpham";

@Index("chitietdonhang_pk", ["madonhang", "masanpham"], { unique: true })
@Entity("chitietdonhang", { schema: "public" })
export class Chitietdonhang {
  @Column("character varying", { primary: true, name: "madonhang" })
  madonhang: string;

  @Column("character varying", { primary: true, name: "masanpham" })
  masanpham: string;

  @Column("integer", { name: "soluong", nullable: true })
  soluong: number | null;

  @Column("integer", { name: "giaban", nullable: true })
  giaban: number | null;

  @ManyToOne(() => Donhang, (donhang) => donhang.chitietdonhangs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "madonhang", referencedColumnName: "madonhang" }])
  madonhang2: Donhang;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.chitietdonhangs, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "masanpham", referencedColumnName: "masanpham" }])
  masanpham2: Sanpham;
}
