import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import Sliders from "../components/Sliders";

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto  pt-10 flex flex-col justify-center items-center">
        <p className="font-light uppercase tracking-widest mt-5 mb-1 text-sm text-teal-700">
          Reviews | Testimonials
        </p>
        <h1 className="font-bold tracking-widest  uppercase text-6xl text-teal-900">
          Reviews
        </h1>
      </div>
      <Sliders />
    </>
  );
};

export default Home;
