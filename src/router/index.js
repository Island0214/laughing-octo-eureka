import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Development from '../page/Development.vue'
import ServicesPage from '../page/ServicesPage.vue'
import PlannersPage from '../page/PlannersPage.vue'
import ExperiencePage from '../page/ExperiencePage.vue'
import ProfessionalsPage from '../page/ProfessionalsPage.vue'
import EnvironmentalPage from '../page/EnvironmentalPage.vue'
import PartnersPage from '../page/PartnersPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/development',
      name: 'Development',
      component: Development
    },
    {
      path: '/services',
      name: 'ServicesPage',
      component: ServicesPage
    },
    {
      path: '/planners',
      name: 'PlannersPage',
      component: PlannersPage
    },
    {
      path: '/experience',
      name: 'ExperiencePage',
      component: ExperiencePage
    },
    {
      path: '/professionals',
      name: 'ProfessionalsPage',
      component: ProfessionalsPage
    },
    {
      path: '/environmental',
      name: 'EnvironmentalPage',
      component: EnvironmentalPage
    },
    {
      path: '/partners',
      name: 'PartnersPage',
      component: PartnersPage
    }
  ]
})
