import { useAuth } from '/contexts/authContext';

const AuthenticatedComponent = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return <p>Welcome {user.name}!</p>;
};

export default AuthenticatedComponent;
