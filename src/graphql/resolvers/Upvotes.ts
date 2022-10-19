import { Query, Arg, Resolver, Mutation, ID } from "type-graphql";
import { Upvote } from "../../models/Upvote";
import dataSource from "../../utils";

@Resolver()
export class UpvoteResolver {
  @Mutation(() => Upvote)
  async createUpvote(
    @Arg("wilderId", () => ID) wilderId: number,
    @Arg("skillId", () => ID) skillId: number
  ): Promise<any> {
    const existingUpvote = await dataSource
      .getRepository(Upvote)
      .findOneBy({ skill: { id: skillId }, wilder: { id: wilderId } });
    if (existingUpvote) {
      return existingUpvote;
    } else {
      return await dataSource.getRepository(Upvote).save({
        wilder: { id: wilderId },
        skill: { id: skillId },
      });
    }
  }
  @Mutation(() => Upvote)
  async upVote(@Arg("upvoteId", () => ID) upvoteId: number): Promise<any> {
    const existingUpVote = await dataSource
      .getRepository(Upvote)
      .findOneBy({ id: upvoteId });
    if (existingUpVote) {
      existingUpVote.upvotes += 1;
    }
    await dataSource.getRepository(Upvote).save(existingUpVote);
    return existingUpVote;
  }

  @Query(() => [Upvote])
  async upvotes(): Promise<Upvote[]> {
    const upvoting = await dataSource.getRepository(Upvote).find({});
    console.log(
      "🚀 ~ file: Upvotes.ts ~ line 44 ~ UpvoteResolver ~ upvotes ~ upvoting",
      upvoting
    );
    return upvoting;
  }
  @Query(() => Upvote, { nullable: true })
  async upvote(@Arg("id") id: number): Promise<Upvote | null> {
    return await dataSource.getRepository(Upvote).findOne({ where: { id } });
  }
}
