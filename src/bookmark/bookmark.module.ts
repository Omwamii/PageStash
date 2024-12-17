import { Module, forwardRef } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)], // handle circular import btwn UserModule & BookMarkModule
  controllers: [BookmarkController],
  providers: [BookmarkService, BookmarkResolver],
  exports: [BookmarkService],
})
export class BookmarkModule {}
