import React from "react";
import ImageSlider from "./ImageSlider";

export default function App() {
  return (
    <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10" />
  );
}
