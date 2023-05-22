import React from "react";
import './style.scss';

function Home(props){
    return(
        <div className='home'>
            <div className="textoMain">
                <h1>{props.titulo}</h1>
            </div>
        </div>
    );
}

export default Home;
