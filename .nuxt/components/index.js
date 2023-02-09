export { default as Attributes } from '../..\\components\\attributes.vue'
export { default as EduSkills } from '../..\\components\\edu-skills.vue'
export { default as Education } from '../..\\components\\education.vue'
export { default as HeaderResume } from '../..\\components\\header-resume.vue'
export { default as NavigationHeader } from '../..\\components\\navigation-header.vue'
export { default as Powerfooter } from '../..\\components\\powerfooter.vue'
export { default as Projects } from '../..\\components\\projects.vue'
export { default as Workhistory } from '../..\\components\\workhistory.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
