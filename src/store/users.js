import { makeAutoObservable, runInAction } from "mobx";

class Users {
  students = [];
  curators = [];
  statusStudent = false;
  statusCurator = false;
  status = null;

  constructor(students, curators, statusStudent, statusCurator) {
    makeAutoObservable(this);
  }

  changestatusStudent() {
    this.statusStudent = !this.statusStudent
  }

  changestatusCurator() {
    this.statusCurator = !this.statusCurator
  }

  getStatus() {
    return this.status;
  }
  
  async getStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/users/students"
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
        "http://localhost:3001/api/users/curators"
      );
      const curators_response = await response.json();

      runInAction(() => {
        this.curators = [...curators_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
  
  async deleteUser(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({id}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateUser(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id}),
          headers: {
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