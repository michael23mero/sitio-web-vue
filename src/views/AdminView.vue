<template>
    <div> 
        <h1>Home User</h1>
        <ComponentAdmin/>
    </div>
</template>

<script>
import ComponentAdmin from '@/components/AdminComponent.vue'
export default {
    name: 'HomeComponent',
    components: {
        ComponentAdmin
    }
}
</script>