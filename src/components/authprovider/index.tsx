const Provider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        Provider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
        Provider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export default  Provider ;