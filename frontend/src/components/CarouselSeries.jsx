import PropTypes from "prop-types";
import { useState } from "react";
import SerieCard from "./Cards/SerieCard";
import "./Carrousel.scss";

function CarouselSeries({ series }) {
  const [serieIndex, setSerieIndex] = useState(0);

  const handleClickNext = () => {
    setSerieIndex((serieIndex + 1) % (series.length - 5));
  };

  const handleClickPrevious = () => {
    setSerieIndex((serieIndex - 1) % (series.length - 5));
  };

  if (series.length <= 0) {
    return <>pas d'image</>;
  }

  return (
    <div>
      <div className="media-list">
        <SerieCard serieId={series[serieIndex].id} />
        <SerieCard serieId={series[serieIndex + 1].id} />
        <SerieCard serieId={series[serieIndex + 2].id} />
        <SerieCard serieId={series[serieIndex + 3].id} />
        <SerieCard serieId={series[serieIndex + 4].id} />
      </div>
      <div>
        <button
          type="button"
          className="left-button"
          onClick={handleClickPrevious}
        >
          &lt;
        </button>
        <button
          type="button"
          className="right-button"
          onClick={handleClickNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

CarouselSeries.propTypes = {
  series: PropTypes.arrayOf.isRequired,
};

export default CarouselSeries;
