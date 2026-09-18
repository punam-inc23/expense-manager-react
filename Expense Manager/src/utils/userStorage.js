export const saveUser = (userData) => {
    const users = getRegisteredUsers();
    const updatedUsers = users.map((user) =>
        user.username.toLowerCase() === userData.username.toLowerCase()
            ? userData
            : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
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

    localStorage.setItem("users", JSON.stringify([
        ...users,
        { ...userData, category: [], expense: [], isLoggedIn: false }
    ]));
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
    const updatedUsers = getRegisteredUsers().map((registeredUser) => ({
        ...registeredUser,
        isLoggedIn: registeredUser.username.toLowerCase() === username.toLowerCase()
    }));

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    saveUser(loggedInUser);
    return loggedInUser;
};

export const getUser = () => {
    return getRegisteredUsers().find((user) => user.isLoggedIn === true) || null;
};


export const removeUser = () => {
    const users = getRegisteredUsers().map((user) => ({
        ...user,
        isLoggedIn: false
    }));

    localStorage.setItem("users", JSON.stringify(users));
};


export const isLoggedIn = () => {
    return getUser() !== null;
};


/*
export const addUserExpense = (expense) => {
    const user = getUser();
    if (!user) return false;

    const savedExpenses = Array.isArray(user.expense)
        ? user.expense
        : user.expense ? [user.expense] : [];

    saveUser({ ...user, expense: [...savedExpenses, expense] });
    return true;
};

export const updateUserExpense = (expenseId, updatedExpense) => {
    const user = getUser();
    if (!user) return;

    const savedExpenses = Array.isArray(user.expense)
        ? user.expense
        : user.expense ? [user.expense] : [];

    const updatedExpenses = savedExpenses.map((expense) => expense.id === expenseId
        ? { ...expense, ...updatedExpense, id: expense.id, createdAt: expense.createdAt }
        : expense);

    saveUser({ ...user, expense: updatedExpenses });
    return updatedExpenses;
};

export const removeExpense = (expenseId) => {
    const user = getUser();
    if (!user) return;

    const updatedExpenses = Array.isArray(user.expense)
        ? user.expense.filter((expense) => expense.id !== expenseId)
        : [];

    saveUser({ ...user, expense: updatedExpenses });
    return updatedExpenses;
};

export const addCategory = (category) => {
    const user = getUser();
    if (!user) return false;

    const savedCategories = Array.isArray(user.category) ? user.category : [];
    const newCategory = { ...category, id: Date.now() };

    saveUser({ ...user, category: [...savedCategories, newCategory] });
    return true;
};

export const getCategory = () => {
    const user = getUser();
    return user && Array.isArray(user.category) ? user.category : [];
};
*/