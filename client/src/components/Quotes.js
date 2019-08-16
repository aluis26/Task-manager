import React, { useState, useEffect } from "react";
// import axios from 'axios';

export default function Quotes(){
   let [quotes, setQuotes] = useState("");

async function fetchQuotes(){
  try{  
    const response = await fetch("https://favqs.com/api/qotd");
    const json = await response.json();
    setQuotes(json.quote);
} catch(err) {
    console.log(err);
  }
}


 useEffect(() => {
    fetchQuotes();
  }, []);

    return(
        <React.Fragment>
        <div className = "quotes">
       {quotes.body}
        </div>
        </React.Fragment>
    )
}

