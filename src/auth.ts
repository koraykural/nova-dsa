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
    const authedUser = sessionStorage.getItem("user");
    if (authedUser) this.user = JSON.parse(authedUser);
  }

  private user: User | null = null;
  private allUsers: User[] = [];

  get isAuthenticated() {
    return this.user !== null;
  }

  register(data: User): string | void {
    const duplicateEmail = this.allUsers.find((obj) => data.email === obj.email);
    const duplicateName = this.allUsers.find((obj) => data.name === obj.name);

    if (duplicateEmail) {
      return "Email is already in use";
    } else if (duplicateName) {
      return "Name is already in use";
    }

    this.user = data;
    this.allUsers.push(data);
    localStorage.setItem("users", JSON.stringify(this.allUsers));
    sessionStorage.setItem("user", JSON.stringify(this.user));
    return;
  }

  login(email: string, password: string): string | void {
    const userData = this.allUsers.find((data) => data.email === email);
    console.log(userData);

    if (!userData) {
      return "User not found";
    } else {
      if (userData.password !== password) {
        return "Password is incorrect";
      }
      this.user = userData;
      sessionStorage.setItem("user", JSON.stringify(this.user));
      return;
    }
  }

  logout() {
    sessionStorage.removeItem("user");
    this.user = null;
  }
}
