<template>
  <div>
    <PasswordInput :value="pass" @updated-value="updatedValue" />
    <Rules :valid-rules="validRules"/>
    <PasswordStrengthIndicator
      data-test="password-strength"
      :status="weakOrStrong"
    />
  </div>
</template>
<script>
import PasswordInput from '../components/PasswordInput.vue';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator.vue';
import Rules from '../components/Rules.vue';
import usePasswordValidation from '@/composition/usePasswordValidation';

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
  setup() {
    const { password: pass, updatedValue, validRules, weakOrStrong } = usePasswordValidation();

    return {
      pass,
      updatedValue,
      validRules,
      weakOrStrong
    }
  }
};
</script>
<style>
</style>
