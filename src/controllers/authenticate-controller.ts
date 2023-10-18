import {
  ConflictException,
  Body,
  Controller,
  Post,
  HttpCode,
  UsePipes,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { hash } from 'bcryptjs'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

// const createAccountBodySchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// })

// type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @HttpCode(201)
  // @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle() {
    const token = this.jwt.sign({ sub: 'user-id' })

    return token
  }
}
