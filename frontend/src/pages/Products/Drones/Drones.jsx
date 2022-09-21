import React from 'react';
import Card from '../../../components/Card/Card';

import img1 from'../../../images/drone1.jpg';
import img2 from'../../../images/drone2.jpg';
import img3 from'../../../images/drone3.jpg';

const Drones = () =>{
    return(
        <>
        <div style={{margin:'auto', display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <h1>Drones</h1>
        <div style={{display:'flex', justifyContent:'spaceAround', margin:'auto'}}>
            <Card img={img1}></Card>
            <Card img={img2}></Card>
            <Card img={img3}></Card>
            <Card img={img3}></Card>
        </div>
        </div>
        </>
        )
}


export default Drones;
