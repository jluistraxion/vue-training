import { mount } from '@vue/test-utils'
import Input from '@/components/form/Input.vue'

describe('Input', () => {
  it('renders correctly', async () => {
    const wrapper = mount(Input, {
      props: { name: 'yourName', label: 'Your Label' }
    })
    expect(wrapper.text()).toContain('Your Label')
  })

  it('input disabled', async () => {
    const wrapper = mount(Input, {
      props: { name: 'yourName', disabled: true }
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('change inout value', async () => {
    const wrapper = mount(Input, {
      props: { name: 'test' }
    })
    const input = wrapper.find('input')
    await input.setValue('Hola Mundo')
    expect(input.element.value).toBe('Hola Mundo')
  })
})
