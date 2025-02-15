import { all as AllRules } from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'

Object.keys(AllRules).forEach((rule) => defineRule(rule, AllRules[rule]))

configure({
  generateMessage: ({ field, rule }) => {
    const messages = {
      required: `Campo obligatorio.`,
    }

    return messages[rule.name]
  }
})