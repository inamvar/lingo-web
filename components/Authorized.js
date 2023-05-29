import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../context/authContext';
import appRoutes from '../common/appRoutes';

export function withAuth(WrappedComponent) {

    return function AuthenticatedWrapper(props) {

        const context = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {

            if ('authenticated' in context.authState && !context.authState.authenticated)
            {
                const current= router.asPath;
                router.push(appRoutes.LoginReturn(current));
            }
            else{
                console.log('ok');
            }
        },[context.authState]);

        return <WrappedComponent {...props} />;
    };
}
