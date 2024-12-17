import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { BookmarkService } from 'src/bookmark/bookmark.service';
import { BookmarkModule } from 'src/bookmark/bookmark.module';

@Module({
  imports: [BookmarkModule],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
