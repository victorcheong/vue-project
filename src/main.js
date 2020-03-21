import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAJzuGdri_OLOX7hTZAdIUTzwceDVC3XWI",
  authDomain: "bt3103-final-product.firebaseapp.com",
  databaseURL: "https://bt3103-final-product.firebaseio.com",
  projectId: "bt3103-final-product",
  storageBucket: "bt3103-final-product.appspot.com",
  messagingSenderId: "619318861214",
  appId: "1:619318861214:web:ffa401fe7338cd7f91ca8f",
  measurementId: "G-26YP3W344V"
};
  
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app');
