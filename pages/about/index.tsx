import Link from "../../node_modules/next/link";
import { HeaderMiddle } from "../../components/header";

const AboutPage = ()=>  {
    const Homelinks = [
        { "link": "/", "label": "Home" },
        { "link": "/about", "label": "About" },
        { "link": "/user", "label": "User" }
      ];
return (
    <>
    <HeaderMiddle links={Homelinks}/>
    <h1>About Page</h1>
    </>
);

};

export default AboutPage;