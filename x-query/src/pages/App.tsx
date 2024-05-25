import {Card,CardTypePlanner,CardError,CardAlert,CardAproved} from "../components/cards-components/Cards";  
import "../assets/css/Home.css" 
import icon from  "../components/buttons/assets/utilites/Screenshot from 2024-04-03 09-54-04.png"
import aprovedIcon from "../components/cards-components/assets/utilites/aproved.png" 

export default function App() {
    return (
        <main className= "content" >
            <Card></Card> 
            <CardTypePlanner></CardTypePlanner> 
            <CardError></CardError> 
            <CardAlert img = {icon} ></CardAlert> 
            <CardAproved img = {aprovedIcon}></CardAproved>
        </main>
    )
}