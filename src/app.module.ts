import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

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
    ProductsModule,
  ],
})
export class AppModule {}
