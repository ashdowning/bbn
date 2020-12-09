import { Module, HttpModule } from '@nestjs/common'
// import { SrvmonService } from './srvmon.service'
import { SrvmonResolver } from './srvmon.resolver'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
        baseURL: 'https://api.servicemonster.net/v1',
        headers: {
          Authorization: 'Basic NGM4T1JQbk86Q2ppVU1ydHZxZVg0TVN0MA==',
          'Content-Type': 'application/json',
        },
      }),
    }),
  ],
  // providers: [SrvmonService, SrvmonResolver],
})
export class SrvmonModule {}
