interface User {
  name: string;
  email: string;
  password: string;
  organization?: string;
}

export default class Auth {
  // Singleton logic
  private static _instance: Auth;
  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private constructor() {
    this.allUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];
  }

  private user: User | null = null;
  private allUsers: User[] = [];

  get isAuthenticated() {
    return this.user !== null;
  }

  register(data: User) {
    this.user = data;
    this.allUsers.push(data);
    localStorage.setItem("users", JSON.stringify(this.allUsers));
  }

  login(email: string, password: string): string | void {
    const userData = this.allUsers.find((data) => data.email === email);
    if (!userData) {
      return "User not found";
    } else {
      if (userData.password !== password) {
        return "Password is incorrect";
      }
      this.user = userData;
      return;
    }
  }

  logout() {
    this.user = null;
  }
}
