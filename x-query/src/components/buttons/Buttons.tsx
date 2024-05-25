import "./assets/css/Buttons.css"
export function ButtonPourple ({props} : {props:string}) {
  return (
    <button className= "btn-pourple">{props}</button>
  );   
} 

export function ButtonDefault ({text}:{text:string}) {
    return (
        <button className ="defaultButton">{text}</button>
    ); 
}