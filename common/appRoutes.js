const AppRoutes= {

    Signup:"/auth/signup",
    Login:"/auth/login",
    Main:"/",
    ForgotPassword:"/auth/forgot-password",
    Profile:"/dashboard/myProfile",
    Dashboard:"/dashboard",
    Package:(slug)=>{
        return `/package/${slug}`
    },
    Course:(slug)=>{
        return `/package/course/${slug}`
    },
    DetailCourse:'/package/course/courseEpisodes',
    Video:(slug)=>{
        return `/package/course/courseEpisodes/${slug}`;
    },
    Cart:'/dashboard/cart',
    MyPackages:"/dashboard/myPackages",
    MyProfile:"/dashboard/myProfile",
    MyTransactions:"/dashboard/myTransactions"
};

export default AppRoutes;