export interface User{
  info:{
    id:number
    name: string,
    email:string
  }

  token:string
}

export interface ApiResponse {
  usuario: User;
  token: string;
  status: number;
  message: string;
}

