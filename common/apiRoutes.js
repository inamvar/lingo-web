// apiRoutes.js

const API_ROUTES = {
    LOGIN: "/Auth/SignIn",
    SIGN_UP:"/Auth/SingnUp",
    PACKAGES:"/Package",
    DETAIL:"/package/[id]",
    PACKAGE:(slug)=>
    {
        return `/Package/${slug}`
    }
};

export default API_ROUTES;
