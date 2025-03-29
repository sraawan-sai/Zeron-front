'use client';
import GradientButton from "@/components/Buttons/GradientButton";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "CALL US",
    value: "(+91) 8169242602",
  },
  {
    title: "OUR OFFICE",
    value: "Mumbai, India",
  },
  {
    title: "DROP US A LINE",
    value: "info@zeron.one",
  },
];

const formFields = [
  {
    label: "Your Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    label: "Your Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Your Message",
    type: "textarea",
    placeholder: "Type your message here...",
    required: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full flex relative items-center pt-38 xs:pt-48 md:pt-34">
      <Image
        src="/images/bg50.png"
        alt=""
        fill={true}
        className="object-top object-cover opacity-300 brightness-200 -z-5"
      />
      <CustomSection className="py-10">
        <div className="xl:px-25 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 xl:gap-29">

          {/* Left Section - Contact Info */}
          <motion.div
            className="w-full max-w-fit flex flex-col gap-25"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-col gap-4">
              <p className="text-[2rem] leading-[130%]">Connect with Us—Securely</p>
              <div className="max-w-[420px]">
                <p className="text-[1.125rem] leading-[160%] text-white/60">
                  Have questions, need support, or looking for a demo? Reach out
                  and let’s build a stronger cyber defense together.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-7.5">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-7.5">
                  <div className="backdrop-blur-[30%] px-4 py-5 w-full max-w-[360px] flex flex-col gap-3.5 rounded-[16px] bg-[#19133F]/10">
                    <p className="text-white/60 font-medium leading-[120%] tracking-[-3%]">
                      {info.title}
                    </p>
                    <p className="text-[1.5rem] leading-[130%] tracking-[-2%] flex items-center gap-2">
                      {info.value}
                      {info.title === "OUR OFFICE" && (
                        <Image
                          src="/images/contacticon.png"
                          alt="Location Icon"
                          width={36}
                          height={36}
                        />
                      )}
                    </p>
                  </div>
                  {index < contactInfo.length - 1 && (
                    <div className="w-full max-w-[360px] h-[1px] bg-[#403B60]"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Form and Mobile Cards */}
          <motion.div
            className="w-full flex flex-col items-center justify-center gap-25 lg:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="backdrop-blur-[30%] px-4 md:px-17.5 py-15 w-full max-w-[670px] flex flex-col gap-3.5 rounded-[20px] bg-[#19133F]/60">
              <h3 className="text-[2rem] leading-[130%] tracking-[-2%]">
                Drop us a message, and we’ll get back to you.
              </h3>
              <form className="mt-8.5 flex flex-col gap-7.5">
                {formFields.map((field, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <label>
                      {field.label}
                      {field.required && (
                        <span className="text-[#F23435]">*</span>
                      )}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        required={field.required}
                        aria-label={field.label}
                        name={field.label.toLowerCase().replace(" ", "-")}
                        placeholder={field.placeholder}
                        className="w-full border-b border-white/10 px-5 py-[6px] min-h-[110px] focus:outline-none"
                      />
                    ) : (
                      <input
                        required={field.required}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border-b border-white/10 px-5 py-[6px] focus:outline-none"
                      />
                    )}
                  </div>
                ))}
                <div>
                  <GradientButton
                    text="Send Message"
                    className="px-4.5 py-2.5 text-[0.875rem] font-medium rounded-md cursor-pointer bg-linear-to-r from-[#1C76FD] from-[-7%] to-[#5721F0]"
                  />
                </div>
              </form>
            </div>

            {/* Mobile Cards */}
            <motion.div
              className="lg:hidden grid gird-cols-1 md:grid-cols-3 gap-7.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-7.5">
                  <div className="backdrop-blur-[30%] px-4 py-5 w-full max-w-[360px] flex flex-col gap-3.5 rounded-[16px] bg-[#19133F]/50">
                    <p className="text-white/60 font-medium leading-[120%] tracking-[-3%]">
                      {info.title}
                    </p>
                    <p className="text-[1.5rem] leading-[130%] tracking-[-2%] flex items-center gap-2">
                      {info.value}
                      {info.title === "OUR OFFICE" && (
                        <Image
                          src="/images/contacticon.png"
                          alt="Location Icon"
                          width={16}
                          height={16}
                        />
                      )}
                    </p>
                  </div>
                  {index < contactInfo.length - 1 && (
                    <div className="block md:hidden w-full max-w-[360px] h-[1px] bg-[#403B60]"></div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </CustomSection>
    </div>
  );
};

export default ContactUs;
