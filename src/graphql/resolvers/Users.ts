import { Query, Arg, Resolver, Mutation, ID } from "type-graphql";
import { User } from "../../models/User";
import dataSource from "../../utils";
import { hash } from "argon2";

@Resolver()
export class UserResolver {
  ///////// MUTATION CREATE /////////
  @Mutation(() => User)
  async createUser(
    @Arg("password") password: string,
    @Arg("email") email: string
  ): Promise<User> {
    const hashedPassword = await hash(password);
    return await dataSource
      .getRepository(User)
      .save({ email, password: hashedPassword });
  }

  ///////// MUTATION DELETE USERS ////////
  @Mutation(() => User)
  async deleteUser(): Promise<any> {
    return await dataSource
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .execute();
  }
  ///////// MUTATION DELETE ONE USER ///////////
  @Mutation(() => User)
  async deleteOneUser(@Arg("id", () => ID) id: number): Promise<any> {
    return await dataSource
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
  /////// MUTATION UPDATE USER //////////
  @Mutation(() => User)
  async updateUser(
    @Arg("id", () => ID) id: number,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const UserToUpdate = await dataSource
      .getRepository(User)
      .findOne({ where: { id } });

    if (UserToUpdate === null) {
      return null;
    }
    if (email !== null) {
      UserToUpdate.email = email;
    }
    if (password !== null) {
      UserToUpdate.password = password;
    }
    return await dataSource.getRepository(User).save(UserToUpdate);
  }
  ///////// QUERY FIND ALL USERS /////////////
  @Query(() => [User], { nullable: true })
  async Users(): Promise<User[]> {
    const Users = await dataSource.getRepository(User).find({});
    return Users;
  }
  ///////// QUERY FIND ONE USER ///////////
  @Query(() => User, { nullable: true })
  async User(@Arg("id", () => ID) id: number): Promise<User | null> {
    return await dataSource.getRepository(User).findOne({ where: { id } });
  }
}
