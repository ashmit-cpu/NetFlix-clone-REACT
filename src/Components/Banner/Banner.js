import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faPlus} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
        `).then((response)=>{
            console.log("banner"+response.data.results[0])
            setMovie(response.data.results[2])
        })
    },[])
    return (

        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}


         className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ?movie.name:""}</h1>
                <div className='banner-buttons'>
                    <button className='button'><FontAwesomeIcon icon={faPlay} className='faplay'/>Play</button>
                    <button className='button'><FontAwesomeIcon icon={faPlus} className='faplus'/>My lst</button>
                </div>
                <h1 className='description'>{movie ?movie.overview:""}</h1>
            </div>
            <div className='black-gradient'></div>
        </div>
    )
}

export default Banner
