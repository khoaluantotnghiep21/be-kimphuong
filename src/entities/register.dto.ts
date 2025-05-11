import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Match } from './match.decorator';

export class RegisterDto {
  @ApiProperty({ description: 'User email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'User password' })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Password confirmation' })
  @IsNotEmpty()
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword: string;
} 