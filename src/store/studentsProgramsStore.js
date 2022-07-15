import { makeAutoObservable, runInAction } from "mobx";

export class studentsProgramsStore {
  students_programs = [];
  statusProgram = false;
  students = [];
  myPrograms = [];
  myProgram = {};
  
  constructor(AuthStore) {
    makeAutoObservable(this);
    this.AuthStore = AuthStore;
  }
  
  changeStatusProgram() {
    this.statusProgram = !this.statusProgram
  }

  //clean state
  cleanStore() {
    this.students_programs = [];
    this.students = [];
    this.myPrograms = [];
    this.myProgram = {};
  }

  //       GET
  async getStudentsPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/studentsPrograms?status=all",
         {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
         }
      );
      const students_programs_response = await response.json();

      runInAction(() => {
        this.students_programs = [...students_programs_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getMyProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms/${id}`,
         {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
         }
      );
      const students_programs_response = await response.json();

      runInAction(() => {
        this.myProgram = students_programs_response;
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getMyPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/studentsPrograms",
         {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
         }
      );
      const students_programs_response = await response.json();

      runInAction(() => {
        this.myPrograms = [...students_programs_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  //      DELETE  
  async deleteStudentsEducationPrograms(id, value) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({id, value}),
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
  async updateStudentsEducationPrograms(id, value) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id, value}),
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

  async sendTestResult(id, value) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms`,
        {
          method: 'PUT',
          body: JSON.stringify({id, value}),
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