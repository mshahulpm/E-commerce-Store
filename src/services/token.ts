import Cookie from "js-cookie";

const getToken = () => {
    const refreshToken = Cookie.get("accessToken");
    return refreshToken;
};



const setToken = (accessToken: string) => {
    const expires = new Date();
    Cookie.set("accessToken", accessToken, {
        expires: 6
    });

    return true;
};

const removeToken = () => {
    Cookie.remove("accessToken");
    return true;
};






const Tokens = {
    setToken,
    removeToken,
    getToken
};

export default Tokens;
