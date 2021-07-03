const CART_KEY = "cart";
const TOKEN_KEY = "jwt";

export const setCart = (value, cartKey = CART_KEY) => {
    if(localStorage) {
        localStorage.setItem(cartKey, JSON.stringify(value));
    }
};

export const getCart = (cartKey = CART_KEY) => {
    if(localStorage && localStorage.getItem(cartKey)) {
        return JSON.parse(localStorage.getItem(cartKey));
    };
};


/* Auth */
export const setToken = (value, tokenKey = TOKEN_KEY) => {
    if(localStorage) {
        localStorage.setItem(tokenKey, JSON.stringify(value));
    };
    return null;
};

export const getToken = (tokenKey = TOKEN_KEY) => {
    if(localStorage && localStorage.getItem(tokenKey)) {
        return JSON.parse(localStorage.getItem(tokenKey));
    };
};

export const clearToken = (tokenKey = TOKEN_KEY) => {
    if(localStorage) {
        localStorage.removeItem(tokenKey);
    };
};