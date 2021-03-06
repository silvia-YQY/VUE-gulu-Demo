
import Toast from './toast'
import { log } from 'util';
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (msg,toastOption) {
      let Constructor = Vue.extend(Toast)  // 继承
      let toast = new Constructor({  // 创建
        propsData:toastOption
      })  
      toast.$slots.default = [msg]  // 给插槽传入默认信息：msg
      toast.$mount()     // 在vue中挂载（虚
      let element = document.querySelector('.toast');
      element.appendChild(toast.$el)  //  在页面挂载（实
    }
  }
}