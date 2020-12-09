// import { Injectable, HttpService } from '@nestjs/common'
// import fetch from 'node-fetch'
// import qs, { StringifiableRecord } from 'query-string'
// // import { Observable } from 'rxjs'
// // import { map } from 'rxjs/operators'
// import { AxiosResponse } from 'axios'
// import { Account } from 'src/accounts/schemas/accounts.schema'
// import { SrvmonParams } from './interfaces/srvmon-params.interface'
// import { ServiceInfo } from './interfaces/service-info.interface'
// import { UsageStats } from './interfaces/usage-stats.interface'
// import { ConfigService } from '../config/config.service'
// import { BANDWAGON_SERVICE_INFO_URL, BANDWAGON_USAGE_STATS_URL } from '../shared/constants'

// @Injectable()
// export class SrvmonService {
//   private readonly params: StringifiableRecord

//   constructor(private readonly httpService: HttpService, configService: ConfigService) {
//     this.httpService = httpService

//     // const SMAPIKEY = ''

//     // this.params = { veid: BANDWAGON_SERVER_ID, api_key: BANDWAGON_SECRET_KEY }
//   }

//   public async findAccountsTotal(): Promise<number> {
//     // const response = await this.httpSe
// rvice.get<any[]>(`/accounts?/Fields=accountID`).toPromise()
//     const params: StringifiableRecord = { Fields: 'accountID' }
//     const res = await fetch(`/accounts?${qs.stringify(params)}`)
//     const json = await res.json()
//     const { count } = json
//     return count
//   }

//   async findAccounts(pageCount): Promise<MonsterAccount[]> {
//     const pages = Array(pageCount)
//       .fill(0)
//       .map((d, i) => i)
//     const request = (pageNumber) => fetch(`/accounts?pageIndex=${pageNumber}&limit=100`)

//     const { error, data } = await this.makeRequest(pages, request, {
//       batchSize: 20,
//       delay: 500,
//     })
//     const accounts = []
//     data.forEach((group) => {
//       const { items } = group.data
//       accounts.push(...items)
//     })
//     return accounts.map((item) => new Account(item))
//   }

//   /**
//  * Batch async requests, throttled with a delay
//  * to avoid hammering the network
//  *
//  * @param {Array} records
//  * @param {Function} request (returns Promise)
//  * @param {Object} options
// //  * @returns {Options} result { error, data }
//  */

//   async makeRequest(
//     records,
//     request,
//     options,
//     // records: Array<any>,
//     // request: Function = string => {},
//     // options: BatchRequestOptions = { batchSize: 100, delay: 100 },
//   ): Promise<any> {
//     return new Promise<{ error: any; data: any }>(async (resolve) => {
//       let response = []
//       const data = []
//       const error = []
//       const len = Math.ceil(records.length / 50)
//       for (let i = 0; i < records.length; i += options.batchSize) {
//         const batch = records.slice(i, i + options.batchSize)
//         const result = await Promise.all(
//           batch.map((record) => request(record).catch((e) => ({ record, error: new Error(e) }))),
//         )
//         response = response.concat(result)
//         await this.delay(options.delay)
//       }
//       // separate successful requests from errors
//       response.forEach((res) => {
//         res && res.error instanceof Error ? error.push(res) : data.push(res)
//       })
//       resolve({
//         error,
//         data,
//       })
//     })
//   }

//   delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms))
// }
