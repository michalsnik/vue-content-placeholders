<template>
  <div :class="className">
    <div v-if="img" :class="`${className}__img`" />
    <div :class="`${className}__content`">
      <div :class="`${className}__title`" />
      <div v-if="showSubtitle" :class="`${className}__subtitle`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-placeholders-heading',
  data () {
    return {
      className: 'vue-content-placeholders-heading',
    }
  },
  props: {
    showSubtitle: {
      type: Boolean,
      default: true,
    },
    img: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
