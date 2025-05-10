import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Sanpham } from './Sanpham';

@Index('thuonghieu_pkey', ['mathuonghieu'], { unique: true })
@Entity('thuonghieu', { schema: 'public' })
export class Thuonghieu {
  @Column('character varying', {
    primary: true,
    name: 'mathuonghieu',
    length: 50,
  })
  mathuonghieu: string;

  @Column('character varying', {
    name: 'tenthuonghieu',
    nullable: true,
    length: 100,
  })
  tenthuonghieu: string | null;

  @Column('character varying', { name: 'mota', nullable: true })
  mota: string | null;

  @OneToMany(() => Sanpham, (sanpham) => sanpham.mathuonghieu)
  sanphams: Sanpham[];
}
