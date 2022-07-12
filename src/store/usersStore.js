import { makeAutoObservable, runInAction } from "mobx";

export class UsersStore {
  students = [];
  curators = [];
  myStudents = [];
  statusUser = '';
  loginValue = '';
  passwordValue = '';
  statusStudent = false;
  statusCurator = false;

  constructor(AuthStore) {
    makeAutoObservable(this);
    this.AuthStore = AuthStore;
  }

  //update data on page on put/post/delete requests
  changestatusStudent() {
    this.statusStudent = !this.statusStudent
  }

  changestatusCurator() {
    this.statusCurator = !this.statusCurator
  }

  //state of inputs
  setLoginValue(value) {
    this.loginValue = value;
  }
  
  cleanLoginValue() {
    this.loginValue = '';
  }

  setPasswordValue(value) {
    this.passwordValue = value;
  }
  
  cleanPasswordValue() {
    this.passwordValue = '';
  }

  //clean state
  cleanStore() {
    this.students = [];
    this.curators = [];
    this.myStudents = [];
    this.statusUser = '';
  }

  //       GET
  async getStatusUser() {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${this.AuthStore.idUser}`,
        {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      const status = await response.json();

      runInAction(() => {
        this.statusUser = status.status_user;
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/students?status=all",
        {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      // this.status = response.status;
      const students_response = await response.json();

      runInAction(() => {
        this.students = [...students_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getCurators() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/curators?status=all",
        {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      const curators_response = await response.json();

      runInAction(() => {
        this.curators = [...curators_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getMyStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/students",
        {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      const students_response = await response.json();

      runInAction(() => {
        this.myStudents = [...students_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  //       POST
  async createUser(role, login, password) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users`,
        {
          method: 'POST',
          body: JSON.stringify({role, login, password}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
  
  //      DELETE
  async deleteUser(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({id}),
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  //       PUT
  async updateUser(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id}),
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateUserLogin(id, login) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id, login}),
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateUserPassword(id, password) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id, password}),
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

}