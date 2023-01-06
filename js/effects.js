const config = {
  view: document.querySelector(".app"),
  preload: true,
  scenes: {
    scroll: {
      transform(data) {
        const { transformPrefix } = data.globalState;
        const { context } = data.sceneState.cache;
        const { transform } = data;
        context.style[transformPrefix] = `translate3d(0, ${transform}px, 0)`;
        // context.style.transformOrigin = `50% ${50 - delta * 2}%`;
      },
    },
    rotateZ: {
      transform(data) {
        const { previous, current, transformPrefix } = data.globalState;
        const { context } = data.sceneState.cache;
        const { transform } = data;
        const delta = current - previous;
        const rotationZ = delta / 2;
        const skew = delta / 2.5;
        context.style[
          transformPrefix
        ] = `translate3d(0, ${transform}px, 0) rotateZ(${rotationZ}deg) skew(${skew}deg)`;
      },
    },
    rotateX: {
      transform(data) {
        const { previous, current, transformPrefix } = data.globalState;
        const { context } = data.sceneState.cache;
        const { transform } = data;
        const delta = current - previous;
        const rotationX = 1 + delta / 3;
        context.style[
          transformPrefix
        ] = `translate3d(0, ${transform}px, 0) rotateX(${rotationX}deg)`;
      },
    },
  },
};

const r = window.rolly(config);
r.init();
