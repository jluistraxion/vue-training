import { mount } from '@vue/test-utils'
import Dropdown from '@/components/dropdowns/Dropdown.vue'

describe('Dropdown', () => {
  it("doesn't render the dropdown options by default", () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: []
      }
    })

    expect(wrapper.text()).toBe('')
  })
  it('renders the trigger slot content', () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: '🐁'
      },
      props: {
        options: [{ name: 'Option 1', action: vi.fn() }]
      }
    })

    expect(wrapper.text()).toContain('🐁')
  })

  it('renders the dropdown options', async () => {
    const options = [
      { name: 'Option 1', action: vi.fn() },
      { name: 'Option 2', action: vi.fn() }
    ]

    const wrapper = mount(Dropdown, {
      props: {
        options
      }
    })

    await wrapper.find('button').trigger('click')

    options.forEach((option) => {
      expect(wrapper.text()).toContain(option.name)
    })
  })

  it('calls the action when an option is clicked', async () => {
    const options = [
      { name: 'Option 1', action: vi.fn() },
      { name: 'Option 2', action: vi.fn() }
    ]

    const wrapper = mount(Dropdown, {
      props: {
        options
      }
    })

    await wrapper.findAll('li button')[0].trigger('click')

    expect(options[0].action).toHaveBeenCalled()
  })
})
