const topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('#app-bar'));
const linearProgress = new mdc.linearProgress.MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.setScrollTarget(document.querySelector('main'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

setTimeout(() => {
  linearProgress.close();
}, 5000);

/*firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed-in ...
  } else {
    // User is signed out ...
  }
});*/
