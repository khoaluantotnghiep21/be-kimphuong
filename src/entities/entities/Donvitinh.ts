import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Chitietdonvi } from './Chitietdonvi';

@Index('donvitinh_unique', ['donvitinh'], { unique: true })
@Index('madonvitinh_pk', ['madonvitinh'], { unique: true })
@Entity('donvitinh', { schema: 'public' })
export class Donvitinh {
  @Column('character varying', { primary: true, name: 'madonvitinh' })
  madonvitinh: string;

  @Column('character varying', { name: 'donvitinh', unique: true })
  donvitinh: string;

  @OneToMany(() => Chitietdonvi, (chitietdonvi) => chitietdonvi.madonvitinh2)
  chitietdonvis: Chitietdonvi[];
}
