// apiRoutes.js

const API_ROUTES = {
    LOGIN: "/Auth/SignIn",
    SIGN_UP:"/Auth/SingnUp",
    PACKAGES:"/Package",
    DETAIL:"/package/[id]",
    COURSE:(id)=>
    {
        return `/package/course/${id}`
    }
};

export default API_ROUTES;
