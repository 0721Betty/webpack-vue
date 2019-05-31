// 1.导入vue-router包
import VueRouter from 'vue-router'

// 导入Account组件
import account from './main/Account.vue'
import goodlist from './main/GoodsList.vue'

// 导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes:[
        //acount goodlist
        {
            path: '/account',
            component:account,
            children: [
                { path: 'login',component: login},
                { path: 'register',component: register}
            ]
        },
        // { path:'/account',component:account},
        { path:'/goodlist',component:goodlist},

    ]
})
export default router