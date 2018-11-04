import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from "./button_group.vue"
import Input from './input'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);

new Vue({
	el:"#app",
    data(){
	    return{
	        loading:false,
            message:''
        }
    },
    methods:{
        inputChange(e){
            console.log(e.target.value);
        }
    }
});

// 单元测试
// import chai from 'chai';
// import spied from 'chai-spies'
//
// chai.use(spies)
// const expect = chai.expect
//
// // 一、测试按钮icon
// {   // 动态生成组件
//     const Constructor = Vue.extend(Button)  // 通过承继组件生成构造函数
//     // 实例化构造函数
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     vm.$mount('#test')  // 挂载到页面上id=test的div上
//
//     let useEl = vm.$el.querySelector('use')
//     // 测试期望xlink:href === #i-settings
//     let href = useEl.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//
//     // 清理
//     vm.$el.remove()
//     vm.$destroy()
// }
//
// // 二、测试按钮loading
// {   // 动态生成组件
//     const Constructor = Vue.extend(Button)  // 通过承继组件生成构造函数
//     // 实例化构造函数
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//     vm.$mount()  // 挂载到页面上
//
//     let useEl = vm.$el.querySelector('use')
//     // 测试期望xlink:href === #i-loading
//     let href = useEl.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//
//     // 清理
//     vm.$el.remove()  // 把元素从页面删除
//     vm.$destroy()    // 组件毁灭
// }
//
// // 三、测试按钮order(icon左放置)
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     // 动态生成组件
//     const Constructor = Vue.extend(Button)  // 通过承继组件生成构造函数
//     // 实例化构造函数
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//         }
//     })
//     vm.$mount(div)  // 挂载到页面上
//
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//
//     // 清理
//     vm.$el.remove()
//     vm.$destroy()
// }
//
// // 四、测试按钮order(icon右放置)
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     // 动态生成组件
//     const Constructor = Vue.extend(Button)  // 通过承继组件生成构造函数
//     // 实例化构造函数
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)  // 挂载到页面上
//
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//
//     // 清理
//     vm.$el.remove()
//     vm.$destroy()
// }
//
// // 五、测试按钮click事件
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     // 动态生成组件
//     const Constructor = Vue.extend(Button)  // 通过承继组件生成构造函数
//     // 实例化构造函数
//     const gButton = new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     gButton.$mount()  // 挂载到页面上
//     let spy = chai.spy(()=>{})
//     gButton.$on('click',spy)
//     let button = gButton.$el
//     button.click()
//     expect(spy).to.have.been.called()
//
//     // 清理
//     gButton.$el.remove()
//     gButton.$destroy()
// }