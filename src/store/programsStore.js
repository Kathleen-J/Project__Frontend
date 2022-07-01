import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  areas = [];
  programs = [];
  program = [];
  allprograms = [];

  constructor() {
    makeAutoObservable(this);
  }

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
        "http://localhost:3001/api/programs?status=all"
      );
      const programs = await response.json();

      runInAction(() => {
        this.allprograms = [...programs];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async deleteProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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

  async updateProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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