import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Sanpham } from './Sanpham';

@Index('chuongtrinhkhuyenmai_pk', ['machuongtrinh'], { unique: true })
@Entity('chuongtrinhkhuyenmai', { schema: 'public' })
export class Chuongtrinhkhuyenmai {
  @Column('character varying', { primary: true, name: 'machuongtrinh' })
  machuongtrinh: string;

  @Column('character varying', { name: 'tenchuongtrinh', nullable: true })
  tenchuongtrinh: string | null;

  @Column('integer', { name: 'giatrikhuyenmai', nullable: true })
  giatrikhuyenmai: number | null;

  @Column('character varying', { name: 'donviapdung', nullable: true })
  donviapdung: string | null;

  @Column('date', { name: 'ngaybatdau', nullable: true })
  ngaybatdau: string | null;

  @Column('date', { name: 'ngayketthuc', nullable: true })
  ngayketthuc: string | null;

  @OneToMany(() => Sanpham, (sanpham) => sanpham.machuongtrinh)
  sanphams: Sanpham[];
}
