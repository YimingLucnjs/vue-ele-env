import Layout from '@/layout'
export default [
    {
        path: '/luyuntest',
        component: Layout,
        name: 'luyuntest',
        meta: { title: 'luyun的组件', icon: 'documentation', affix: true },
        children: [
            {
                path: 'index',
                component: () => import('@/views/testcom/luyun.vue'),
                name: 'luyuntest',
                meta: { title: '测试组件ly-index', icon: 'documentation', affix: true }
            },
        ]
    }
]