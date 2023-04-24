import {useRouter} from "next/router";

const Package=()=>{
    const router=useRouter();
    const {id}=router.query;
    return(<>
        <div>
           id: {id}
        </div>
    </>);
}

export async const getServerSideProps=(ctx)=>{

    return{
        props:{

        }
    };
}

export default Package;