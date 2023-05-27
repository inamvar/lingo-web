const AppRoutes= {

    Signup:"/auth/signup",
    SignupReturn:(url)=>{
        return `/auth/signup?returnUrl=${url}`;
    },
    Login:"/auth/login",
    LoginReturn:(url)=>{
        return `/auth/login?returnUrl=${url}`;
    },
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
    MyTransactions:"/dashboard/myTransactions",
    FREEPACKAGE:"/freePackage",
    packages:"/packages",
    Discount:"/discount",
    GoldenPackage:"/goldenPackage",
    PaymentDetail:(slug)=>{
        return `/coursePaymentDetail/${slug}`;
    }
};

export default AppRoutes;