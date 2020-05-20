import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import '../../index.css';

const Home = (props) => {
    const [parkAreas, setParkAreas] = useState([]);

    const getAllParkAreas = () => {
        return ApiManager.getAllParkAreas().then(parksFromApi => {
            console.log(parksFromApi)
            setParkAreas(parksFromApi)
        })
    };

    useEffect(() => {
        getAllParkAreas();
    }, []);

    return (
        <>
            <h2>Kennywood Park Areas:</h2>
            <ul>
                {parkAreas.map(area => <li key={area.id} area={area} {...props}>{area.name} -- {area.theme}</li>)}
            </ul>
        </>
    )
}

export default Home