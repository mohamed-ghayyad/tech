import { HeaderMiddle } from "../../components/header";
import { FeaturesCard } from "../../components/card";
import { createStyles, Header, Group, ActionIcon, Container, Burger,Grid } from '../../node_modules/@mantine/core';


const UserPage = ()=>  {
    const Homelinks = [
        { "link": "/", "label": "Home" },
        { "link": "/about", "label": "About" },
        { "link": "/user", "label": "User" }
      ];


return (
    <>
    
    <HeaderMiddle links={Homelinks}/>
    <Container>
        <h2>Users Page</h2>
        
        </Container>
        

   
    
    
    </>
);

};

export default UserPage;
