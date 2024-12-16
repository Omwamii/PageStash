import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto, CreateUserDto, EditUserDto } from './dto';
import { BookMarkDto } from 'src/bookmark/dto';
import { BookmarkService } from 'src/bookmark/bookmark.service';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService, private bookmarkService: BookmarkService) {}

  @Query(() => [UserDto], { name: 'users' })
  async findAll(): Promise<UserDto[]> {
    return this.userService.getUsers();
  } 

  @Query(() => UserDto, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<UserDto> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(data);
  }

  @Mutation(() => UserDto)
  async updateUser(@Args('id', { type: () => Int}) id: number, @Args('data') data: EditUserDto): Promise<UserDto> {
    return this.userService.editUser(id, data);
  }

  @Mutation(() => UserDto)
  async removeUser(@Args('id', { type: () => Int }) id: number): Promise<UserDto> {
    return this.userService.deleteUser(id);
  }

  @ResolveField('bookmarks', () => [BookMarkDto])
  async bookmarks (@Parent() user: UserDto) {
    const { id } = user;
    return this.bookmarkService.getBookmarks(id);
  }
}
