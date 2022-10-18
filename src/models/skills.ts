import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import Upvote from "../controllers/Upvotes";
import { Upvote } from "./Upvote";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number | string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Upvote, "skill")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}
