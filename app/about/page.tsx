import React from "react";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Head>
        <title>About Me</title>
      </Head>
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          nec eros vel consequat. Cras varius est in lectus rutrum, at
          sollicitudin elit tempor. Aliquam id nulla vitae libero iaculis
          malesuada. Duis posuere augue ut diam feugiat, at fermentum nunc
          congue. Nullam viverra ante sit amet dolor lacinia, vel vehicula dui
          congue. Vivamus rhoncus odio nec libero aliquam vestibulum.
        </p>
        <p className="text-lg">
          In nec tincidunt magna. Praesent nec ultrices purus, in tincidunt
          elit. Nulla facilisi. Sed sit amet semper velit. Sed sed suscipit
          lectus. Fusce eget magna a nisi consequat aliquet. Nullam ornare
          auctor ipsum, eget consequat ligula malesuada vel.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
