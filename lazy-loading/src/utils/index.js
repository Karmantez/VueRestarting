const lazyLoading = {
  inserted: el => {
    // function loadImage() {
    //   const isImg = el.nodeName === 'IMG';

    //   if (isImg) {
    //     el.src = el.dataset.url;
    //   }
    // }

    function createObserver() {
      const ob = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target;
              const url = target.dataset.url;

              console.log(target.dataset.id);

              el.src = url;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        },
      );
      ob.observe(el);
    }

    createObserver();
  },
};

export default lazyLoading;
