import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SenatorsModule } from './senators/senators.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes env available everywhere
    }),
    SenatorsModule,
  ],
})
export class AppModule {}