import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import '../../index.css';

const Home = (props) => {
    const [parkAreas, setParkAreas] = useState([]);

    const getAllParkAreas = () => {
        return ApiManager.getAllParkAreas().then(parksFromApi => {
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
                {parkAreas.map(area => 
                    <li key={area.id} area={area} {...props}>
                        {area.name} -- {area.theme}
                        <ul>
                            {area.attractions.map(attraction => 
                                <li key={attraction.name} attraction={attraction} {...props}>
                                    {attraction.name}
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Home;