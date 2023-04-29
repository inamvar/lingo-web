import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../context/authContext';
import appRoutes from '../common/appRoutes';

export function withAuth(WrappedComponent) {

    return function AuthenticatedWrapper(props) {
        const context = useContext(AuthContext);
        const router = useRouter();
        console.log(context);

        useEffect(() => {

            if (context.authState.authenticated==false) {
                console.log('notlogin');
                router.push(appRoutes.Login);
            }
            else{
                console.log('ok');
            }
        }, [context]);

        return <WrappedComponent {...props} />;
    };
}
