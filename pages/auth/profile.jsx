import {withAuth} from "../../components/Authorized";
import {useContext} from "react";
import authContext from "../../context/authContext";
import Meta from "../../components/meta";

const Profile = () => {

    const auth= useContext(authContext);

    return(
        <>
            <Meta title='پروفایل'/>
            {auth.authState.user?.email}
        </>
    );
};

export default withAuth(Profile);
