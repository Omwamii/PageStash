import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto, BookMarkDto } from './dto/';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';

@Resolver(() => BookMarkDto)
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService, private userService: UserService) {}

  // Query to fetch all bookmarks
  @Query(() => [BookMarkDto], { name: 'bookmarks' })
  async findAll(@Args('id', { type: () => Int }) id: number): Promise<BookMarkDto[]> {
    return this.bookmarkService.getBookmarks(id);
  }

  // Query to fetch a single bookmark by ID
  @Query(() => BookMarkDto, { name: 'bookmark' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<BookMarkDto> {
    return this.bookmarkService.getBookmarkById(id);
  }

  // Mutation to create a new bookmark
  @Mutation(() => BookMarkDto, { name: 'createBookmark' })
  async create(
    @Args('id', { type: () => Int }) userId: number,
    @Args('data') data: CreateBookmarkDto,
  ): Promise<BookMarkDto> {
    return this.bookmarkService.createBookmark(userId, data);
  }

  // Mutation to update an existing bookmark
  @Mutation(() => BookMarkDto, { name: 'updateBookmark' })
  async update(
    @Args('userId', { type: () => Int}) userId: number,
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: EditBookmarkDto,
  ): Promise<BookMarkDto> {
    return this.bookmarkService.editBookmarkById(userId, id, data);
  }

  // Mutation to delete a bookmark
  @Mutation(() => BookMarkDto, { name: 'deleteBookmark' })
  async delete(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('id', { type: () => Int }) id: number): Promise<BookMarkDto> {
    return this.bookmarkService.deleteBookmarkById(userId, id);
  }

  @ResolveField('user', () => [UserDto])
  async bookmarks (@Parent() bookmark: BookMarkDto) {
    const { userId } = bookmark;
    return this.userService.getUser(userId);
  }

}
