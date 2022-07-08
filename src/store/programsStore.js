import { makeAutoObservable, runInAction } from "mobx";
import { useContext } from "react";
// import { MainStoreContext } from "./mainStore";
import { AuthStore } from "./authStore";

// const {AuthStore} = useContext(MainStoreContext);

class Programs {
  areas = [];
  programs = [];
  program = [];
  allprograms = [];
  isFinishedDelete = false;
  isFinishedUpdate = false;

  constructor(areas, programs, program, allprograms, isFinishedDelete, isFinishedUpdate) {
    makeAutoObservable(this);
  }

  changeIsFinishedDelete() {
    this.isFinishedDelete = !this.isFinishedDelete
  }

  changeIsFinishedUpdate() {
    this.isFinishedUpdate = !this.isFinishedUpdate
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
        "http://localhost:3001/api/programs/all/programs",
        {          
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
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

  async deleteProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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

  async updateProgram(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/programs/${id}`,
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