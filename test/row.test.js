const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })

  it('可以接受 gutter 属性', (done) => {  // 若加done，默认代码异步；不加done，默认同步
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-row gutter="20">
      <g-col span="12"></g-col>
      <g-col span="12"></g-col>
    </g-row>    
    `
    const vm = new Vue({
      el: div
    })

    console.log(vm.$el.outerHTML);
    setTimeout(() => {
      console.log(vm.$el.outerHTML);
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')

      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('可以接受 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })


})