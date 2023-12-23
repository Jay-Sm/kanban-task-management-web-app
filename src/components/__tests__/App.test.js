import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import App from '@/App.vue'

describe('App.vue', () => {
  test('Renders properly', () => {
    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Switches theme', () => {
    const wrapper = mount(App)
    const button = wrapper.find('.toggle-btn')
    
    button.trigger('click')
    expect(document.querySelector('html').classList).toContain('dark')
  })
})
