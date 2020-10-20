<template >
    <div style="text-align:center;">
        <!-- <component :is="Header" class="tab"></component> -->
        <Header :title="test"/>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
</template>
<script>
import { createApp } from 'vue';
import Header from './header.vue';
console.log(Header);


const app = {
  
   data() {
        return {
            test : 456,
            numbers: [ 1, 2, 3, 4, 5 ]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(number => number % 2 === 0)
        },
    },
    components: {
        Header
    }
}

export default app;

</script>

