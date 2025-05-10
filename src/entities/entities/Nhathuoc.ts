import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Donhang } from './Donhang';
import { NhathuocSanpham } from './NhathuocSanpham';

@Index('nhathuoc_pk', ['id'], { unique: true })
@Index('nhathuoc_unique', ['machinhanh'], { unique: true })
@Entity('nhathuoc', { schema: 'public' })
export class Nhathuoc {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'machinhanh', unique: true })
  machinhanh: string;

  @Column('character varying', { name: 'thanhpho', nullable: true })
  thanhpho: string | null;

  @Column('character varying', { name: 'quan', nullable: true })
  quan: string | null;

  @Column('character varying', { name: 'phuong', nullable: true })
  phuong: string | null;

  @Column('character varying', { name: 'tenduong', nullable: true })
  tenduong: string | null;

  @Column('character varying', { name: 'diachicuthe', nullable: true })
  diachicuthe: string | null;

  @OneToMany(() => Donhang, (donhang) => donhang.machinhanh)
  donhangs: Donhang[];

  @OneToMany(() => NhathuocSanpham, (nhathuocSanpham) => nhathuocSanpham.machinhanh2)
  nhathuocSanphams: NhathuocSanpham[];
}
