import React, { useEffect } from 'react';

import citiesFromJson from '../../../../Utils/Cities/cities.json';
import SelectTemplate from './SelectTemplate';

const ContainerCitySelect = (props) => {

    let bigCities; 
    let maxPopulationCity;

    let filterBigCities = (cities) => {
        return cities.filter((elem)=>{
            return elem.population > 50000;
        })
    }

    useEffect(()=>{
        bigCities = filterBigCities(citiesFromJson);

        maxPopulationCity = {
            population: 0
        };

        for(let elem of bigCities){
            if(Number(elem.population) > Number(maxPopulationCity.population)){
                maxPopulationCity = {...elem}
                console.log(2);
            }
            
        }
        console.log(maxPopulationCity);

        console.log(bigCities);
    }, [])

    
    
    return (
        <SelectTemplate data={bigCities} {...props}/>
    );
};

export default ContainerCitySelect;