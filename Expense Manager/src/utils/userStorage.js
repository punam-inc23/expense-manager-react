export const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
};

export const getRegisteredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
};

export const registerUser = (userData) => {
    const users = getRegisteredUsers();
    const alreadyRegistered = users.some(
        (user) => user.username.toLowerCase() === userData.username.toLowerCase()
    );

    if (alreadyRegistered) {
        return false;
    }

    localStorage.setItem("users", JSON.stringify([...users, userData]));
    return true;
};

export const authenticateUser = (username, password) => {
    const user = getRegisteredUsers().find(
        (registeredUser) =>
            registeredUser.username.toLowerCase() === username.toLowerCase() &&
            registeredUser.password === password
    );

    if (!user) {
        return null;
    }

    const loggedInUser = { ...user, isLoggedIn: true };
    saveUser(loggedInUser);
    return loggedInUser;
};

export const getUser = () => {

    const user = localStorage.getItem("user");

    if (!user) {
        return null;
    }

    return JSON.parse(user);
};


export const removeUser = () => {
    localStorage.removeItem("user");
};


export const isLoggedIn = () => {

    const user = localStorage.getItem("user");

    if (!user) {
        return false;
    }

    return JSON.parse(user).isLoggedIn === true;
};


export const addUserExpense = (expense) => {
    const user = getUser();

    if (!user) {
        return false;
    }

    const savedExpenses = Array.isArray(user.expense)
        ? user.expense
        : user.expense
            ? [user.expense]
            : [];

    saveUser({
        ...user,
        expense: [...savedExpenses, expense]
    });

    return true;
};


export const updateUserExpense = (expenseId, updatedExpense) => {
    const user = getUser();

    if (!user) {
        return;
    }

    const savedExpenses = Array.isArray(user.expense)
        ? user.expense
        : user.expense
            ? [user.expense]
            : [];

    const updatedExpenses = savedExpenses.map((expense) => {
        if (expense.id !== expenseId) {
            return expense;
        }

        return {
            ...expense,
            ...updatedExpense,
            id: expense.id,
            createdAt: expense.createdAt
        };
    });

    saveUser({
        ...user,
        expense: updatedExpenses
    });

    return updatedExpenses;
};




export const removeExpense = (expenseId) => {

    const user = getUser();

    if (!user) {
        return;
    }

    const updatedExpenses = Array.isArray(user.expense)
        ? user.expense.filter(
            (expense) => expense.id !== expenseId
        )
        : [];

    const updatedUser = {
        ...user,
        expense: updatedExpenses
    };

    saveUser(updatedUser);

    return updatedExpenses;
};

export const addCategory = (category) => {

    const user = getUser();

    if (!user) {
        return false;
    }

    const savedCategories = Array.isArray(user.category)
        ? user.category
        : [];

    const newCategory = {
        ...category,
        id: Date.now()
    };

    saveUser({
        ...user,
        category: [...savedCategories, newCategory]
    });

    return true;
};


export const getCategory = () => {

    const user = getUser();

    if (!user) {
        return [];
    }

    return Array.isArray(user.category)
        ? user.category
        : [];
};