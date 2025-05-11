import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../entities/register.dto';
import { LoginDto } from '../entities/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async register(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, password, confirmPassword } = registerDto;

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Here you would save the user to the database
    // For example: await this.userRepository.save({ email, password: hashedPassword });

    return { message: 'Registration successful' };
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;

    // Here you would retrieve the user from the database
    // For example: const user = await this.userRepository.findOne({ email });

    // Simulate user retrieval and password check
    const user = { email: 'user@example.com', password: await bcrypt.hash('password123', 10) };

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const payload = { email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
} 