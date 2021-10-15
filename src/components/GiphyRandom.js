import React from "react";


// You can also destructure your props directly from the parameter list
const GiphyRandom = ( props ) => {
  //The component must return some JSX
    const {RandomGiphy} = props;
            
            const loaded = () => {
                return (
                    <div>
                        <h1>{RandomGiphy.data.title}</h1>
                        <img src={RandomGiphy.data.image_url} alt="Giphy" />
                    </div>
                )
            }

            const loading = () => {
                return <h1>No Giphy To Display</h1>
            }
    
    return RandomGiphy ? loaded() : loading();
}
    
export default GiphyRandom;