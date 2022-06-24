import { makeAutoObservable, runInAction } from "mobx";

class Programs {
  areas = [];
  programs = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getAreas() {
    this.areas = [];
    try {
      const response = await fetch(
        // "https://api.npoint.io/fe907450b6af5d09b712"
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
    this.programs = [];
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
}

export default new Programs();