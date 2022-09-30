<template>
    <div class="text-center mt-5 py-5">
        <h1>Bienvenido {{ username }}</h1>
    </div>
</template>

<script>
import ServiceUser from '../services/user.service'
export default {
    data(){
        return { username: '' }
    },

    async created(){
        try{
            ServiceUser.homeAdmin()
                .then((resp) =>{
                    this.username = resp.data.user.username;
                    this.$router.push('/admin') 
                }).catch(() => { this.$router.push('/login') })
        }catch(err){
            console.log(err)
        }
    }
}
</script>