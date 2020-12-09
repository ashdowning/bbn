import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { AccountsResolver } from './account.resolver'
import { DateScalar } from '../shared/scalars/date.scalar'
import { Account } from './account.model'
import { AccountController } from './accounts.controller'
import { AccountService } from './account.service'

@Module({
  imports: [TypegooseModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService, AccountsResolver, DateScalar],
})
export class AccountsModule {}
