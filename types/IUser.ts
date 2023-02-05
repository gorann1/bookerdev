import { ISubscription } from '~/types/ISubscription'

export interface IUser {
  id?: number
  usernames: string
  name?: string
  loginType?: string
  password?: string
  email?: string
  avatarUrl?: string
  subscription?: ISubscription | null
  stripeCustomerId?: string | null


}
