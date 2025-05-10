import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Thanhphan } from './Thanhphan';
import { Sanpham } from './Sanpham';

@Index('chitietthanhphan_pk', ['masanpham', 'mathanhphan'], { unique: true })
@Entity('chitietthanhphan', { schema: 'public' })
export class Chitietthanhphan {
  @Column('character varying', { primary: true, name: 'masanpham' })
  masanpham: string;

  @Column('character varying', { primary: true, name: 'mathanhphan' })
  mathanhphan: string;

  @Column('real', { name: 'hamluong', nullable: true, precision: 24 })
  hamluong: number | null;

  @ManyToOne(() => Thanhphan, (thanhphan) => thanhphan.chitietthanhphans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mathanhphan', referencedColumnName: 'mathanhphan' }])
  mathanhphan2: Thanhphan;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.chitietthanhphans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham2: Sanpham;
}
