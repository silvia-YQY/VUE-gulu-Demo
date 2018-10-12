import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from "./button_group.vue"

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);

new Vue({
	el:"#app",
    data(){
	    return{
	        loading:false
        }
    }
});