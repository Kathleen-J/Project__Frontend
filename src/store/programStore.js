import { makeAutoObservable, runInAction } from "mobx";

class Program {
  programId = 0;

  constructor() {
    makeAutoObservable(this);
  }

changeId(id) {
    this.programId = id
  }

  getId() {
        return this.programId
  }
  
}

export default new Program();