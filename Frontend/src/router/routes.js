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
      { path: 'summary', component: () => import('pages/Summary.vue') },
      { path: 'balance', component: () => import('pages/Balance.vue') },
      { path: 'incomeCategory', component: () => import('pages/IncomeCategory.vue') },
      { path: 'expenseCategory', component: () => import('pages/ExpenseCategory.vue') }


    ]
  },
  {
    path: '/',
    component: () => import('layouts/IncomeExpenseLayout.vue'),
    children: [

      { path: 'expense', component: () => import('pages/Expense.vue') }
   
    ]
  },
  {
    path: '/',
    component: () => import('layouts/IncomeLayout.vue'),
    children: [
      { path: 'income', component: () => import('pages/Income.vue') }
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
