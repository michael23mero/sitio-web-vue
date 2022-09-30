import axios from 'axios'
import Cookies from 'js-cookie'

const url = 'http://localhost:4000/api/v1/user'

export default class UserService{
    static async homeUser(){
        return axios.get(`${url}`, {
            headers: { 'x-access-token': Cookies.get('token') }
        })
    }

    static async homeAdmin(){
        return axios.get(`${url}/admin`, {
            headers: { 'x-access-token': Cookies.get('token') }
        })
    }

    static async loginUser(username, password){
        return axios.post(`${url}/login`, {username, password})
    }

    static setUserLogged(token){
        Cookies.set('token', token)
    }

    static deleteUserLogged(){
        Cookies.remove('token')
    }
}