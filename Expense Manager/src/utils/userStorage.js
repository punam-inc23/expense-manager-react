export const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
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