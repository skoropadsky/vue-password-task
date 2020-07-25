<template>
  <input
    type="password"
    data-test="password-field"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    value: String,
  },
};
</script>
<style></style>
