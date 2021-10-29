<template>
	<div>
		<h1> Заранее прошу прощения за то, что не особо красиво, но в верстке я шарю)</h1>
		<p>{{ELEMENTS[id].body}}</p>
	</div>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
	export default
	{
		validate({ params })
		{
			return /^\d+$/.test(params.id)
		},
		methods:
		{
			...mapActions('element',[
				'GET_ELEMENTS'
			]),
		},
		computed:
		{
			id()
			{
				return this.$route.params.id
			},
			...mapGetters('element',[
				'ELEMENTS'
			])
		},
		async fetch()
		{
			await this.GET_ELEMENTS()
		}
	};
</script>
<style>
</style>