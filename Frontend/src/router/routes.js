// const routes = [
//   {
//     path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') },
    //   { path: 'profile', component: () => import('pages/Profile.vue') },
    //   { path: 'income', component: () => import('pages/Income.vue') },
    // ]
//   },
//   {
//     path: '/posts', component: () => import('pages/Posts.vue')
//   },
//   {
//     path: '/accounts', component: () => import('pages/Accounts.vue')
//   }
// ]
const routes = [
  {
    path: '/',component: () => import('pages/Posts.vue')
  },
  {
    path: '/accounts', component: () => import('pages/Accounts.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'summary', component: () => import('pages/IncomeExpenseSummary.vue') },
      { path: 'balance', component: () => import('pages/Balance.vue') },
      { path: 'totalExpense', component: () => import('pages/TotalExpense.vue') },
      { path: 'totalIncome', component: () => import('pages/TotalIncome.vue') }


    ]
  },
  {
    path: '/',
    component: () => import('layouts/IncomeExpenseLayout.vue'),
    children: [
      { path: 'income', component: () => import('pages/Income.vue') },
      { path: 'expense', component: () => import('pages/Expense.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
