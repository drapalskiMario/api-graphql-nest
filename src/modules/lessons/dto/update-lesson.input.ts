import { CreateLessonInput } from "./create-lesson.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @Field({ nullable: true })
  id: string;
}
