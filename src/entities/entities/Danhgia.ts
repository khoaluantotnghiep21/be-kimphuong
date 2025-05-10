import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Identityuser } from './Identityuser';
import { Sanpham } from './Sanpham';

@Index('danhgia_pk', ['madanhgia'], { unique: true })
@Entity('danhgia', { schema: 'public' })
export class Danhgia {
  @Column('character varying', { primary: true, name: 'madanhgia' })
  madanhgia: string;

  @Column('integer', { name: 'sosao', nullable: true })
  sosao: number | null;

  @Column('text', { name: 'noidung', nullable: true })
  noidung: string | null;

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.danhgias)
  @JoinColumn([{ name: 'userid', referencedColumnName: 'id' }])
  user: Identityuser;

  @ManyToOne(() => Sanpham, (sanpham) => sanpham.danhgias, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'masanpham', referencedColumnName: 'masanpham' }])
  masanpham: Sanpham;
}
