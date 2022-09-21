import React from 'react';
import Card from '../../../components/Card/Card';

import img1 from'../../../images/smartphone1.jpg';
import img2 from'../../../images/smartphone2.jpg';
import img3 from'../../../images/smarthpone3.jpg';

const Smartphones = () =>{
    return(
        <>
        <div style={{margin:'auto', display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <h1>Smartphones</h1>
        <div style={{display:'flex', justifyContent:'spaceAround', margin:'auto'}}>
            <Card img={img1}></Card>
            <Card img={img2}></Card>
            <Card img={img3}></Card>
        </div>
        </div>
        </>
        )
}

export default Smartphones;
