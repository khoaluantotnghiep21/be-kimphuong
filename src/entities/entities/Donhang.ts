import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Chitietdonhang } from "./Chitietdonhang";
import { Voucher } from "./Voucher";
import { Identityuser } from "./Identityuser";
import { Nhathuoc } from "./Nhathuoc";

@Index("donhang_pk", ["id"], { unique: true })
@Index("madonhang_unique", ["madonhang"], { unique: true })
@Entity("donhang", { schema: "public" })
export class Donhang {
  @Column("uuid", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "madonhang", unique: true })
  madonhang: string;

  @Column("date", { name: "ngaymuahang", nullable: true })
  ngaymuahang: string | null;

  @Column("integer", { name: "tongtien", nullable: true })
  tongtien: number | null;

  @Column("integer", { name: "giamgiatructiep", nullable: true })
  giamgiatructiep: number | null;

  @Column("integer", { name: "phivanchuyen", nullable: true })
  phivanchuyen: number | null;

  @Column("boolean", { name: "loaidonhang", nullable: true })
  loaidonhang: boolean | null;

  @Column("integer", { name: "thanhtien", nullable: true })
  thanhtien: number | null;

  @Column("character varying", { name: "phuongthucthanhtoan", nullable: true })
  phuongthucthanhtoan: string | null;

  @OneToMany(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.madonhang2
  )
  chitietdonhangs: Chitietdonhang[];

  @ManyToOne(() => Voucher, (voucher) => voucher.donhangs, {
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "mavoucher", referencedColumnName: "mavoucher" }])
  mavoucher: Voucher;

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.donhangs)
  @JoinColumn([{ name: "taoboinhanvien", referencedColumnName: "id" }])
  taoboinhanvien: Identityuser;

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.donhangs2)
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: Identityuser;

  @ManyToOne(() => Nhathuoc, (nhathuoc) => nhathuoc.donhangs, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "machinhanh", referencedColumnName: "machinhanh" }])
  machinhanh: Nhathuoc;
}
