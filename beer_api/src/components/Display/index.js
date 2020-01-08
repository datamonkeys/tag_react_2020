// React imports
import React from "react";

// Components Import
import DisplayBeer from "../DisplayBeer";

// Styles
import "./styles.scss";

const renderBeers = (beers, props) => {
  const result = [];
  const { handleFavorites, favorites } = props;

  beers.forEach(beer => {
    const newBeerObj = { ...beer };
    const isfavorite = favorites && favorites.has(newBeerObj.id);

    if (isfavorite) {
      newBeerObj.favorite = true;
    }

    result.push(
      <DisplayBeer beer={newBeerObj} handleFavorites={handleFavorites} />
    );
  });

  // return all the beers objects inside the array
  return result;
};

function Display(props) {
    const { beers } = props;
    return <div className="beers">{renderBeers(beers, props)}</div>;
}

export default Display;
