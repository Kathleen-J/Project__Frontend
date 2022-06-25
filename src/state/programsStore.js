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
        "http://localhost:3001/api/areas"
        //'https://api.npoint.io/cb3c81a0919520efc130'
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
        //'https://api.npoint.io/f945712fc6cdd3a5d8a1'
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