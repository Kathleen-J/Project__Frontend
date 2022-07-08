import { makeAutoObservable, runInAction } from "mobx";
import { AuthStore } from "./authStore";

class Programs {
  students_programs = [];
  statusProgram = false;
  students = [];
  myPrograms = [];

  constructor(students_programs, statusProgram, students, myPrograms) {
    makeAutoObservable(this);
  }

  changeStatusProgram() {
    this.statusProgram = !this.statusProgram
  }

  async getStudentsPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/studentsPrograms?status=all",
         {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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

  async getMyPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/studentsPrograms",
         {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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

  async deleteStudentsEducationPrograms(id, value) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({id, value}),
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
  
  async updateStudentsEducationPrograms(id, value) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id, value}),
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

export default new Programs();