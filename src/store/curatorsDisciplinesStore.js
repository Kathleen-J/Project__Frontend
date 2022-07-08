import { makeAutoObservable, runInAction } from "mobx";
import { AuthStore } from "./authStore";

class Programs {
  curators_of_disciplines = [];
  statusDiscipline = false;
  curators = [];

  constructor(curators_of_disciplines, statusDiscipline, curators) {
    makeAutoObservable(this);
  }

  changeStatusDiscipline() {
    this.statusDiscipline = !this.statusDiscipline
  }
  
  async getCuratorsOfDisciplines() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/curatorsDisciplines?status=all",
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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

  /* id in req.user.id
  async getMyCurators() {
    const response = await fetch(
       "http://localhost:3001/api/curatorsDisciplines"
    );

    const myCurators = await response.json();
      runInAction(() => {
        this.curators = [...myCurators];
      });
  } */

  async deleteCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curatorsDisciplines/${id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({id}),
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

  async updateCuratorsDiscipline(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/curatorsDisciplines/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({id}),
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