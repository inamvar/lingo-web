import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '/contexts/authContext';
import appRoutes from "../common/appRoutes";

const withAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {

        const { user, isLoading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isLoading && !user) {
                router.push(appRoutes.Login);
            }
        }, [user, isLoading]);

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (user) {
            return <WrappedComponent {...props} />;
        }

        return null;
    };

    return AuthenticatedComponent;
};

export default withAuth;
