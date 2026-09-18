import { configureStore } from "@reduxjs/toolkit";
import { getUser, saveUser } from "../utils/userStorage";
import {
	authReducer,
	categoriesReducer,
	expensesReducer,
	setAuthenticatedUser,
	clearAuthenticatedUser,
	setCategories,
	setExpenses
} from "./slice";

const loggedInUser = getUser();

export const store = configureStore({
	reducer: {
		auth: authReducer,
		expenses: expensesReducer,
		categories: categoriesReducer
	},
	preloadedState: {
		auth: {
			user: loggedInUser,
			isAuthenticated: Boolean(loggedInUser)
		},
		expenses: Array.isArray(loggedInUser?.expense) ? loggedInUser.expense : [],
		categories: Array.isArray(loggedInUser?.category) ? loggedInUser.category : []
	}
});

store.subscribe(() => {
	const user = getUser();

	if (!user) {
		return;
	}

	const { expenses, categories } = store.getState();

	saveUser({
		...user,
		expense: expenses,
		category: categories
	});
});

export const loadUserData = (user) => {
	if (user) {
		store.dispatch(setAuthenticatedUser(user));
	} else {
		store.dispatch(clearAuthenticatedUser());
	}

	store.dispatch(setExpenses(Array.isArray(user?.expense) ? user.expense : []));
	store.dispatch(setCategories(Array.isArray(user?.category) ? user.category : []));
};

// You wrote loadUserData() because preloadedState only loads data when the 
// Redux Store is created, whereas loadUserData() lets you load a particular user's data into Redux 
// later, whenever you need it.