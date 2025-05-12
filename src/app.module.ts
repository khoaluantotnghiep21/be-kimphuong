import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { SanphamController } from './controllers/sanpham.controller';
import { SanphamService } from './services/sanpham.service';
import { Sanpham } from './entities/entities/Sanpham';
import { Binhluan } from './entities/entities/Binhluan';
import { Thuonghieu } from './entities/entities/Thuonghieu';
import { Voucher } from './entities/entities/Voucher';
import { Role } from './entities/entities/Role';
import { Thanhphan } from './entities/entities/Thanhphan';
import { NhathuocSanpham } from './entities/entities/NhathuocSanpham';
import { Otpcode } from './entities/entities/Otpcode';
import { Donthuoctuvan } from './entities/entities/Donthuoctuvan';
import { Donvitinh } from './entities/entities/Donvitinh';
import { Identityuser } from './entities/entities/Identityuser';
import { Nhathuoc } from './entities/entities/Nhathuoc';
import { Danhmuc } from './entities/entities/Danhmuc';
import { Donhang } from './entities/entities/Donhang';
import { Donnhaphang } from './entities/entities/Donnhaphang';
import { Chitietthanhphan } from './entities/entities/Chitietthanhphan';
import { Chuongtrinhkhuyenmai } from './entities/entities/Chuongtrinhkhuyenmai';
import { Danhgia } from './entities/entities/Danhgia';
import { Chitietdonvi } from './entities/entities/Chitietdonvi';
import { Chitietdonhang } from './entities/entities/Chitietdonhang';
import { Chitietdonnhap } from './entities/entities/Chitietdonnhap';
import { Chitietdonthuoctuvan } from './entities/entities/Chitietdonthuoctuvan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformerResponseInterceptor } from './interceptor/response/transformer-response.interceptor';
import { Order } from './util/enum/order.enum';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Sanpham, Binhluan, Thuonghieu, Voucher, Role, Thanhphan, NhathuocSanpham, Otpcode, Donthuoctuvan, Donvitinh, Identityuser, Nhathuoc, Danhmuc, Donhang, Donnhaphang, Chitietthanhphan, Chuongtrinhkhuyenmai, Danhgia, Chitietdonvi, Chitietdonhang, Chitietdonnhap, Chitietdonthuoctuvan],
        synchronize: false,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    
    TypeOrmModule.forFeature([Sanpham, Binhluan]),
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController, SanphamController],
  providers: [
    AuthService,
    SanphamService,

    {
      provide: APP_INTERCEPTOR,
      useClass: TransformerResponseInterceptor,
    },
    
  ],
})
export class AppModule {}
