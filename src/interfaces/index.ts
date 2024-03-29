export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Order {
  id?: number;
  userId: number;
}

export interface Login {
  username: string,
  password: string,
}