import { api } from "../api/api";

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date | null;
  created_at: Date;
  updated_at: Date;
  role_id: number;
}

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export class LoginService {
  async login(
    email: string,
    password: string,
    typeLogin: number
  ): Promise<LoginSuccess | LoginError> {
    const { data } = await api.post("/login", {
      email,
      password,
      typeLogin,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  }

  logout(): void {
    sessionStorage.removeItem("role");
  }
}
