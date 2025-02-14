import { all as AllRules } from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'

Object.keys(AllRules).forEach((rule) => defineRule(rule, AllRules[rule]))