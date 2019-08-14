import Vue from 'vue'
import Router from 'vue-router'

const IndexPage = import('~/pages/index.vue')
const OtherPage = import('~/pages/other-page.vue')

export function createRouter(ssrContext, createDefaultRouter) {
  const defaultRouter = createDefaultRouter(ssrContext)

  const routes = [
    {
      path: "/other-page",
      component: OtherPage,
      name: "other-page"
    }, {
      path: "/",
      component: IndexPage,
      name: "index"
    }
  ]

  return new Router({
    ...defaultRouter.options,
    routes: defaultRouter.options.routes,
  })
}
