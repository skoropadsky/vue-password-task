<template>
  <div>
    <PasswordInput :value="pass" @updated-value="updatedValue" />
    <Rules :valid-rules="validRules"/>
    <AsyncPasswordStrengthIndicator
      data-test="password-strength"
      :status="weakOrStrong"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import usePasswordValidation from '@/composition/usePasswordValidation';
import PasswordInput from '../components/PasswordInput.vue';
import Rules from '../components/Rules.vue';

const AsyncPasswordStrengthIndicator = defineAsyncComponent({
  loader: () => import('../components/PasswordStrengthIndicator.vue' /* webpackChunkName: 'strength' */),
  loadingComponent: PasswordInput,
  delay: 2000,
  suspensible: false,
});

export default {
  name: 'PasswordCheck',
  components: {
    Rules,
    PasswordInput,
    AsyncPasswordStrengthIndicator,
  },
  setup() {
    const {
      password: pass, updatedValue, validRules, weakOrStrong
    } = usePasswordValidation();

    return {
      pass,
      updatedValue,
      validRules,
      weakOrStrong,
    };
  },
};
</script>
<style>
</style>
