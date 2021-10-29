<template>
	<Table
		:elements = 'ELEMENTS'/>
</template>

<script>
	import Table from '@/components/Table'
	import { mapActions, mapGetters } from 'vuex'
export default
{
	components: {Table},
	methods:
	{
		...mapActions('element',[
			'GET_ELEMENTS'
		]),
	},
	computed:
	{
		...mapGetters('element',[
			'ELEMENTS'
		])
	},
	async fetch()
	{
		await this.GET_ELEMENTS()
	},
}
</script>
