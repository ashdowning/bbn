import { IsOptional, Length, MaxLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class NewAccountInput {
  @Field()
  @Length(16, 16)
  accountID: string

  @Field()
  @Length(4, 20)
  accountName?: string

  @Field()
  imported: boolean
  //   @Field({ nullable: true })
  //   @IsOptional()
  //   @Length(30, 255)
  //   accountName?: string

  //   @Field((type) => [String])
  //   ingredients: string[]
}
// @Field()
// @prop()
// imported: boolean

// @Field()
// @prop()
// accountID: string

// @Field()
// @prop()
// accountName: string
