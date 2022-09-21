import React from 'react';
import Card from '../../../components/Card/Card';

import img1 from'../../../images/laptop1.jpg';
import img2 from'../../../images/laptop2.jpg';
import img3 from'../../../images/laptop3.jpg';
import img4 from'../../../images/laptop4.jpg';

const Laptops = () =>{
    return(
        <>
        <div style={{margin:'auto', display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <h1>Laptops</h1>
        <div style={{display:'flex', justifyContent:'spaceAround', margin:'auto'}}>
            <Card img={img1}></Card>
            <Card img={img2}></Card>
            <Card img={img3}></Card>
            <Card img={img4}></Card>
        </div>
        </div>
        </>
        )
}

export default Laptops;
