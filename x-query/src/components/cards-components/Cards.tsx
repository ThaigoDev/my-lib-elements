import "./assets/css/Cards.css"  

import bg from "./assets/utilites/bg.png" 
import icon from  "./assets/utilites/icnon.png"  
import bg2 from "./assets/utilites/bg2.png"; 
import  atentionIcn from "./assets/utilites/eror.png" 
import { ButtonPourple,ButtonDefault} from "../buttons/Buttons";

export  function Card() {
  return (
     <div className = "body-card">
        <div className="card-img"> 
          <img src= {bg} alt="" />
        </div> 
        <div className="card-title">
            <h2>Anxiety</h2> 
             <img className= "icon-card" src={icon} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ducimus quisquam possimus sequi aut consectetur, </p>
        </div>
     </div>
  ); 
} 
export function   CardTypePlanner() {
  return (
     <div className="card-type-2-body">
        <div className="img__Card__body">
            <img src= {bg2} alt="" /> 
        </div> 
        <div className="card__text">
           <h2 className= "title">
             Woo hoo!
           </h2>  
           <p className= "text">
            Your newsletter was sent. Bask in the gloy.
           </p> 
         </div> 
        <button className ="btn-button-2">
              CONTINUE
           </button>
     </div>
  ); 
} 

export function CardError() {
  return (
    <div className="card-error-body">
        <div className="img-error-img">
           <img src={atentionIcn} alt="" />
        </div> 
        <div className="text-error">
           <h2 className = "error-text"> 
            Warning!
           </h2> 
           <p className= "simple-text" >
             An error has occured while creating an error report. 
           </p>
        </div> 
        <button className= "button-card">
          CLOSE
        </button>
    </div>
  ); 
} 

export  function CardAlert({img}: {img:string})  {
  return (
     <div className="card-alert-body">
        <div className="img-alert">
           <img src={img} alt="" />
        </div> 
        <div className="text-alert">
           <h2>Awesome!</h2>
            <p>You're ready to proced using CakeHR.</p>
        </div> 
        <ButtonPourple props = "Start CakeHR"></ButtonPourple>
      </div>  
  ); 

} 

export function CardAproved({img} :{img:string}) {
  return ( 
    <div className="card-body-aproved"> 
    <div className="img-aproved">
       <img src={img} alt="" /> 
    </div>  
    <div className="text-aproved">
       <h2 className = "title-card-aproved">Thank you</h2> 
       <p className = "simple-text-aproved">We just sent your confirmation e-mail. Check out your inbox </p>
    </div>
      <ButtonDefault text = "CLOSE"></ButtonDefault>
    </div>
  ); 
}