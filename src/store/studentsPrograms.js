import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  students_programs = [];
  statusProgram = false;

  constructor(students_programs, statusProgram) {
    makeAutoObservable(this);
  }

  changeStatusProgram() {
    this.statusProgram = !this.statusProgram
  }

  async getStudentsPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/studentsPrograms"
      );
      const students_programs_response = await response.json();

      runInAction(() => {
        this.students_programs = [...students_programs_response];
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