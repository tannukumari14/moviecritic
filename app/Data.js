
import React, { useState, useEffect } from "react";
import Movie_row from "./Movie_row.js";

const Data = () => {
  const [movies, setMovies] = useState([
    {id: 0,
      movieName: "Sanam Teri Kasam",
      movieYear: "2018",
      votes: 0,
      duration: "2H 31M",
      genre:"Love Story",
      image: "sanam.jpg",
      description:"This movie depend on love,this movie one girl she is very inocent and his friend one boy ,he support her girl friend every time ." 
    },
    {
      id: 1,
      movieName: "Dear ZIndagi",
      movieYear: "2016",
      votes: 0,
      duration: "2H 31M",
      genre: "Drama,Romance",
      image: "Dear_Zindagi.jpg",
      description:"Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life." 
      },{
      
      id:2,
      movieName:" Brave",
      movieYear:"2012",
      votes:0,
      duration:"1h 33msec",
      genre:"Adventuoos,comedy",
      image:"brave.jpg",
      description:"Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "
               
},{
  id:3,
       movieName:"Moana",
       movieYear:"2016",
       votes:0,
       duration:"1h 47sec",
       genre:"Adventurous,Comedy",
       image:"moana.jpg",
       description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:4,
        movieName:"Mulan",
        movieYear:"1998",
        duration:"1h 27m",
        votes:0,
        genre:"Adventurous,Comedy",
        image:"mulan.jpeg",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:5,
        movieName:"He Named Me Malala",
        movieYear:"2015",
        duration:"1h 20m",
        votes:0,
        genre:"Biography, Documentary",
        image:"malala.jpeg",
        description:"A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
},{
id:6,
        movieName:"Soul Surfer",
        movieYear:"2011",
        duration:"1h 52minsec",
        votes:0,
        genre:"Drama ,Biography,Family",
        image:"safar.jpeg",
        description:"Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
},{
id:7,
        movieName:"Bend It Like Beckham",
        movieYear:"2016",
        duration:"1h 47sec",
        votes:0,
        genre:"Adventurous,Comedy",
        image:"beckham.jpg",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:8,
        movieName:"Into The Wild",
        movieYear:"2016",
        duration:"1h 47sec",
        votes:0,
        genre:"Adventurous,Comedy",
        image:"into the world.jpeg",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
		id:9,
        movieName:"The Pursuit Of Happyness",
        movieYear:"2006",
        duration:"1h 57m",
        votes:0,
        genre:"Drama,Biography",
        image:"happiness.jpeg",
        description:"A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
}

    // Rest of the movie objects...
  ]);

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes - 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((item) => item.id !== id));
  };

  useEffect(() => {
    sortMovies();
  }, [movies]); // Update the sorting whenever the movies state changes

  const sortMovies = () => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <div>
      {movies.map((item) => (
        <Movie_row
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onLike={handleLike}
          onDislike={handleDislike}
         />
      ))}
    </div>
  );
}

export default Data;


