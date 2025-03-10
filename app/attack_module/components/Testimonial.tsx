import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center pt-[150px] w-full h-[772px] bg-[#0A0118]">
      {/* Heading */}
      <div className="flex justify-center items-center px-[253px] pb-[100px] w-full">
        <h2 className="text-white text-[48px] leading-[66px] text-center font-medium tracking-[-1px]">
          Mission-Proven: Cyber Success Stories & Measurable Impact
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative flex justify-center w-full">
        <div className="flex flex-col items-center gap-[50px] px-[20px] pt-[51px] pb-[20px] w-[852px] bg-[rgba(25,19,63,0.5)] backdrop-blur-[22.7px] rounded-[12px]">
          <p className="text-white text-[16px] leading-[24px] text-center max-w-[718px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <div className="border-t border-white/20 w-[812px] pt-[10px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[43px] h-[43px] rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(/image.png)' }}></div>
              <div>
                <p className="bg-gradient-to-r from-[#1C76FD] to-[#5721F0] bg-clip-text text-transparent text-[21px] leading-[27px] font-medium tracking-[-0.75px]">
                  Ajeesh Achuthan
                </p>
                <p className="text-[#A19EB0] text-[13.6px] leading-[20px]">
                  Co-Founder and CTO of Open
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left and Right blurred Cards */}
        <div className="absolute left-[-623px] flex flex-col items-center px-[20px] pt-[51px] pb-[20px] w-[852px] bg-[#19133F]/15 backdrop-blur-[22.7px] rounded-[12px] opacity-50">
          <p className="text-white text-[18px] leading-[28px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="absolute right-[-623px] flex flex-col items-center px-[20px] pt-[51px] pb-[20px] w-[852px] bg-[#19133F]/15 backdrop-blur-[22.7px] rounded-[12px] opacity-50">
          <p className="text-white text-[18px] leading-[28px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-[4px] mt-[30px]">
        <div className="w-[32px] h-[2px] bg-white rounded" />
        <div className="w-[32px] h-[2px] bg-white/30 rounded" />
        <div className="w-[32px] h-[2px] bg-white/30 rounded" />
      </div>
    </section>
  );
};

export default TestimonialsSection;