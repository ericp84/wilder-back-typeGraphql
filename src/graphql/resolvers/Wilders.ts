import { Query, Arg, Resolver, Mutation, ID } from "type-graphql";
import { Wilder } from "../../models/wilders";
import dataSource from "../../utils";

@Resolver()
export class WilderResolver {
  @Mutation(() => Wilder)
  async createWilder(
    @Arg("name") name: string,
    @Arg("city") city: string
  ): Promise<Wilder> {
    return await dataSource.getRepository(Wilder).save({ name, city });
  }
  @Mutation(() => Wilder)
  async deleteWilder(): Promise<any> {
    return await dataSource
      .getRepository(Wilder)
      .createQueryBuilder()
      .delete()
      .from(Wilder)
      .execute();
  }
  @Mutation(() => Wilder)
  async deleteOneWilder(@Arg("id", () => ID) id: number): Promise<any> {
    return await dataSource
      .getRepository(Wilder)
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    return await dataSource
      .getRepository(Wilder)
      .find({ relations: ["upvotes", "upvotes.skill"] });
  }
  @Query(() => Wilder, { nullable: true })
  async wilder(@Arg("id", () => ID) id: number): Promise<Wilder | null> {
    return await dataSource
      .getRepository(Wilder)
      .findOne({ where: { id }, relations: ["upvotes", "upvotes.skill"] });
  }
}

// const resolvers = {
//   Query: {
//     findAll: async (): Promise<Wilder[]> => {
//       const data = await dataSource
//         .getRepository(Wilder)
//         .find({ relations: ["upvotes", "upvotes.skill"] });
//       return data;
//     },

//     find: async (_: any, args: { wilderId: any }): Promise<Wilder | null> => {
//       const data = await dataSource
//         .getRepository(Wilder)
//         .findOneBy({ id: args.wilderId });
//       return data;
//     },
//   },
//   Mutation: {
//     create: async (_: any, args: any) => {
//       const newWilder = await dataSource.getRepository(Wilder).save({
//         name: args.name,
//         city: args.city,
//       });
//       return newWilder;
//     },
//     deleteOneWilder: async (_: any, args: { id: number }) => {
//       const deleteOneWilder = await dataSource
//         .getRepository(Wilder)
//         .createQueryBuilder()
//         .delete()
//         .where("id = :id", { id: args.id })
//         .execute();
//       return deleteOneWilder;
//     },
//   },
// };
// export default resolvers;
//   Mutation: {
//     addWilder: async (
//       _: any,
//       args: { name: String; city: String; skills: [] }
//     ) => {
//       const wilder = new Wilder({
//         name: args.name,
//         city: args.city,
//         skills: args.skills,
//       });
//       await wilder.save();
//       return wilder;
//     },
//     deleteWilder: async (_: any, args: { id: String }) => {
//       await Wilder.findByIdAndDelete(args.id);
//       return { id: args.id };
//     },
//     updateWilder: async (
//       _: any,
//       args: { id: String; name: String; city: String; skills: [] }
//     ) => {
//       const wilder = await Wilder.findByIdAndUpdate(
//         args.id,
//         {
//           name: args.name,
//           city: args.city,
//           skills: args.skills,
//         },
//         { new: true }
//       );
//       return wilder;
//     },
//   },
// };

// module.exports = resolvers;