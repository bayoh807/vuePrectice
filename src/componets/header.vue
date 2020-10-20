<template>
    <div class="text">{{ title }}</div>
</template>

<script>
    import { useCssVars } from 'vue';
    import store from '@/store'
 
    const header = {
        name : 'header',
        props :{
            title : {
                type :Array,
                required : true
            }
        },
        setup(props){
            console.log(props);
            useCssVars(()=>({
                'main-bg-color' : 'blue'
            }))
        },
        computed: {
            evenNumbers() {
                return this.numbers.filter(number => number % 2 === 0)
            }
        },
        data(){
            return {
                name : '金沙娛樂管理後台'
            }
        }
    }
    export default header
</script>

<style scoped>
    .text {
        color : var(--main-bg-color);
    }
</style>