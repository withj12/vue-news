import bus from '../utils/bus.js';

// mixin
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    // created() {
    //     bus.$emit('start:spinner');
    //     // #1
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             // #5
    //             // console.log(5);                
    //             // console.log('fetched');
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    mounted() {
        bus.$emit('end:spinner');
    }, 
}

// hoc 하이오드 컴포넌트
// export default funciton create() {
    // 재사용할 컴포넌트 옵션
    // ...
// }
