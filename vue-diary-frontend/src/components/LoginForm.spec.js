// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

// 사용자 관점에서 작성이 되어야 한다.

describe('로그인 컴포넌트 기본 테스트', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    // 💡 shallowMount를 안쓰면 아래처럼 해야함
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm);

    expect(wrapper.vm.username).toBe('');
  });
});

describe('로그인 컴포넌트 입력 테스트', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // find <template>...</template> 에있는 HTML 요소들을 찾는다.
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});

// import { sum } from './math';

// // describe 연관된 테스트 케이스를 그룹화 하는 API
// describe('sum function test code', () => {
//   // test 하나의 테스트 케이스를 검증하는 API
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).not.toBe(15);
//   });
// });
