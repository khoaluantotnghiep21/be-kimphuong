import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Donthuoctuvan } from './Donthuoctuvan';
import { Sanpham } from './Sanpham';

@Index('chitietdonthuoctuvan_pk', ['madonthuoc', 'masanpham'], { unique: true })
@Entity('chitietdonthuoctuvan', { schema: 'public' })
export class Chitietdonthuoctuvan {
  @Column('character varying', { primary: true, name: 'madonthuoc' })
  madonthuoc: string;

  @Column('character varying', { primary: true, name: 'masanpham' })
  masanpham: string;

  @Column('integer', { name: 'soluong', nullable: true })
  soluong: number | null;

  @ManyToOne(() => Donthuoctuvan, (donthuoctuvan) => donthuoctuvan.chitietdonthuoctuvans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'madonthuoc', referencedColumnName: 'madon' }])
  madonthuoc2: Donthuoctuvan;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.chitietdonthuoctuvans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham2: Sanpham;
}
