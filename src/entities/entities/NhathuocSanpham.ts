import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Nhathuoc } from './Nhathuoc';
import { Sanpham } from './Sanpham';

@Index('nhathuoc_sanpham_unique', ['machinhanh', 'masanpham'], { unique: true })
@Index('nhathuoc_sanpham_pk', ['machinhanh', 'masanpham'], { unique: true })
@Entity('nhathuoc_sanpham', { schema: 'public' })
export class NhathuocSanpham {
  @Column('character varying', { primary: true, name: 'machinhanh' })
  machinhanh: string;

  @Column('character varying', { primary: true, name: 'masanpham' })
  masanpham: string;

  @Column('character varying', { name: 'soluong', nullable: true })
  soluong: string | null;

  @ManyToOne(() => Nhathuoc, (nhathuoc) => nhathuoc.nhathuocSanphams, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'machinhanh', referencedColumnName: 'machinhanh' }])
  machinhanh2: Nhathuoc;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.nhathuocSanphams, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham2: Sanpham;
}
