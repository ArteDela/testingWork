<template>
	<div class="table">
		<div class="table__list">
			<div class="table__list-header">
				<div class="table__inner-table-sorter">
					<span>id</span>
					<div class="table__inner-table-arrows">
						<div class="table__inner-table-asc" @click="sortByIdAsc">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
						</div>
						<div class="table__inner-table-desc" @click="sortByIdDesc">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
						</div>
					</div>
				</div>
				<div>name</div>
				<div>email</div>
			</div>
			<div class="table__item" v-for = "(result,index) in pagElements">
				<NuxtLink class	="table__item-link" :to = "`detail/${result.id}`">{{result.id}}</NuxtLink>
				<NuxtLink class	="table__item-link" :to = "`detail/${result.id}`">{{result.name}}</NuxtLink>
				<NuxtLink class	="table__item-link" :to = "`detail/${result.id}`">{{result.email}}</NuxtLink>
			</div>
		</div>
		<!-- <table class="table__inner-table">
			<tr>
				<th class="table__inner-table-sorter">
					<span>id</span>
					<div class="table__inner-table-arrows">
						<div class="table__inner-table-asc" @click="sortByIdAsc">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
						</div>
						<div class="table__inner-table-desc" @click="sortByIdDesc">
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
						</div>
					</div>
				</th>
				<th>name</th>
				<th>email</th>
			</tr>
			<tr v-for = "(result,index) in pagElements">
				<td>
					<NuxtLink :to = "`detail/${result.id}`">{{result.id}}</NuxtLink>
				</td>
				<td>
					<NuxtLink :to = "`detail/${result.id}`">{{result.name}}</NuxtLink>
				</td>
				<td>
					<NuxtLink :to = "`detail/${result.id}`">{{result.email}}</NuxtLink>
				</td>
			</tr>
		</table> -->
		<div class="table__pagination">
			<div class="table__pagination-page"
				v-for="(page,index) in pages"
				:key="index"
				:class="{'active':page===pageNumber}"
				@click = "changePage(page)"
			>{{page}}</div>
		</div>
	</div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'
export default {
	data()
	{
		return{
			elementsCountPages:10,
			pageNumber:1
		}
	},
	props:{
		elements:Array
	},
	computed:
	{
		pages()
		{
			return Math.round(this.elements.length/20)
		},
		pagElements()
		{
			let from = (this.pageNumber - 1) * this.elementsCountPages
			let to = from + this.elementsCountPages
			return this.elements.slice(from,to)
		}
	},
	methods:
	{
		changePage(page)
		{
			this.pageNumber = page
		},
		...mapMutations({
			sortByIdAsc: 'element/sortByIdAsc',
			sortByIdDesc: 'element/sortByIdDesc'
		})
	},
	mounted()
	{
	}
}
</script>
<style>
	.table__inner-table
	{
		border:1px solid;
		width: 100%;
		margin-bottom: 10px;
	}
	.table__list-header
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.table__list-header div
	{
		text-align: left;
		width: 100%;
	}
	.table__list-header div.table__inner-table-arrows{width: auto;}
	.table__item
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: left;
		margin-bottom: 10px;
		border-bottom: 1px solid;
	}
	.table__item-link
	{
		color: black;
		text-decoration: none;
		text-align: left;
		display: block;
		width: 100%;
		margin-right:15px;
	}
	.table__pagination
	{
		display: flex;
	}
	.table__pagination-page
	{
		width: 20px;
		height: 20px;
		text-align: center;
		border:1px solid;
		cursor: pointer;
		margin: 0 5px;
		transition: .2s;
	}
	.table__pagination-page:hover
	{
		border-color:red;
		transition: .2s;
	}
	.table__inner-table-sorter
	{
		display: flex;
		align-items: center;
	}
	.table__inner-table-sorter span
	{
		display: block;
		margin-right: 5px;
	}
	.table__inner-table-asc,
	.table__inner-table-desc
	{
		width: 12px;
		height: 12px;
	}
	.table__inner-table-desc svg
	{
		width: 100%;
		height: 100%;
	}
	.table__inner-table-asc svg
	{
		transform: rotate(180deg);
		width: 100%;
		height: 100%;
	}
	.active{border-color:red;}
</style>