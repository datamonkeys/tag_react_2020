// React Imports
import React from "react";

// Components
import Display from "../../components/Display";

// Styles
import "./styles.scss";

function Favorites(props) {
  const { favorites: beers, handleFavorites } = props;
  return (
    <>
      <Display beers={beers} handleFavorites={handleFavorites} />
    </>
  );
}

export default Favorites;
