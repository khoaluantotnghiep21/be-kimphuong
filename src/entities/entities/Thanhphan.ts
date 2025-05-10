import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Chitietthanhphan } from './Chitietthanhphan';

@Index('thanhphan_pk', ['mathanhphan'], { unique: true })
@Entity('thanhphan', { schema: 'public' })
export class Thanhphan {
  @Column('character varying', { primary: true, name: 'mathanhphan' })
  mathanhphan: string;

  @Column('character varying', { name: 'tenthanhphan', nullable: true })
  tenthanhphan: string | null;

  @OneToMany(() => Chitietthanhphan, (chitietthanhphan) => chitietthanhphan.mathanhphan2)
  chitietthanhphans: Chitietthanhphan[];
}
