import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  students = [];
  isFinishedDelete = false;
  isFinishedUpdate = false;
  status = null;

  constructor() {
    makeAutoObservable(this);
  }

  changeIsFinishedDelete() {
    this.isFinishedDelete = !this.isFinishedDelete
  }

  changeIsFinishedUpdate() {
    this.isFinishedUpdate = !this.isFinishedUpdate
  }

  getStatus() {
    return this.status;
  }
  
  async getStudents() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/students"
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
      // if(response.status === 200) {
      //   this.isFinished  = true; 
      //  }
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
      // if(response.status === 200) {
      //  this.isFinished  = true; 
      // }
    } catch (e) {
      throw new Error(e.message);
    }
  }

}

export default new Programs();