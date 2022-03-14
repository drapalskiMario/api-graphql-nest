import { CreateDisciplineInput } from "./create-discipline.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @Field({ nullable: true })
  id: string;
}
