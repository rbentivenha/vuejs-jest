import Vuetify from 'vuetify'
import Vue from 'vue'

import {
  mount,
  createLocalVue
} from '@vue/test-utils'

import Card from '../../src/components/Card'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Card.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renderiza card com exibindo as informações corretas', () => {
    const cardData = {
      localVue,
      vuetify,
      propsData: {
        name: 'Teste',
        phone: '(00)000000000',
        email: 'seu@email.com',
        end: 'RUA SEM NOME'
      }
    }
    const wrapper = mount(Card, cardData)
    Object.keys(cardData.propsData).forEach(key => {
      expect(wrapper.vm._props[key]).toMatch(cardData.propsData[key])
    })
  })
})
