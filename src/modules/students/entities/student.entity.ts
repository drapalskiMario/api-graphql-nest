import { BaseEntity } from "src/modules/bases/entities/base.entity";
import { Discipline } from "src/modules/disciplines/entities/discipline.entity";
import { Entity, Column, ManyToMany } from "typeorm";

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students)
  disciplines: Discipline[];
}
