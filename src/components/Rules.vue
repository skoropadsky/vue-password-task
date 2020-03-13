<template>
  <ul>
    <li :data-test-rule="key" :key="key" v-for="(label, key) in rulesLabels">{{label}}</li>
  </ul>
</template>
<script>
export default {
  data: () => ({
    rulesLabels: {
      oneLetter: 'Has at least one letter',
      upperLower: 'Has at least one lower and one upper case letter',
      oneNumber: 'Has at least one number',
      special: 'Has at least one special character',
      length5: 'Has length > 4',
      length9: 'Has length > 8',
      length13: 'Has length > 12',
    },
  }),
};
</script>
