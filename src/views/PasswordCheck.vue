<template>
  <div>
    <PasswordInput :value.sync="password" />
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

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
  data() {
    return {
      password: '',
    };
  },
  computed: {
    hasAtLeastOneLetter() {
      return /[a-zA-Z]+/.test(this.password);
    },
    hasAtLeastOneUpperAndLower() {
      return /[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/.test(this.password);
    },
    hasAtLeastOneNumber() {
      return /\d+/.test(this.password);
    },
    hasAtLeastOneSpecialSymbol() {
      return /[$&+,:;=?@#|'<>.^*()%!-]+/.test(this.password);
    },
    hasLengthLongerThan4() {
      return this.password.length > 4;
    },
    hasLengthLongerThan8() {
      return this.password.length > 8;
    },
    hasLengthLongerThan12() {
      return this.password.length > 12;
    },
    validRules() {
      return {
        OneLetter: this.hasAtLeastOneLetter,
        UpperAndLower: this.hasAtLeastOneUpperAndLower,
        OneNumber: this.hasAtLeastOneNumber,
        SpecialSymbol: this.hasAtLeastOneSpecialSymbol,
        LongerThan4: this.hasLengthLongerThan4,
        LongerThan8: this.hasLengthLongerThan8,
        LongerThan12: this.hasLengthLongerThan12,
      };
    },
    weakOrStrong() {
      return (Object.values(this.validRules).filter((rule) => rule).length > 4) ? 'Strong' : 'Weak';
    },
  },
};
</script>
<style>
</style>
