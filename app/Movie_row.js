"use client"
import Data from "./Data.js";
const Movie_row = ({item,onDelete,onLike,onDislike}) => {
    return (
        <div className='row1_movie_row'>
            <div className='image'>
            <img src={item.image} className="image"/>
            </div>

            <div className='Discription'>
                <h1>{item.movieName}</h1>
                <p>{item.movieYear + "|" + item.duration + "|" + item.genre}</p>
                <h>Description</h>
                <p>{item.description}</p>
                <div className ="action-row">
                	<img className ="like" src="like.png" onClick={()=>onLike(item.id)} />
						<div className="votes">{item.votes}</div>
					<img className="dislike" src="dislike.jpg" onClick={()=>onDislike(item.id)} />
              		<img className="delete"  src="delete.jpg"  onClick={()=>onDelete(item.id)} />
              	</div>

                
         	</div>
    
     	</div>
     	
           
             
               
         
       
    );
};

export default Movie_row;

