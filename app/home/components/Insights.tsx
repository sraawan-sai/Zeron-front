import Heading from "@/components/Layout/Heading";

const Insights = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-20">
      <Heading
        title="Decoding the Data Universe into Clear"
        subtitle="Bright Insights"
        description="In the vast cosmos of scattered data, Zeron is your gravitational force—pulling in chaos, quantifying risks, automating compliance, and transforming raw data into clear, actionable insights."
        descWidth="max-w-[800px]"
      />
      <div className="w-full max-w-[600px] h-full max-h-[800px]">
        <video
          src="/video/insights.mp4"
          autoPlay={true}
          muted
          loop
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Insights;
