import React from "react";


// You can also destructure your props directly from the parameter list
const GiphyDisplay = ( props ) => {
  //The component must return some JSX
    const {Giphy} = props;
            
            
            const loaded = () => {
                let randomNum = Math.floor(Math.random() * Giphy.data.length)
                
                 
                return (
                    <div className="giphysearchcomp">
                        <h1>{Giphy.data[randomNum].title}</h1>
                        <img src={Giphy.data[randomNum].images.original.url} alt="Giphy" />
                    </div>
                )
            }

            const loading = () => {
                return <h1>No Giphy To Display</h1>
            }
    
    return Giphy ? loaded() : loading();
}
    
export default GiphyDisplay;