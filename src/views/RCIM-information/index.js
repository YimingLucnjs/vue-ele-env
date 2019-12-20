/**
* 创建者：luyiming
* 该页面用于：
* 创建时间： 2019-12-20 01:27:15
*/
import { debounce } from '@/utils'
import infoHeader from './components/Header/index.vue'
export default {
    name: 'InformationRcim_view',
    components: {
        infoHeader,
    },
    // 数据
    data() {
        return {
            resizefun: null,
            // 控制信息舱左右侧侧边栏是否隐藏
            hideSide: true,
        }
    },
    // 监听
    watch: {

    },
    // Vue实例初始化完成
    created() {

    },
    // Vue挂载完成
    mounted() {
        this.resizefun = this.__resizeHandler(100)
        this.resizefun()
        window.addEventListener('resize', this.resizefun)
    },
    // Vue实例销毁前
    beforeDestroy(){
        window.removeEventListener('resize', this.resizefun)
    },
    // 挂载的方法
    methods: {
        /**
        * 方法描述
        */
        exampleFunc(){
            return void 0
        },
        __resizeHandler(daley){
            return debounce(() => {
                let width = window.innerWidth
                if(width < 1280){
                    this.hideSide = true
                }else{
                    this.hideSide = false
                }
            }, daley)
        },
    },
}