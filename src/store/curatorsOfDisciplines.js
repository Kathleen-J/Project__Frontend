import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  curators_of_disciplines = [];
  isFinishedDelete = false;
  isFinishedUpdate = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeIsFinishedDelete() {
    this.isFinishedDelete = !this.isFinishedDelete
  }

  changeIsFinishedUpdate() {
    this.isFinishedUpdate = !this.isFinishedUpdate
  }

  async getCuratorsOfDisciplines() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/curatorsDisciplines"
      );
      const curators_of_disciplines_response = await response.json();

      runInAction(() => {
        this.curators_of_disciplines = [...curators_of_disciplines_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async deleteCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curatorsDisciplines/${id}`,
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

  async updateCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curatorsDisciplines/${id}`,
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