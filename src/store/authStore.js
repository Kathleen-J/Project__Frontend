import {makeAutoObservable, reaction, runInAction} from 'mobx';

export class AuthStore {
    token = localStorage.getItem('token');
    loginUser = '';
    idUser = null;

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
            this.token = token;
        });
    }

    decodeData() {
        const [, decodedPayload, ] = this.token.split('.');
        const payload = JSON.parse(window.atob(decodedPayload));
        this.loginUser = payload.login;
        this.idUser = payload.id;
    }
    
    logOut() {
        this.token = null;
        this.loginUser = '';
        this.idUser = null;
    }

    get isLoggedIn() {
        return Boolean(this.token);
    }


}