import React from "react";

const RandomForm = (props) => {
  // 1. State to hold the data of our form
  const [formData, setFormData] = React.useState({null: "",});

  // 2. handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // 2a. use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // 3. prevent page from refreshing on form submission
    event.preventDefault();
    // 3a. pass the search term to giphysearch prop, which is apps getMovie function
    props.Giphysearch(formData);
  };
  

  //The component must return some JSX
  return (
    <div>
      <button onClick={props.GiphyRandomForm}> Random Gif 👇</button>
    </div>
  );
};

// We must export the component to use it in other files
export default RandomForm;


