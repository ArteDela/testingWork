export const state = () => ({
	elements: []
});

export const mutations =
{
	setElementFromState:(state,elements)=>
	{
		state.elements = elements;
	},
	sortByIdDesc(stateArr)
	{
		stateArr.elements.sort((a,b)=>b.id - a.id);
	},
	sortByIdAsc(stateArr)
	{
		stateArr.elements.sort((a,b)=>a.id - b.id);
	}
};

export const actions =
{
	GET_ELEMENTS({commit})
	{
		return this._vm.$axios('/comments',{
			method:'GET',
		}).then((elements)=>
		{
			commit('setElementFromState',elements.data);
			return elements;
		});
	},
};

export const getters =
{
	ELEMENTS(state)
	{
		return state.elements;
	},
};