/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MetadataWhereUniqueInput } from "./MetadataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MetadataUpdateInput } from "./MetadataUpdateInput";

@ArgsType()
class UpdateMetadataArgs {
  @ApiProperty({
    required: true,
    type: () => MetadataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MetadataWhereUniqueInput)
  @Field(() => MetadataWhereUniqueInput, { nullable: false })
  where!: MetadataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MetadataUpdateInput,
  })
  @ValidateNested()
  @Type(() => MetadataUpdateInput)
  @Field(() => MetadataUpdateInput, { nullable: false })
  data!: MetadataUpdateInput;
}

export { UpdateMetadataArgs as UpdateMetadataArgs };