import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { Identityuser } from './Identityuser';

@Index('role_pkey', ['id'], { unique: true })
@Entity('role', { schema: 'public' })
export class Role {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('character varying', { name: 'namerole', nullable: true })
  namerole: string | null;

  @ManyToMany(() => Identityuser, (identityuser) => identityuser.roles)
  @JoinTable({
    name: 'userrole',
    joinColumns: [{ name: 'roleid', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'userid', referencedColumnName: 'id' }],
    schema: 'public',
  })
  identityusers: Identityuser[];
}
