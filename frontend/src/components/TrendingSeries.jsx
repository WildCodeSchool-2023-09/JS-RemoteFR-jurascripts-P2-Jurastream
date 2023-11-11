import React, { useState } from "react";
import axios from "axios";
import CarouselSeries from "./CarouselSeries";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

function TrendingSeries() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}&include_adult=false`
      );
      setTrending(response.data.results);
    } catch (error) {
      console.error("Error fetching all", error);
    }
  };

  if (trending.length === 0) {
    fetchTrending();
  }

  return (
    <div>
      <h2>Trending</h2>
      <CarouselSeries series={trending} />
    </div>
  );
}

export default TrendingSeries;
