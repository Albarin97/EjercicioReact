import { useEffect, useState } from 'react';
import './Astros.css';
import Progress from './Progres.jsx'

const DATA_URL = 'http://api.open-notify.org/astros.json';

const Astro = ({ name, craft }) => {
    return (
            <div className="astro--container">
                <h2 className='astro--name'>{name}</h2>
                <p className='astro--station'>Space Station: {craft}</p>
            </div>
    )
}

const Astros = () => {
    const [astros, setAstros] = useState([])

    useEffect(() => {
        fetchAstros();
    }, [])

    const fetchAstros = () => {
        fetch(DATA_URL)
            .then(res => res.json())
            .then(data => setAstros(data.people))
            .catch(err => console.log(err));
    }

    //fetchAstros();

    return (
        <>
            <h2>Atros</h2>
            {
                astros.length !== 0
                ?
                astros.map((astro, index) => (
                    <Astro key={index} {...astro} />
                ))
                :
                <Progress/>
            }
        </>
    )
}

export default Astros;