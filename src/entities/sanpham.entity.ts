import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sanpham {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  masanpham: string;

  @Column()
  tensanpham: string;

  @Column({ nullable: true })
  slug?: string;

  @Column({ nullable: true })
  dangbaoche?: string;

  @Column({ nullable: true })
  congdung?: string;

  @Column({ nullable: true })
  chidinh?: string;

  @Column({ nullable: true })
  chongchidinh?: string;

  @Column({ nullable: true })
  thuockedon?: boolean;

  @Column({ nullable: true })
  motangan?: string;

  @Column({ nullable: true })
  doituongsudung?: string;

  @Column({ nullable: true })
  luuy?: string;

  @Column({ nullable: true })
  ngaysanxuat?: string;

  @Column({ nullable: true })
  hansudung?: number;

  @Column({ nullable: true })
  gianhap?: number;
} 