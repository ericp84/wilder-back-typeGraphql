import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Upvote {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { nullable: true })
  id: number;

  @Column({ default: 0 })
  @Field({ nullable: true })
  upvotes: number;

  @ManyToOne(() => Skill, "upvotes")
  @Field(() => Skill)
  skill: Skill;

  @ManyToOne(() => Wilder, "upvotes", { onDelete: "CASCADE" })
  @Field(() => Wilder)
  wilder: Wilder;

  // @ManyToOne(() => Wilder, (wilder) => wilder.upvotes, { onDelete: "CASCADE" })
  // @Field(() => Wilder, { nullable: true })
  // wilder: Wilder[];

  // @ManyToOne(() => Skill, (skill) => skill.upvotes, { onDelete: "CASCADE" })
  // @Field(() => Skill, { nullable: true })
  // skill: Skill[];
}
