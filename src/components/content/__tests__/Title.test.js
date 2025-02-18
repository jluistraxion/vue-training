import { shallowMount } from '@vue/test-utils'
import Title from '@/components/content/Title.vue'

describe('Title', () => {
  it('renders title correctly', async () => {
    const content = 'Hello world!'
    const wrapper = shallowMount(Title, {
      slots: { default: content }
    })
    expect(wrapper.text()).toBe(content)
  })
})
