import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Skill } from "./skills";
import { Wilder } from "./wilders";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Upvote {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ default: 0 })
  @Field()
  upvotes: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.upvotes, { onDelete: "CASCADE" })
  @Field(() => Wilder)
  wilder: Wilder;

  @ManyToOne(() => Skill, (skill) => skill.upvotes, { onDelete: "CASCADE" })
  @Field(() => Skill)
  skill: Skill;
}
