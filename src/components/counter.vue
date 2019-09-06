<template>
     <div class="counter">
		<span class="spancount">{{counternum}}</span>	 
			 
		<button type="button" @click="addcounternum()">add</button>	 
	 </div>
</template>

<script>
	export default{
		data(){
			return{
				counternum:0
			}
		},
		methods:{
			addcounternum(){
				this.counternum++
			}
		}
	}
</script>

<style lang="scss"  scoped>
  
  
</style>
