import { UseGuards } from '@nestjs/common'
import { Resolver, Query } from '@nestjs/graphql'
// import { SrvmonService } from './srvmon.service'
import { ServiceInfoModel } from './models/service-info.model'
import { UsageStatesModel } from './models/usage-stats.model'
import { GqlAuthGuard } from '../shared/guard/gqlAuth.guard'

@Resolver('Srvmon')
export class SrvmonResolver {
  // constructor(private readonly srvmonService: SrvmonService) {
  //   this.srvmonService = srvmonService
  // }
  // @Query(() => ServiceInfoModel)
  // @UseGuards(GqlAuthGuard)
  // public getBanwagonServiceInfo() {
  //   return this.srvmonService.getServiceInfo()
  // }
  // @Query(() => [UsageStatesModel])
  // @UseGuards(GqlAuthGuard)
  // public getBanwagonUsageStats() {
  //   return this.srvmonService.getUsageStats()
  // }
}
