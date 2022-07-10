import {createContext} from 'react';
import {AuthStore} from './authStore';
import {curatorsDisciplinesStore} from './curatorsDisciplinesStore';
import {ProgramsStore} from './programsStore';
import {studentsProgramsStore} from './studentsProgramsStore';
import {UsersStore} from './usersStore';

export const MainStoreContext = createContext(null);

export class MainStore {
    constructor() {
        this.AuthStore = new AuthStore();
        this.curatorsDisciplinesStore = new curatorsDisciplinesStore(this.AuthStore);
        this.ProgramsStore = new ProgramsStore(this.AuthStore);
        this.studentsProgramsStore = new studentsProgramsStore(this.AuthStore);
        this.UsersStore = new UsersStore(this.AuthStore);
    }
}