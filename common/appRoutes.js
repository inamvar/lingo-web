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
    MyPackages:"/dashboard/myPackages",
    MyProfile:"/dashboard/myProfile",
    MyTransactions:"/dashboard/myTransactions",
    FREEPACKAGE:"/freePackage",
    packages:"/packages",
    Discount:"/discount",
    GoldenPackage:"/goldenPackage",
    PaymentDetail:(slug)=>{
        return `/coursePaymentDetail/${slug}`;
    },
    ChangePassword:"/dashboard/changePassword",
    SendMessages:"/dashboard/myMessages/sendMessages",
    NewMessage:"/dashboard/myMessages/newMessage",
    DetailMessage:(id)=> {
        return `/dashboard/myMessages/sendMessages/${id}`;
    },
    ForgetPassword:"/auth/forgetPassword",
    NewPassword:"/auth/forgetPassword/newPassword"
};

export default AppRoutes;