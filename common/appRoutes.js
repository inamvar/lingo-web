const AppRoutes= {

    Signup:"/auth/signup",
    Login:"/auth/login",
    Main:"/",
    ForgotPassword:"/auth/forgot-password",
    Profile:"/auth/profile",
    Dashboard:"/auth/dashboard",
    Package:(slug)=>{
        return `/package/${slug}`
    },
    Course:(slug)=>{
        return `/package/course/${slug}`
    },
    DetailCourse:'/package/course/courseDetail/video'
};

export default AppRoutes;