// apiRoutes.js

const API_ROUTES = {
    LOGIN: "/Auth/SignIn",
    SIGN_UP:"/Auth/SingnUp",
    PACKAGES:"/Package",
    SIGN_OUT:"/Auth/Signout",
    PACKAGE:(slug)=>
    {
        return `/Package/${slug}`
    },
    COURSE:(slug)=>
    {
        return `/Course/${slug}`
    },
    VIDEO:(slug)=>`/Course/Videos/${slug}`,
    REFRESHTOKEN:"/Auth/RefreshToken",
    SITESETTING:"/setting",
    MYPROFILE:"/user/profile",
    UPDATEMYPROFILE:"/user/profile",
    BANNER:"/Banner"
};

export default API_ROUTES;