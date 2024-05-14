import React from "react";

export default function VideoHeader() {
  return (
    <section className="relative header_area">
      <video
        src="/assets/bg-video.mp4"
        type="video/mp4"
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
      />

      <div
        id="home"
        className="header_hero bg-darkblue-color bg-[url('/assets/images/lightgradient.png')] bg-center bg-no-repeat h-screen justify-start relative z-10 overflow-hidden flex items-center"
      >
        <div className="container w-11/12 md:w-4/5">
          <h1 className="mb-6">
            Let's Create Powerful{" "}
            <span className="text-yellow">Digital Products</span> From Square
            One.
          </h1>
          <p className="text-white text-center p_under_heading2">
            Explore the right tech solution for your next tech project —
            leveraging execution-driven devs and modern tech stacks.
          </p>
        </div>
      </div>
    </section>
  );
}
