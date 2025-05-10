import { Column, Entity, Index, OneToMany } from "typeorm";
import { Donhang } from "./Donhang";

@Index("voucher_pk", ["mavoucher"], { unique: true })
@Entity("voucher", { schema: "public" })
export class Voucher {
  @Column("character varying", { primary: true, name: "mavoucher" })
  mavoucher: string;

  @Column("boolean", { name: "loaivoucher", nullable: true })
  loaivoucher: boolean | null;

  @Column("integer", { name: "soluong", nullable: true })
  soluong: number | null;

  @Column("text", { name: "mota", nullable: true })
  mota: string | null;

  @Column("date", { name: "hansudung", nullable: true })
  hansudung: string | null;

  @OneToMany(() => Donhang, (donhang) => donhang.mavoucher)
  donhangs: Donhang[];
}
