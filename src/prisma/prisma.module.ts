import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ConfigService } from 'nestjs-config';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})

export class PrismaModule {}
