import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '@/components/buttons/Button.vue'

describe('Button', () => {
  it('renders correctly with default props', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.attributes('disabled')).toBeFalsy()
    expect(wrapper.classes()).not.toContain('cursor-wait')
  })

  it('renders correctly when isLoading prop is true', () => {
    const wrapper = shallowMount(Button, {
      props: { isLoading: true }
    })
    expect(wrapper.classes()).toContain('cursor-wait')
    expect(wrapper.classes()).toContain('animate-pulse')
  })
})
