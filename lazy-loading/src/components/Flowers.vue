<template>
  <div>
    <h1>Lazy Loading</h1>
    <div class="flowers-wrapper">
      <div class="flowers-container">
        <div class="flower" v-for="id in 50" :key="id">
          <img v-lazyLoading :data-url="`https://picsum.photos/id/${id}/250/300`" :data-id="id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // const observerOption = {
    //   root: null,
    //   rootMargin: '0px 0px 30px 0px',
    //   threshold: 0.2,
    // };
    // // IntersectionObserver 인스턴스 생성
    // const io = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(entry => {
    //     // entry.isIntersecting: 특정 요소가 뷰포트와 20%(threshold 0.2) 교차되었으면
    //     if (entry.isIntersecting) {
    //       console.log(entry.target.dataset.id);
    //       entry.target.src = entry.target.dataset.url;
    //       observer.unobserve(entry.target); // entry.target에 대해 관찰 종료
    //     }
    //   });
    // }, observerOption);
    // // lazy-img 클래스 요소 순회
    // const lazyImgs = document.querySelectorAll('.lazy-img');
    // lazyImgs.forEach(el => {
    //   io.observe(el); // el에 대하여 관측 시작
    // });
  },
};
</script>

<style scoped>
.flowers-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  height: 1000px;
}

.flowers-wrapper {
  height: 1000px;
  overflow: auto;
}

.flower {
  width: 250px;
  height: 300px;
  margin: 10px;
}
</style>
