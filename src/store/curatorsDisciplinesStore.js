import { makeAutoObservable, runInAction } from "mobx";

export class curatorsDisciplinesStore {
  curators_of_disciplines = [];
  statusDiscipline = false;
  curators = [];

  constructor(AuthStore) {
    makeAutoObservable(this);
    this.AuthStore = AuthStore;
  }

  changeStatusDiscipline() {
    this.statusDiscipline = !this.statusDiscipline
  }

  //clean state
  cleanStore() {
    this.curators_of_disciplines = [];
    this.curators = [];
  }

  //       GET
  async getCuratorsOfDisciplines() {
    try {
      const response = await fetch(
        "/api/curatorsDisciplines?status=all",
        {
          headers: {
            "Authorization": `Bearer ${this.AuthStore.token}`,
            "Content-Type": 'application/json'
          }
        }
      );
      const curators_of_disciplines_response = await response.json();

      runInAction(() => {
        this.curators_of_disciplines = [...curators_of_disciplines_response];
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }    
  
  //      DELETE 
  async deleteCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `/api/curatorsDisciplines/${id}`,
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
  async updateCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `/api/curatorsDisciplines/${id}`,
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