import {NextResponse} from "next/server";
import appRoutes from "./common/appRoutes";
import cookies from 'next-cookies';


 export async function middleware(req) {
//
//     const token = cookies(req);
//
//
//
//     if (req.nextUrl.pathname.startsWith(appRoutes.Login) && token) {
//         console.log('go to main');
//         console.log(req.host);
//         return NextResponse.redirect(new URL(appRoutes.Main,req.host));
//     }
     return NextResponse.next();
 }