export const initialState = {
	user: {
		name: 'Александр',
		surname: 'Серпухов',
		age: 27
	},
};

export function rootReducer(state = initialState) {
	return state;
}
