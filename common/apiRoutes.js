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
    CHANGEPASSWORD:"/User/ChangePassword",
    UPDATEMYPROFILE:"/user/profile",
    BANNER:"/Banner",
    FREEPACKAGE:"/Package/Free",
    GOLDENPACKAGE:"/Package/Golden",
    SEARCH:"/Search",
    MYCOURSES:"/Report/PurchasedCourses",
    ORDERHISTORY:"/Report/OrderHistory",
    ORDER:"/Order",
    SENDMESSAGES:"/Comment",
    NEWMESSAGE:"/Comment/ToAdmin",
    MESSAGEDETAIL:(id)=>{
        return `/Comment/${id}`
    },
    RESETPASSWORDREQUEST:"/User/ResetPasswordRequest",
    RESETPASSWORD:"/User/ResetPassword"
};

export default API_ROUTES;