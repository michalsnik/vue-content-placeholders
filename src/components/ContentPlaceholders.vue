<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'content-placeholders',
  computed: {
    classObject () {
      return {
        'vue-content-placeholders': true,
        'vue-content-placeholders-is-rounded': this.rounded,
        'vue-content-placeholders-is-centered': this.centered,
        'vue-content-placeholders-is-animated': this.animated,
      }
    },
  },
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
