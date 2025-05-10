import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Donnhaphang } from './Donnhaphang';
import { Sanpham } from './Sanpham';

@Index('chitietdonnhap_pk', ['madonnhap', 'masanpham'], { unique: true })
@Index('chitietdonnhap_unique', ['madonnhap', 'masanpham'], { unique: true })
@Entity('chitietdonnhap', { schema: 'public' })
export class Chitietdonnhap {
  @Column('character varying', { primary: true, name: 'madonnhap' })
  madonnhap: string;

  @Column('character varying', { primary: true, name: 'masanpham' })
  masanpham: string;

  @Column('integer', { name: 'soluong', nullable: true })
  soluong: number | null;

  @ManyToOne(() => Donnhaphang, (donnhaphang) => donnhaphang.chitietdonnhaps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'madonnhap', referencedColumnName: 'madonnhap' }])
  madonnhap2: Donnhaphang;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.chitietdonnhaps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham2: Sanpham;
}
