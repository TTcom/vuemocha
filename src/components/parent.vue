<template>
	<div class="parent"> 
		<Son @show="show"></Son>
		<div id="content" v-if="isShow">内容</div>
	</div>
</template>

<script>
	import Son from './son.vue'
	export default{
		data(){
			return{
				isShow:false
			}
		},
		components:{
			Son
		},
		methods:{
			show(){
				this.isShow = true;
			}
		}
	}
</script>

<style>
</style>
