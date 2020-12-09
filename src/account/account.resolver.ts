/* eslint-disable no-shadow */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { Account } from './account.model'
import { NewAccountInput } from './dtos/new-account.input'
import { AccountsArgs } from './dtos/accounts.args'
import { AccountService } from './account.service'

const pubSub = new PubSub()

@Resolver((of) => Account)
export class AccountsResolver {
  constructor(private readonly AccountsService: AccountService) {}

  @Query((returns) => Account)
  async Account(@Args('id') id: string): Promise<Account> {
    const Account = await this.AccountsService.findOneById(id)
    if (!Account) {
      throw new NotFoundException(id)
    }
    return Account
  }

  @Query((returns) => [Account])
  Accounts(@Args() AccountsArgs: AccountsArgs): Promise<Account[]> {
    // return this.AccountsService.findAll(AccountsArgs);
    return this.AccountsService.findAll(AccountsArgs)
  }

  @Mutation((returns) => Account)
  async addAccount(@Args('newAccountData') newAccountData: NewAccountInput): Promise<Account> {
    const Account = await this.AccountsService.create(newAccountData)
    pubSub.publish('AccountAdded', { AccountAdded: Account })
    return Account
  }

  @Mutation((returns) => Boolean)
  async removeAccount(@Args('id') id: string) {
    return this.AccountsService.remove(id)
  }

  @Subscription((returns) => Account)
  AccountAdded() {
    return pubSub.asyncIterator('AccountAdded')
  }
}
