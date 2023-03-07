import { Fragment } from "react";

import Rows from "../components/Rows";

export default function Home() {
  return (
    <Fragment>
      <div className="h-screen w-full font-">
        <div className="max-w-[1280px] mx-auto">
          {/* Heading  */}
          <section className="mt-20">
            <div>
              <h1 className="text-center text-[#111] text-8xl font-GTWalsheimProBold">
                Practice Grid, Flex and Postioning
              </h1>
              <p className="mt-10 text-center text-[#666] text-2xl font-GTWalsheimRegular">
                Below is an example to illustrate various css postioning
                techniques using TailwindCSS{" "}
              </p>
            </div>
          </section>

          {/* CSS Postioning Example  */}
          <section className="mt-40 mx-auto w-full h-full">
            <div className="w-[700px] mx-auto h-[700px] border border-[#ccc] rounded-lg">
              <div className="grid grid-cols-3 gap-4 h-full p-4">
                <div className="grid grid-rows-3 gap-y-4 ">
                  <div className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] rounded-lg hover:scale-105 shadow-lg transition-all ease-linear delay-75"></div>
                  <div className="bg-gradient-to-r from-[#ff1b6b] to-[#45caff] rounded-lg hover:scale-105 shadow-lg transition-all ease-linear delay-75"></div>
                  <div className="bg-gradient-to-r from-[#40c9ff] to-[#e81cff] rounded-lg hover:scale-105 shadow-lg transition-all ease-linear delay-75"></div>
                </div>
                <div className="grid grid-rows-2 gap-4 rounded-lg">
                  <div className="bg-gradient-to-r from-[#00ff87] to-[#60efff] rounded-lg hover:scale-105 shadow-lg transition-all ease-linear delay-75"></div>
                  <div className="bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] rounded-lg hover:scale-105 shadow-lg transition-all ease-linear delay-75"></div>
                </div>
                <div className="grid grid-cols-5 grid-rows-14 gap-2 rounded-lg">
                  <Rows />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
