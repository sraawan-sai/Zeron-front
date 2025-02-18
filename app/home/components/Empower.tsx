import Heading from "@/components/Layout/Heading";

const Empower = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto gap-16 px-4 py-20">
      <Heading
        title="Empowering Decisions With Zin Ai"
        subtitle="Quantifying Cyber Risks Across Your Digital Galaxy"
        description="Navigate the data cosmos, uncover financial risks, and turn insight into action.
Let me know if you'd like further tweaks!"
        descWidth="max-w-[720px]"
      />
      <div className="w-full max-w-[800px] h-full max-h-[800px]">
        <video
          src="/video/newzin.mp4"
          autoPlay={true}
          muted
          loop
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Empower;
