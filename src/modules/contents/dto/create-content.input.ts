import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateContentInput {
  @Field()
  description: string;

  @Field({ nullable: true })
  likeContent?: string;

  @Field({ nullable: true })
  lessonId?: string;
}
