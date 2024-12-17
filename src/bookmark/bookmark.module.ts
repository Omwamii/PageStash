import { Module, forwardRef } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [BookmarkController],
  providers: [BookmarkService, BookmarkResolver],
  exports: [BookmarkService],  // got rid of unresolved dependancy in UserResolver
})
export class BookmarkModule {}
