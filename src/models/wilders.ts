import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Upvote } from "./Upvote";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Wilder {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number | string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  city: string;
  skills: any;

  @OneToMany(() => Upvote, "wilder")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}

// interface Wilder extends Document {
//   name: string;
//   city: string;
//   skills: Array<{ name: string; votes: number }>;
//   image: File;
// }

// export interface File {
//   name: string;
//   size: number;
//   type: string;
//   extension: string;
//   content: ArrayBuffer;
// }

// const schema = new Schema<Wilder>({
//   name: { type: String, required: true },
//   city: String,
//   skills: [{ title: String, votes: Number }],
//   image: {
//     name: String,
//     size: Number,
//     type: String,
//     extension: String,
//     content: Buffer,
//   },
// });

// const WilderModel = model<Wilder>("Wilder", schema);

// module.exports = WilderModel;
