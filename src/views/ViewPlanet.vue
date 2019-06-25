<template>
    <div class="container">
        <div>planet overview</div>
        <div>{{ planet }}</div>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {
        name: "view-planet",

        computed: {
            planet: function() {
                return store.getters.getPlanet
            }
        }
    }
</script>

<style scoped>

</style>