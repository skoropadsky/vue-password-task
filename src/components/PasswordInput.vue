<template>
  <input
    type="password"
    data-test="password-field"
    :value="value"
    @input="passChanged"
  />
</template>
<script>
export default {
  props: {
    value: String,
  },
  methods: {
      passChanged(e) {
          this.$emit('updated-value', e.target.value)
      }
  }
};
</script>
<style></style>
