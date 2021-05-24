import React, { useEffect, useState } from 'react';

import citiesFromJson from '../../../../Utils/Cities/cities.json';
import SelectTemplate from './SelectTemplate';

const ContainerCitySelect = (props) => {

    let [bigCities, setBigCities] = useState(null);
    
    let maxPopulationCity = {
        population: 0
    };

    let filterBigCities = (cities) => {
        return cities.filter((elem)=>{
            return elem.population > 50000;
        })
    }

    let sortCities = (cities) => {

        let resultCities;

        //find max population city
        maxPopulationCity = {
                population: 0
        };
        for(let elem of cities){
            if(Number(elem.population) > Number(maxPopulationCity.population)){
                maxPopulationCity = {...elem}
            }
        }

        //remove max population citi from arr cities
        resultCities = cities.filter((elem)=>{
            return elem.city != maxPopulationCity.city;
        })
        //sorting citites to A-Z
        resultCities.sort((a, b)=>{
            return a.city - b.city;
        })
        //add max population city to begin arr
        resultCities.unshift(maxPopulationCity);

        return resultCities;
    }

    useEffect(()=>{
        let cities = {}; 
        cities = filterBigCities(citiesFromJson);
        cities = sortCities(cities);

        setBigCities([...cities]);
        // setBigCities(sortCities(bigCities));
        
    }, [])

    return (
        <SelectTemplate data={bigCities} {...props}/>
    );
};

export default ContainerCitySelect;