document.addEventListener('DOMContentLoaded', function() {

  barba.use(barbaCss);

  barba.init({

    debug: true,
    logLevel: 'error',

    timeout: 8000,

    transitions: [{
      name: 'fade',
      sync: true,
      leave() {},
      enter() {},
      beforeLeave: () => {
        document.querySelector('body').classList.add('transition');
      },
      afterLeave: () => {
      },
      beforeEnter: () => {
      },
      afterEnter: () => {
        document.querySelector('body').classList.remove('transition');
      }
    }]

  });

});
