interface UserStub {
  id: number;
  email: string;
  password: string;
}

export const db: UserStub[] = [
  { id: 1, email: '123@gmail.com', password: '123' },
  { id: 2, email: '555@gmail.com', password: '555' },
];
