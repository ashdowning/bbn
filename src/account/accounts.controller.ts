/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable no-return-await */
import { Body, Controller, Get, Post } from '@nestjs/common'
import { AccountService } from './account.service'
import { Account } from './account.model'

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('listaccounts')
  async listAccounts(): Promise<Account[] | null> {
    return await this.accountService.listAccounts()
  }

  @Post('createaccount')
  async createAccount(@Body() account: Account): Promise<Account> {
    return await this.accountService.createCustomAccount(account)
  }
}
