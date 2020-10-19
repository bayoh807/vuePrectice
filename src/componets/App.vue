<template >
    <div style="text-align:center;">
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
</template>
<script>

const app = {
  
   data() {
        return {
            numbers: [ 1, 2, 3, 4, 5 ]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(number => number % 2 === 0)
        }
    }
}

export default app;

</script>

