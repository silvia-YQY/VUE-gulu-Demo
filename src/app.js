import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from "./button_group.vue"
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);

Vue.use(plugin)

new Vue({
  el: "#app",
  data() {
    return {
      loading: false,
      message: ''
    }
  },
  created() {
  },
  methods: {
    inputChange() {

    },
    showToast() {
      this.$toast(`<i>看看嘛！！</i>`, {
        closeButton: {
          text: '知道了',
          callback(toast) {
            toast.log()
            console.log('用户知道了');
          }
        },
        enableHtml:false
      })
    }
  }
});
