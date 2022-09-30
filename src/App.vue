<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-lg">
        <div class="container">
            <a class="navbar-brand" href="/">Sitio Web</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"> <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</router-link> </li>
                    <li class="nav-item active"> <router-link class="nav-link" to="/login"><i class="fas fa-user"></i> Login</router-link> </li>
                    <li class="nav-item active"> <router-link class="nav-link" to="/close" @click="logout()"><i class="fas fa-power-off"></i> Close</router-link> </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view/>
</template>

<script>
import ServiceUser from './services/user.service'
export default {
    methods: {
        logout(){
            ServiceUser.deleteUserLogged()
            this.$router.push('/login')
        }
    }
}
</script>

<style>
    body{
        background: #f5f5f5;
    }
</style>