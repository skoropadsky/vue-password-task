<template>
  <div>
    <PasswordInput/>
    <Rules />
    <PasswordStrengthIndicator data-test="password-strength"/>
  </div>
</template>
<script>
import PasswordInput from '../components/PasswordInput.vue';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator.vue';
import Rules from '../components/Rules.vue';

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
};
</script>
<style>
</style>
