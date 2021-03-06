import {makeAutoObservable, reaction, runInAction} from 'mobx';

export class AuthStore {
    token = localStorage.getItem('token');
    loginUser = '';
    idUser = null;
    roleUser = '';

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
        try {
            const response = await fetch(
                '/api/auth/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({login, password})
                }
            )
    
            const {token} = await response.json();
            
            runInAction(() => {
                this.token = token;
                this.decodeData();
            });            
        } catch (error) {
            throw new Error('wrong password / login')
        }
    }

    async getNewToken(login) {
        const response = await fetch(
            '/api/auth/new-token',
            {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login})
            }
        )
        
        if(response.status > 400) {
            console.log('error');
            return;
        }

        const {token} = await response.json();
        
        runInAction(() => {
            localStorage.setItem('token', token);
            this.token = token;
            this.decodeData();
        });
    }

    decodeData() {
        if(this.isLoggedIn) {            
            const [, decodedPayload, ] = this.token.split('.');
            const payload = JSON.parse(window.atob(decodedPayload));
            this.loginUser = payload.login;
            this.idUser = payload.id;
            this.roleUser = payload.role;
        }
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