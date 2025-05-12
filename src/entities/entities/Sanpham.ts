import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Binhluan } from "./Binhluan";
import { Chitietdonhang } from "./Chitietdonhang";
import { Chitietdonnhap } from "./Chitietdonnhap";
import { Chitietdonthuoctuvan } from "./Chitietdonthuoctuvan";
import { Chitietdonvi } from "./Chitietdonvi";
import { Chitietthanhphan } from "./Chitietthanhphan";
import { Danhgia } from "./Danhgia";
import { NhathuocSanpham } from "./NhathuocSanpham";
import { Chuongtrinhkhuyenmai } from "./Chuongtrinhkhuyenmai";
import { Danhmuc } from "./Danhmuc";
import { Thuonghieu } from "./Thuonghieu";

@Index("sanpham_pk", ["id"], { unique: true })
@Index("masanpham_unique", ["masanpham"], { unique: true })
@Entity("sanpham", { schema: "public" })
export class Sanpham {
  @Column("uuid", { primary: true, name: "id" })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column("character varying", { name: "masanpham", unique: true })
  masanpham: string;

  @Column("character varying", { name: "tensanpham", nullable: true })
  tensanpham: string | null;

  @Column("text", { name: "slug", nullable: true })
  slug: string | null;

  @Column("text", { name: "dangbaoche", nullable: true })
  dangbaoche: string | null;

  @Column("text", { name: "congdung", nullable: true })
  congdung: string | null;

  @Column("text", { name: "chidinh", nullable: true })
  chidinh: string | null;

  @Column("text", { name: "chongchidinh", nullable: true })
  chongchidinh: string | null;

  @Column("boolean", { name: "thuockedon", nullable: true })
  thuockedon: boolean | null;

  @Column("text", { name: "motangan", nullable: true })
  motangan: string | null;

  @Column("text", { name: "doituongsudung", nullable: true })
  doituongsudung: string | null;

  @Column("text", { name: "luuy", nullable: true })
  luuy: string | null;

  @Column("date", { name: "ngaysanxuat", nullable: true })
  ngaysanxuat: string | null;

  @Column("integer", { name: "hansudung", nullable: true })
  hansudung: number | null;

  @Column("integer", { name: "gianhap", nullable: true })
  gianhap: number | null;

  @OneToMany(() => Binhluan, (binhluan) => binhluan.masanpham)
  binhluans: Binhluan[];

  @OneToMany(
    () => Chitietdonhang,
    (chitietdonhang) => chitietdonhang.masanpham2
  )
  chitietdonhangs: Chitietdonhang[];

  @OneToMany(
    () => Chitietdonnhap,
    (chitietdonnhap) => chitietdonnhap.masanpham2
  )
  chitietdonnhaps: Chitietdonnhap[];

  @OneToMany(
    () => Chitietdonthuoctuvan,
    (chitietdonthuoctuvan) => chitietdonthuoctuvan.masanpham2
  )
  chitietdonthuoctuvans: Chitietdonthuoctuvan[];

  @OneToMany(() => Chitietdonvi, (chitietdonvi) => chitietdonvi.masanpham2)
  chitietdonvis: Chitietdonvi[];

  @OneToMany(
    () => Chitietthanhphan,
    (chitietthanhphan) => chitietthanhphan.masanpham2
  )
  chitietthanhphans: Chitietthanhphan[];

  @OneToMany(() => Danhgia, (danhgia) => danhgia.masanpham)
  danhgias: Danhgia[];

  @OneToMany(
    () => NhathuocSanpham,
    (nhathuocSanpham) => nhathuocSanpham.masanpham2
  )
  nhathuocSanphams: NhathuocSanpham[];

  @ManyToOne(
    () => Chuongtrinhkhuyenmai,
    (chuongtrinhkhuyenmai) => chuongtrinhkhuyenmai.sanphams
  )
  @JoinColumn([
    { name: "machuongtrinh", referencedColumnName: "machuongtrinh" },
  ])
  machuongtrinh: Chuongtrinhkhuyenmai;

  @ManyToOne(() => Danhmuc, (danhmuc) => danhmuc.sanphams)
  @JoinColumn([{ name: "madanhmuc", referencedColumnName: "madanhmuc" }])
  madanhmuc: Danhmuc;

  @ManyToOne(() => Thuonghieu, (thuonghieu) => thuonghieu.sanphams)
  @JoinColumn([{ name: "mathuonghieu", referencedColumnName: "mathuonghieu" }])
  mathuonghieu: Thuonghieu;
}
