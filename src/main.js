import Vue from 'vue'
import App from './App.vue'

// Register Charts globally
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'
Vue.component("BarChart", BarChart)
Vue.component("LineChart", LineChart)
Vue.component("PieChart", PieChart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
