import React from "react";
import Navigation from "Navigation";
import Card from "Card";

export default function Website(props){
    return (<div>
        <Navigation></Navigation>
        {props.map( (value,i) => {
            <Card key={i} name={value.name} url={props.imgUrl} description={description}/>
        })}
        <footer>Copyright by Łukasz A</footer>
    </div>);
}