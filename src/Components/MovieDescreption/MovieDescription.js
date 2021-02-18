import React  from 'react'
import{useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieDescription.css'


const MovieDescription = ({movies,match}) => {
    
  
 const myFilm = movies.find(movie=> movie.id === Number(match.params.id ) )

let history=useHistory();
    return (
        <div >
            <div className="movieDesc">
                <h1>{myFilm.name}</h1>
                <p style={{width:'500px', fontSize:'20px'}}> {myFilm.description}</p>
                <Button variant="secondary"
                        style={{marginTop:'20px'}}  onClick={()=> history.push('/')}>
                Movies List!
                </Button>
            </div>

            <div >{myFilm.bande_annonce}</div>

   
        </div>
    )
}
export default MovieDescription