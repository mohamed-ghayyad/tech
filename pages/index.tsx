import Link from "../node_modules/next/link";
import { HeaderMiddle } from "../components/header";
function HeaderPage(){
   return <Link href="/">Home </Link>
};

const HomePage = ()=>  {
    const Homelinks = [
        { "link": "/", "label": "Home" },
        { "link": "/about", "label": "About" },
        { "link": "/user", "label": "User" }
      ];
return (
    <>
    
    <HeaderMiddle links={Homelinks}/>
    <h1>Hello World</h1>
    </>
);

};

export default HomePage;