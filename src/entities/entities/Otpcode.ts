import { Column, Entity, Index } from "typeorm";

@Index("otpcode_pkey", ["id"], { unique: true })
@Entity("otpcode", { schema: "public" })
export class Otpcode {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", {
    name: "sodienthoai",
    nullable: true,
    length: 20,
  })
  sodienthoai: string | null;

  @Column("character varying", { name: "otpcode", nullable: true, length: 10 })
  otpcode: string | null;

  @Column("date", { name: "createat", nullable: true })
  createat: string | null;
}
