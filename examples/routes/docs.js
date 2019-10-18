
const component = c => () => import(`../../src/packages/${c}/README.md`)

export default [
  {
    label: '组件',
    groupTitle: 'Basic',
    children: [
      { path: '/docs/button', label: 'Button 按钮', component: component('button') }
    ]
  },
  { type: 'line' },
  { path: { path: '/', query: { q: 123 } }, label: 'Wellcome' }
]
