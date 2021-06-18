export interface User {
  name: string
  email: string
  password: string
  status: UserStatus
  role: UserRole
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

export enum UserRole {
  Normal = 'NORMAL',
  Admin = 'ADMIN',
}
