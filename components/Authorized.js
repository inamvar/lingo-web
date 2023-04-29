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
            if (('authenticated' in context) && !context.authState.authenticated) {
                router.push(appRoutes.Login);
            }
            else{

            }
        }, [context]);

        return <WrappedComponent {...props} />;
    };
}
