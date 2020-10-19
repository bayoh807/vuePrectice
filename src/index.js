import './css/reset.css';
import './css/main.scss';

import { createApp } from 'vue';
import App from '@/componets/App.vue';
import router from '@/router';
import store  from '@/store';


createApp(App)  
.use(router)
.use(store)
.mount('#app');

// const app = createApp({
//     data(){
//         return {
//             count : 4
//         };
//     },
//     methods:{
//         dida(){
//             this.count++
//             console.log(this.count);
//         }
//     },
//     template: `
//     <button @click="debouncedClick">
//       Save
//     </button>
//     `,

//     render() {
//         return  this.count;
//     } 
// })

// const vm = app.mount('#app');

// console.log(vm.count);

// // vm.count = 5;
// // console.log(vm.count);

// // setInterval(() => {
// //     vm.dida()
// // }, 1000);