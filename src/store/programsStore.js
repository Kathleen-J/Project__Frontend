import { makeAutoObservable, runInAction } from "mobx";

export class ProgramsStore {
  areas = [];
  programs = [];
  program = [];
  allprograms = [];
  resStatus = null;
  isFinishedDelete = false;
  isFinishedUpdate = false;

  constructor(AuthStore) {
    makeAutoObservable(this);
    this.AuthStore = AuthStore;
  }

  changeIsFinishedDelete() {
    this.isFinishedDelete = !this.isFinishedDelete
  }

  changeIsFinishedUpdate() {
    this.isFinishedUpdate = !this.isFinishedUpdate
  }

  //clean state
  cleanStore() {
    this.areas = [];
    this.programs = [];
    this.program = [];
    this.allprograms = [];
    this.resStatus = null;
  }


  //       GET
  async getAreas() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/areas"
      );
      const area = await response.json();

      runInAction(() => {
        this.areas = [...area];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/programs"
      );
      const program = await response.json();

      runInAction(() => {
        this.programs = [...program];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`
      );
      const program_result = await response.json();

      runInAction(() => {
        this.program = [program_result];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getAllPrograms() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/programs/all/programs",
        {          
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      const programs_result = await response.json();

      runInAction(async () => {
        this.allprograms = [...programs_result];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  //       POST
  async buyProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/studentsPrograms`,
        {
          method: 'POST',
          body: JSON.stringify({id}),
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
        this.resStatus = await response.status;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  
  //      DELETE
  async deleteProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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
  async updateProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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

}