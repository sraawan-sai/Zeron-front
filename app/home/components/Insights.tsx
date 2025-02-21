import "@/styles/stars.css";

import Heading from "@/components/Layout/Heading";
import { InsightData } from "@/public/data/insightData";
import Image from "next/image";

const Insights = () => {
  return (
    <div className="flex flex-col items-center justify-center  mx-auto gap-16 px-4 py-20 overflow-hidden">
      <Heading
        title="Decoding the Data Universe into Clear"
        subtitle="Bright Insights"
        description="In the vast cosmos of scattered data, Zeron is your gravitational force—pulling in chaos, quantifying risks, automating compliance, and transforming raw data into clear, actionable insights."
        descWidth="max-w-[800px]"
      />
      <div className="w-full max-w-[600px] h-full max-h-[800px] relative">
        <div className="absolute w-full min-h-screen bottom-0 lg:-left-[100%]  clip-trap translate-y-[90%] bg-gradient-to-t from-[#0A0118] to-[#0A0118]/40 -z-1" />
        <div className="absolute w-full min-h-screen bottom-0 lg:-left-[100%]  clip-trap translate-y-[90%] -z-2">
          <section className="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </section>
        </div>
        <video
          src="/video/insights.mp4"
          autoPlay={true}
          muted
          loop
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mt-20 inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {InsightData.map((insight, index) => (
          <div
            key={index}
            className="group w-full max-w-[400px] min-h-[300px] rounded-[16px] flex flex-col justify-between relative px-4 pt-3 pb-6 bg-[#0A0118]"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+3px)] h-[calc(100%+3px)] rounded-[16px] -z-1 group-hover:bg-gradient-to-r from-[#1C76FD]/30 to-[#5721F0] transition-all duration-400" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+3px)] h-[calc(100%+3px)] rounded-[16px] -z-1 purplebg" />
            <div className="w-full h-full min-h-[150px] relative ">
              <Image
                src="/images/gridlines.png"
                alt=""
                fill={true}
                className="object-center object-cover"
              />
            </div>
            <div className="px-4 flex flex-col">
              <p className={`font-medium text-[1.125rem] tracking-[-0.36px]`}>
                {insight.title}
              </p>
              <p className={`text-[#9B96B0] tracking-[-0.16px]`}>
                {insight.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
