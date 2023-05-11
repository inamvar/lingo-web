// apiRoutes.js

const API_ROUTES = {
    LOGIN: "/Auth/SignIn",
    SIGN_UP:"/Auth/SingnUp",
    PACKAGES:"/Package",
    PACKAGE:(slug)=>
    {
        return `/Package/${slug}`
    },
    COURSE:(slug)=>
    {
        return `/Course/${slug}`
    },
    VIDEO:(slug)=>`/Course/Video/${slug}`,
    REFRESHTOKEN:"/Auth/RefreshToken",
    SITESETTING:"/setting",
    MYPROFILE:"/user/profile",
    UPDATEMYPROFILE:"/user/profile"
};

export default API_ROUTES;