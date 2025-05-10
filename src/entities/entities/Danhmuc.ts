import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Sanpham } from './Sanpham';

@Index('danhmuc_pk', ['madanhmuc'], { unique: true })
@Entity('danhmuc', { schema: 'public' })
export class Danhmuc {
  @Column('character varying', { primary: true, name: 'madanhmuc' })
  madanhmuc: string;

  @Column('character varying', { name: 'tendanhmuc', nullable: true })
  tendanhmuc: string | null;

  @Column('integer', { name: 'soluong', nullable: true, default: () => '0' })
  soluong: number | null;

  @OneToMany(() => Sanpham, (sanpham) => sanpham.madanhmuc)
  sanphams: Sanpham[];
}
