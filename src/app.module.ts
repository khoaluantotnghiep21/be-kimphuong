import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'maglev.proxy.rlwy.net',
      port: 33280,
      username: 'postgres',
      password: 'YsgOzNJEKrNdCjNopYPMFxrQxnhbFORd',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
