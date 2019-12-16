import Layout from '@/layout'
export default [
    {
        path: '/luyimingtest',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/testcom/luyiming.vue'),
                name: 'lymtest',
                meta: { title: '测试组件lym-index', icon: 'documentation', affix: true }
            }
        ]
    }
]