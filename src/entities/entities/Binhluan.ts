import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Identityuser } from './Identityuser';
import { Sanpham } from './Sanpham';

@Index('binhluan_pk', ['mabinhluan'], { unique: true })
@Entity('binhluan', { schema: 'public' })
export class Binhluan {
  @Column('character varying', { primary: true, name: 'mabinhluan' })
  mabinhluan: string;

  @Column('text', { name: 'noidung', nullable: true })
  noidung: string | null;

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.binhluans)
  @JoinColumn([{ name: 'userid', referencedColumnName: 'id' }])
  user: Identityuser;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.binhluans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham: Sanpham;
}
