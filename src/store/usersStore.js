import { makeAutoObservable, runInAction } from "mobx";
import { AuthStore } from "./authStore";

class Users {
  students = [];
  curators = [];
  statusStudent = false;
  statusCurator = false;
  // status = null;
  loginValue = '';
  passwordValue = '';
  myStudents = [];

  constructor(students, curators, statusStudent, statusCurator, loginValue, passwordValue, myStudents) {
    makeAutoObservable(this);
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

/*   getStatus() {
    return this.status;
  } */

  //       GET  
  async getStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/students?status=all",
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": 'application/json'
          }
        }
      );
      this.status = response.status;
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            // "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

}

export default new Users();