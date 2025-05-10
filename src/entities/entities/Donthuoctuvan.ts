import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Chitietdonthuoctuvan } from './Chitietdonthuoctuvan';
import { Identityuser } from './Identityuser';

@Index('donthuoctuvan_pk', ['id'], { unique: true })
@Index('madonthuoctuvan_unique', ['madon'], { unique: true })
@Entity('donthuoctuvan', { schema: 'public' })
export class Donthuoctuvan {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'madon', unique: true })
  madon: string;

  @Column('character varying', { name: 'hoten', nullable: true })
  hoten: string | null;

  @Column('character varying', { name: 'sodienthoai', nullable: true })
  sodienthoai: string | null;

  @Column('character varying', { name: 'ghichu', nullable: true })
  ghichu: string | null;

  @Column('text', { name: 'anhdonthuoc', nullable: true })
  anhdonthuoc: string | null;

  @OneToMany(() => Chitietdonthuoctuvan, (chitietdonthuoctuvan) => chitietdonthuoctuvan.madonthuoc2)
  chitietdonthuoctuvans: Chitietdonthuoctuvan[];

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.donthuoctuvans)
  @JoinColumn([{ name: 'userid', referencedColumnName: 'id' }])
  user: Identityuser;
}
