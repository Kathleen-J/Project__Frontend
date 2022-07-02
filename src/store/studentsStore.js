import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  students = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/students"
      );
      const students_response = await response.json();

      runInAction(() => {
        this.students = [...students_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

//   async getProgram(id) {
//     try {
//       const response = await fetch(
//         `http://localhost:3001/api/programs/${id}`
//       );
//       const program_result = await response.json();

//       runInAction(() => {
//         this.program = [program_result];
//       });
//     } catch (e) {
//       throw new Error(e.message);
//     }
//   }

  async deleteStudent(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/students/${id}`,
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

  async updateStudent(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/students/${id}`,
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

}

export default new Programs();