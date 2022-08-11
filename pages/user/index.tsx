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
    <h2 >Mohamed Jamal - Rent a Tesla</h2>      
            <Grid>
                <Grid.Col span={3}><FeaturesCard /></Grid.Col>
                <Grid.Col span={3}><FeaturesCard /></Grid.Col>
                <Grid.Col span={3}><FeaturesCard /></Grid.Col>
                <Grid.Col span={3}><FeaturesCard /></Grid.Col>
            </Grid>
        
        </Container>
        

   
    
    
    </>
);

};

export default UserPage;