import React, { useEffect, useState } from "react";

const Beers = () => {

    const [beers, setBeers] = useState();

    useEffect(()=> {
        fetch('https://api.punkapi.com/v2/beers')
        .then(r => r.json())
        .then(data => setBeers(data))
    }, [])

    return (
        
        <tbody>
            {beers && beers.map((beer) => (
            <tr key={beer.name}>
                <th scope="row">{beer.id}</th>
                <td>{beer.name}</td>
                <td>{beer.description}</td>
                <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
            </tr>
            ))}
        </tbody>
    );
}

export default Beers;
