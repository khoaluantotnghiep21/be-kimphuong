import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { Binhluan } from "./Binhluan";
import { Danhgia } from "./Danhgia";
import { Donhang } from "./Donhang";
import { Donnhaphang } from "./Donnhaphang";
import { Donthuoctuvan } from "./Donthuoctuvan";
import { Role } from "./Role";

@Index("identityuser_email_key", ["email"], { unique: true })
@Index("identityuser_pkey", ["id"], { unique: true })
@Index("identityuser_sodienthoai_key", ["sodienthoai"], { unique: true })
@Entity("identityuser", { schema: "public" })
export class Identityuser {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "hoten", nullable: true, length: 255 })
  hoten: string | null;

  @Column("character varying", {
    name: "sodienthoai",
    nullable: true,
    unique: true,
    length: 20,
  })
  sodienthoai: string | null;

  @Column("character varying", { name: "matkhau", nullable: true, length: 255 })
  matkhau: string | null;

  @Column("character varying", {
    name: "email",
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;

  @Column("character varying", { name: "gioitinh", nullable: true, length: 10 })
  gioitinh: string | null;

  @Column("date", { name: "ngaysinh", nullable: true })
  ngaysinh: string | null;

  @Column("integer", { name: "sodiem", nullable: true, default: () => "0" })
  sodiem: number | null;

  @Column("text", { name: "diachi", nullable: true })
  diachi: string | null;

  @OneToMany(() => Binhluan, (binhluan) => binhluan.user)
  binhluans: Binhluan[];

  @OneToMany(() => Danhgia, (danhgia) => danhgia.user)
  danhgias: Danhgia[];

  @OneToMany(() => Donhang, (donhang) => donhang.taoboinhanvien)
  donhangs: Donhang[];

  @OneToMany(() => Donhang, (donhang) => donhang.user)
  donhangs2: Donhang[];

  @OneToMany(() => Donnhaphang, (donnhaphang) => donnhaphang.user)
  donnhaphangs: Donnhaphang[];

  @OneToMany(() => Donthuoctuvan, (donthuoctuvan) => donthuoctuvan.user)
  donthuoctuvans: Donthuoctuvan[];

  @ManyToMany(() => Role, (role) => role.identityusers)
  roles: Role[];
}
