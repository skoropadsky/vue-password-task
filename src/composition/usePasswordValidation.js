import { ref, computed } from 'vue';

export default function() {
    const password = ref('');

    function updatedValue(val) {
      password.value = val;
    }

    const hasAtLeastOneLetter = computed(() => {
      return /[a-zA-Z]+/.test(password.value);
    });

    const hasAtLeastOneUpperAndLower = computed(() => {
      return /[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/.test(password.value);
    });

    const hasAtLeastOneNumber = computed(() => {
      return /\d+/.test(password.value);
    });

    const hasAtLeastOneSpecialSymbol = computed(() => {
      return /[$&+,:;=?@#|'<>.^*()%!-]+/.test(password.value);
    });

    const hasLengthLongerThan4 = computed(() => {
      return password.value.length > 4;
    });

    const hasLengthLongerThan8 = computed(() => {
        return password.value.length > 8;
    });

    const hasLengthLongerThan12 = computed(() => {
        return password.value.length > 12;
    });

    const validRules = computed(() => {
        return {
            OneLetter: hasAtLeastOneLetter.value,
            UpperAndLower: hasAtLeastOneUpperAndLower.value,
            OneNumber: hasAtLeastOneNumber.value,
            SpecialSymbol: hasAtLeastOneSpecialSymbol.value,
            LongerThan4: hasLengthLongerThan4.value,
            LongerThan8: hasLengthLongerThan8.value,
            LongerThan12: hasLengthLongerThan12.value,
        };
    });

    const weakOrStrong = computed(() => {
        return (Object.values(validRules.value).filter((rule) => rule).length > 4) ? 'Strong' : 'Weak';
    });

    return {
        password,
        updatedValue,
        validRules,
        weakOrStrong
    }
}