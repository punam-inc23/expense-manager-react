import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		isAuthenticated: false
	},
	reducers: {
		setAuthenticatedUser: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = Boolean(action.payload);
		},
		clearAuthenticatedUser: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		}
	}
});

const expensesSlice = createSlice({
	name: "expenses",
	initialState: [],
	reducers: {
		setExpenses: (_state, action) => action.payload,
		addExpense: (state, action) => {
			state.push(action.payload);
		},
		updateExpense: (state, action) => {
			const { id, changes } = action.payload;
			const expenseIndex = state.findIndex((expense) => expense.id === id);

			if (expenseIndex !== -1) {
				state[expenseIndex] = {
					...state[expenseIndex],
					...changes,
					id: state[expenseIndex].id,
					createdAt: state[expenseIndex].createdAt
				};
			}
		},
		removeExpense: (state, action) =>
			state.filter((expense) => expense.id !== action.payload)
	}
});

const categoriesSlice = createSlice({
	name: "categories",
	initialState: [],
	reducers: {
		setCategories: (_state, action) => action.payload,
		addCategory: (state, action) => {
			state.push(action.payload);
		}
	}
});

export const {
	setExpenses,
	addExpense,
	updateExpense,
	removeExpense
} = expensesSlice.actions;

export const { setCategories, addCategory } = categoriesSlice.actions;

export const { setAuthenticatedUser, clearAuthenticatedUser } = authSlice.actions;

export const expensesReducer = expensesSlice.reducer;
export const categoriesReducer = categoriesSlice.reducer;
export const authReducer = authSlice.reducer;
