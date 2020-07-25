import Vue from 'vue';
import { mount } from '@vue/test-utils';
import PasswordCheck from '../../../src/views/PasswordCheck.vue';

describe('PasswordCheck', () => {
  let wrapper;

  const mountComponent = () => {
    wrapper = mount(PasswordCheck);
  };

  const setPasswordTo = async (password) => {
    wrapper.get('[data-test="password-field"]').setValue(password);
    await Vue.nextTick();
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    if (wrapper && wrapper.exists()) {
      wrapper.destroy();
    }
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain password field', () => {
    expect(wrapper.get('[data-test="password-field"]').attributes('type')).toEqual('password');
  });

  describe('rules', () => {
    describe('when password has one letter', () => {
      beforeEach(async () => {
        await setPasswordTo('a');
      });

      it('should highlight one letter is satisfied', () => {
        expect(wrapper.get('[data-test-rule="OneLetter"]').classes('rules__rule--valid')).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(wrapper.get('[data-test-rule="OneNumber"]').classes('rules__rule--valid')).toBe(false);
      });
    });

    describe('when password has lower an upper letters', () => {
      beforeEach(async () => {
        await setPasswordTo('aB');
      });

      it('should highlight one letter is satisfied', () => {
        expect(wrapper.get('[data-test-rule="OneLetter"]').classes('rules__rule--valid')).toBe(true);
      });
      it('should highlight upper and lower letter is satisfied', () => {
        expect(wrapper.get('[data-test-rule="UpperAndLower"]').classes('rules__rule--valid')).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(wrapper.get('[data-test-rule="OneNumber"]').classes('rules__rule--valid')).toBe(false);
      });
    });
  });

  describe('strength validation', () => {
    it('should be rendered', () => {
      expect(wrapper.find('[data-test="password-strength"]').exists()).toBeTruthy();
    });

    describe('when less than 5 rules satisfied', () => {
      const examples = ['', 'aaa', 'aB$4'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is weak`, async () => {
          await setPasswordTo(password);

          expect(wrapper.get('[data-test="password-strength"]').text()).toEqual('Weak');
        });
      });
    });

    describe('when more at least 5 rules satisfied', () => {
      const examples = ['aB$41', '1234567891233Rademade', '1234567Av$'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is strong`, async () => {
          await setPasswordTo(password);

          expect(wrapper.get('[data-test="password-strength"]').text()).toEqual('Strong');
        });
      });
    });
  });
});
