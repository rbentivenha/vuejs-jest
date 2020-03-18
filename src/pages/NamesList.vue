<template>
    <v-container>
        <Search />
        <Card />
    </v-container>
</template>

<script>
import Card from '../components/Card';
import Search from '../components/Search';

export default {
    components: {
        Card,
        Search
    }
}
</script>