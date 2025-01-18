export interface RegisterDto {
  email: string,
  phoneNumber: number,
  password: string,
  passwordConfirm: string,
  roles: string[]
}
