import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppService } from "./app.service";
import { StudentsModule } from "./modules/students/students.module";
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { ContentsModule } from './modules/contents/contents.module';
import { LessonsModule } from './modules/lessons/lessons.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    StudentsModule,
    DisciplinesModule,
    ContentsModule,
    LessonsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
