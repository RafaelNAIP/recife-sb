import User from "../entities/user"

export default interface AuthProvider {
  sign(payload: User): string
  verify(token: string): User
}