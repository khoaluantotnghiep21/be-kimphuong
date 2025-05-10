import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Chitietdonnhap } from './Chitietdonnhap';
import { Identityuser } from './Identityuser';

@Index('donnhaphang_pk', ['id'], { unique: true })
@Index('madonnhaphang_unique', ['madonnhap'], { unique: true })
@Entity('donnhaphang', { schema: 'public' })
export class Donnhaphang {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'madonnhap', unique: true })
  madonnhap: string;

  @Column('date', { name: 'ngaynhap', nullable: true })
  ngaynhap: string | null;

  @OneToMany(() => Chitietdonnhap, (chitietdonnhap) => chitietdonnhap.madonnhap2)
  chitietdonnhaps: Chitietdonnhap[];

  @ManyToOne(() => Identityuser, (identityuser) => identityuser.donnhaphangs)
  @JoinColumn([{ name: 'userid', referencedColumnName: 'id' }])
  user: Identityuser;
}
