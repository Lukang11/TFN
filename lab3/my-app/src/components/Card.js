import React from "react";
import Firefox from '../data/Firefox.jpg'
import Chrome from '../data/Chrome.jpg'
import IE from '../data/IE.png'

const img = [Firefox,Chrome,IE];

export default function Card(props){
    console.log(props);
    return (<div>
        {props.data.map((value,i)=>
            <div key={i} className={"class"+i}>
                <h3>{value.name}</h3>
                <img src={img[i]} width={300} height={300}></img><br></br>
                <span>{value.description}</span>
            </div>
        )}
    </div>);
}