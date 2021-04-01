import bus from '@/utils/bus';
import ListView from '@/views/ListView';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created() {
      this.$store
        .dispatch('FETCH_LIST', { name: this.$route.name })
        .then(({ success }) => {
          if (success) {
            bus.$emit('end:spinner');
          }
        })
        .catch(error => console.log(error));
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
