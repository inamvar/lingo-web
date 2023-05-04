const AppRoutes= {

    Signup:"/auth/signup",
    Login:"/auth/login",
    Main:"/",
    ForgotPassword:"/auth/forgot-password",
    Profile:"/auth/profile",
    Dashboard:"/auth/dashboard",
    COURSE:(id,slug)=>{
        return `/Package/${id}/${slug}`
    }
};

export default AppRoutes;