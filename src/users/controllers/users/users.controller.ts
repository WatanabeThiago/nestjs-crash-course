import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { username: 'watanabethiago4', email: 'watanabe.thaigo4@gmail.com' },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: CreateUserDto) {
    return { id: randomUUID(), ...userPayload };
  }

  @Get(':userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number) {
    return { userId };
  }
}
