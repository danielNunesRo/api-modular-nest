import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { DataBaseService } from './shared/database/database.service';
import { SqlLoggerMiddleware } from './middlewares/SqlLoggerMiddleware';



@Module({
  imports: [UserModule],
  controllers: [],
  providers: [DataBaseService, SqlLoggerMiddleware],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(SqlLoggerMiddleware)
        .forRoutes('*');
}
}
