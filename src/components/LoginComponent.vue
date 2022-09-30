<template>
    <div class="row mt-5 py-5">
        <div class="col-md-5 mx-auto mt-4">
            <div class="card shadow-lg">
                <div class="alert alert-danger" role="alert" v-if="error">{{ error_msg }}</div>
                <div class="card-header">
                    <h1 class="text-center mt-2">Login</h1>
                </div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter your username" v-model="username">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
                        </div>
                        <button class="btn btn-info btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ServiceUser from '../services/user.service'

export default {
    data(){
        return{
            username: '', password: '', error: false, error_msg: '',
        }
    },

    methods: {
        async login(){
            await ServiceUser.loginUser(this.username, this.password)
                .then(resp => {
                    console.log(resp)
                    ServiceUser.setUserLogged(resp.data.accessToken)
                    if(resp.data.role === 'user'){
                        this.$router.push('/')
                    }if(resp.data.role === 'admin'){
                        this.$router.push('/admin')
                    }
                }).catch(err => {
                    this.error = true
                    this.error_msg = err.response.data.msg
                    this.$router.push('/login')
                })
        }
    }
}
</script>