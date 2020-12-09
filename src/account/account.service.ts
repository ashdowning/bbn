/* eslint-disable new-cap */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable no-return-await */
import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { Account } from './account.model'
import { NewAccountInput } from './dtos/new-account.input'
import { AccountsArgs } from './dtos/accounts.args'

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account) private readonly accountModel: ReturnModelType<typeof Account>,
  ) {}

  async createCustomAccount(account: Account) {
    const createdAccount = new this.accountModel(account)
    return await createdAccount.save()
  }

  async listAccounts(): Promise<Account[] | null> {
    return await this.accountModel.find().exec()
  }

  async create(data: NewAccountInput): Promise<Account> {
    return {} as any
  }

  async findOneById(id: string): Promise<Account> {
    return {} as any
  }

  async findAll(accountsArgs: AccountsArgs): Promise<Account[]> {
    // return [] as Account[];
    // console.log(accountsArgs.take,accountsArgs.skip)
    const page_size = accountsArgs.take
    const page_skip = accountsArgs.skip
    return await this.accountModel.find().skip(page_size).limit(page_size).exec()

    // return await this.accountModel.find().exec()
  }

  async remove(id: string): Promise<boolean> {
    return true
  }
}
