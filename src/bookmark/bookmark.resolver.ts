import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto, BookMarkDto } from './dto/';
import { UserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';

@Resolver(() => BookMarkDto)
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService, private userService: UserService) {}

  @Query(() => [BookMarkDto], { name: 'bookmarks' })
  async findAll(@Args('id', { type: () => Int }) id: number): Promise<BookMarkDto[]> {
    return this.bookmarkService.getBookmarks(id);
  }

  @Query(() => BookMarkDto, { name: 'bookmark', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<BookMarkDto | null> {
    return this.bookmarkService.getBookmarkById(id);
  }

  @Mutation(() => BookMarkDto, { name: 'createBookmark', nullable: true })
  async create(
    @Args('id', { type: () => Int }) userId: number,
    @Args('data') data: CreateBookmarkDto,
  ): Promise<BookMarkDto | null> {
    return this.bookmarkService.createBookmark(userId, data);
  }

  @Mutation(() => BookMarkDto, { name: 'updateBookmark', nullable: true })
  async update(
    @Args('userId', { type: () => Int}) userId: number,
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: EditBookmarkDto,
  ): Promise<BookMarkDto | null> {
    return this.bookmarkService.editBookmarkById(userId, id, data);
  }

  @Mutation(() => BookMarkDto, { name: 'deleteBookmark', nullable: true })
  async delete(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('id', { type: () => Int }) id: number): Promise<BookMarkDto | null> {
    return this.bookmarkService.deleteBookmarkById(userId, id);
  }

  @ResolveField('user', () => [UserDto])
  async bookmarks (@Parent() bookmark: BookMarkDto) {
    const { userId } = bookmark;
    return this.userService.getUser(userId);
  }

}
