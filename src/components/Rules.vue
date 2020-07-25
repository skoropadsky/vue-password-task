<template>
  <ul>
    <li
      :data-test-rule="rule"
      :key="rule"
      v-for="(label, rule) in rulesLabels"
      :class="{'rules__rule--valid': validRules[rule] }"
    >
      {{label}}
    </li>
  </ul>
</template>
<script>

export const RULE = {
  OneLetter: 'OneLetter',
  UpperAndLower: 'UpperAndLower',
  OneNumber: 'OneNumber',
  SpecialSymbol: 'SpecialSymbol',
  LongerThan4: 'LongerThan4',
  LongerThan8: 'LongerThan8',
  LongerThan12: 'LongerThan12',
};

export default {
  props: {
    validRules: Object,
  },
  computed: {
    rulesLabels() {
      return {
        [RULE.OneLetter]: 'Has at least one letter',
        [RULE.UpperAndLower]: 'Has at least one lower and one upper case letter',
        [RULE.OneNumber]: 'Has at least one number',
        [RULE.SpecialSymbol]: 'Has at least one special character',
        [RULE.LongerThan4]: 'Has length > 4',
        [RULE.LongerThan8]: 'Has length > 8',
        [RULE.LongerThan12]: 'Has length > 12',
      };
    },
  },
};
</script>
<style lang="css" scoped>
  .rules__rule--valid {
    color: green;
  }
</style>
