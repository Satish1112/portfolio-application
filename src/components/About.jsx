import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          aut quo odit laborum, esse temporibus quam error repudiandae, nostrum
          magnam dignissimos expedita possimus earum necessitatibus. Voluptates
          itaque dolorem officiis quidem. Et expedita eligendi, amet pariatur
          repellendus animi harum vero dolor, illum deserunt mollitia repellat
          nesciunt rem autem quisquam a numquam.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, labore
          saepe adipisci eaque quos corporis voluptas ducimus eum, aut quae
          harum mollitia libero illum eveniet quas atque! Deserunt consequatur,
          corporis voluptas hic itaque perspiciatis. Pariatur quod fugit
          assumenda blanditiis, rerum repellat natus cumque reiciendis
          distinctio in qui incidunt, officia quasi!
        </p>
      </div>
    </div>
  );
}

export default About;
