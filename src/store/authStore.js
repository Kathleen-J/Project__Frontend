// import {action, computed, flow, makeAutoObservable, makeObservable, observable, reaction} from 'mobx';
import {makeAutoObservable, reaction, runInAction} from 'mobx';

export class AuthStore {
    token = localStorage.getItem('token');
    user = '';

    constructor(token) {
        makeAutoObservable(this)    

        reaction(
            () => this.token,
            (token) => {
                if (token) {
                    localStorage.setItem('token', token)
                } else {
                    localStorage.removeItem('token')
                }
            }
        )
    }

    async getToken(login, password) {
        const response = await fetch(
            'http://localhost:3001/api/auth/token',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            }
        )
        if(response.status > 400) {
            console.log('error');
            return;

        }

        const {token} = await response.json();
        runInAction(() => {
            // console.log(this.token);
            this.token = token;
            this.user = login;
          });
    }
    
    async valueToken() {
        return localStorage.getItem('token');
    }

    loginUser() {
        return this.user;
    }

    logOut() {
        this.token = null;
        this.user = '';
    }

    get isLoggedIn() {
        return Boolean(this.token);
    }


}