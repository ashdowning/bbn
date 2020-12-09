import { Document } from 'mongoose'
import { prop, Ref } from '@typegoose/typegoose'
import { IsString, IsBoolean, IsNumber } from 'class-validator'
import { Field, ID, ObjectType } from 'type-graphql'
// import { Order } from '../orders/schemas/orders.schema'

export class Account {
  // @Field((type) => ID)
  // @prop({ required: true })
  // id?: string
  @Field((type) => ID)
  @prop()
  id: string

  @Field()
  @prop()
  imported: boolean

  @Field()
  @prop()
  accountID: string

  @Field()
  @prop()
  accountName: string

  @Field({ nullable: true })
  @prop()
  address1?: string

  @Field({ nullable: true })
  @prop()
  city?: string

  @Field({ nullable: true })
  @prop()
  state?: string

  @Field({ nullable: true })
  @prop()
  zip?: string

  @Field({ nullable: true })
  @prop()
  companyID?: string

  @Field({ nullable: true })
  @prop()
  correction?: number

  @Field({ nullable: true })
  @prop()
  createdBy?: string

  @Field({ nullable: true })
  @prop()
  createdOn?: Date

  @Field({ nullable: true })
  @prop()
  dateCreated?: Date

  @Field({ nullable: true })
  @prop()
  discountPercent?: number

  @Field({ nullable: true })
  @IsNumber()
  @prop()
  balanceDue?: number

  @Field({ nullable: true })
  @prop()
  grandTotal?: number

  @Field({ nullable: true })
  @prop()
  accountnumber?: number

  @Field({ nullable: true })
  @prop()
  postToAccounting?: boolean

  @Field({ nullable: true })
  @prop()
  siteID?: string

  @Field({ nullable: true })
  @prop()
  subTotal?: number

  @Field({ nullable: true })
  @prop()
  taxID?: string

  @Field({ nullable: true })
  @prop()
  taxRate?: number

  @Field({ nullable: true })
  @prop()
  taxTotal?: number

  @Field({ nullable: true })
  @prop()
  merchantFeesTotal?: number

  // @Field((type) => [Order], { nullable: true })
  // @prop({ items: Order })
  // orders?: Ref<Order>[]

  // readonly name?: string
  // readonly accountID?: string
  //  orders?: Ref<Order>
  // readonly accountName?: string
  // readonly address1?: string
  // readonly city?: string
  // readonly state?: string
  // readonly zip?: Date
  // readonly companyID?: string
  // readonly correction?: number
  // readonly createdBy?: string
  // readonly createdOn?: Date
  // readonly dateCreated?: Date
  // readonly discountPercent?: number
  // readonly balanceDue?: number
  // readonly grandTotal?: number
  // readonly accountnumber?: number
  // readonly postToAccounting?: boolean
  // readonly siteID?: string
  // readonly subTotal?: number
  // readonly taxID?: string
  // readonly taxRate?: number
  // readonly taxTotal?: number
  // readonly merchantFeesTotal?: number
  // readonly imported?: boolean
  // readonly createdAt?: Date
  // readonly updatedAt?: Date
  // readonly prev?: Account | null
  // readonly next?: Account | null
}
