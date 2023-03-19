export type UserInfoPayload = {
  name: string;
  email: string;
  image: string;
};

export interface UserState {
  user: UserInfoPayload;
}
