<template>
    <div> 
        <h1>Home User</h1>
        <ComponentHome/>
    </div>
</template>

<script>
import ComponentHome from '@/components/HomeComponent.vue'
export default {
    name: 'HomeComponent',
    components: {
        ComponentHome
    }
}
</script>