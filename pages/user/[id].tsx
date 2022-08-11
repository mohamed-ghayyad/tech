import Link from "../../node_modules/next/dist/client/link";
import { useRouter } from "../../node_modules/next/router";
const User = ()=>{
    const router = useRouter();
    const {id, ...rest} = router.query;
    return (
        <>
        <h2>User id = {id}</h2>
        <pre>{JSON.stringify(rest)}</pre>
        </>
    );
};

export default User;