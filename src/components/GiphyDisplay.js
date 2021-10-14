import React from "react";


// You can also destructure your props directly from the parameter list
const GiphyDisplay = ( props ) => {
  //The component must return some JSX
    const {Giphy} = props;

            const loaded = () => {
                return (
                    <div>
                        <h1>{Giphy.data[0].title}</h1>
                        <img src={Giphy.data[0].images.original.url} alt="Giphy" />
                        <h2>{Giphy.data[0].images.url}</h2>
                    </div>
                )
            }

            const loading = () => {
                return <h1>No Giphy To Display</h1>
            }
    
    return Giphy ? loaded() : loading();
}
    
export default GiphyDisplay;