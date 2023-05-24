import React, { useEffect, useState,useRef } from 'react'
import Youtube from 'react-youtube'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './RowCards.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'


function RowCards(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
const videoRef = useRef(null)


  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      // alert('Network Error')
    })
  }, [props])
  const opts = {
    height: '480',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
      console.log("movie id working"+id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        // console.log("response+data"+response.data); 
         if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
         }else{
          console.log('Trailer is not available')
         }

      }) 

  }

  const handleClose = () => {
    setUrlId('')
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => 

          <img  key={obj.id} onClick={()=>handleMovie(obj.id)} alt='poster' className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} />

        )}

      </div >
      {urlId && (
        <div className="video-container">
          <button className="close-button" onClick={handleClose}>
          <i class="float-right fa-solid fa-square-xmark"id='close-button'></i>
          
          </button>
          <Youtube videoId={urlId.key} opts={opts} ref={videoRef} />
          
        </div>
      )}
    </div>
  )
}

export default RowCards