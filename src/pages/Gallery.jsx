import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <div class="wrapper p-6">
      <div class="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg"
          class="w-full h-auto"
          alt="Image 1"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg"
          class="w-full h-auto"
          alt="Image 2"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
          class="w-full h-auto"
          alt="Image 3"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg"
          class="w-full h-auto"
          alt="Image 4"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"
          class="w-full h-auto"
          alt="Image 5"
        />
      </div>
    </div>
  );
};

export default Gallery;
