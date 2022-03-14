import { Module } from "@nestjs/common";
import { Content } from "./entities/content.entity";
import { ContentDTO } from "./dto/content.dto";
import { CreateContentInput } from "./dto/create-content.input";
import { UpdateContentInput } from "./dto/update-content.input";
import { NestjsQueryGraphQLModule } from "@nestjs-query/query-graphql";
import { NestjsQueryTypeOrmModule } from "@nestjs-query/query-typeorm";

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Content])],
      resolvers: [
        {
          DTOClass: ContentDTO,
          EntityClass: Content,
          CreateDTOClass: CreateContentInput,
          UpdateDTOClass: UpdateContentInput,
          enableTotalCount: true,
        },
      ],
    }),
  ],
  providers: [],
})
export class ContentsModule {}
