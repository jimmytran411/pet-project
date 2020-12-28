/* eslint-disable no-unused-vars */
import React ,{useState, useEffect} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';


const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed","",breeds);

    useEffect( () => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then( ({breeds : fetchBreeds}) => {
            const breedStrings = fetchBreeds.map( ({name}) => name);
            setBreeds(breedStrings); 
        }, console.error);
    }, [animal, setBreed, setBreeds]);

    return(
        <div className="research-params">
            <form>
                <label htmlFor="location">Location
                <input
                id="location"
                value={location}
                placeholder="Location"
                onChange={e => setLocation(e.target.value)}></input></label>
                <button>Submit</button>
            </form>
            <AnimalDropdown />
            <BreedDropdown />
        </div>
    );
}

export default SearchParams;