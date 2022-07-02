import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  curators = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCurators() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/curators"
      );
      const curators_response = await response.json();

      runInAction(() => {
        this.curators = [...curators_response];
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

  async deleteCurator(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curators/${id}`,
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

  async updateCurator(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curators/${id}`,
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