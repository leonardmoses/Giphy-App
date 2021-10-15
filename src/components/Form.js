import React from "react";

const Form = (props) => {
  // 1. State to hold the data of our form
  const [formData, setFormData] = React.useState({
    searchTerm: "",
  });

  // 2. handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // 2a. use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // 3. prevent page from refreshing on form submission
    event.preventDefault();
    // 3a. pass the search term to giphysearch prop, which is apps getMovie function
    props.Giphysearch(formData.searchTerm);
  };
  

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

// We must export the component to use it in other files
export default Form;