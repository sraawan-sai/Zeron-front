import React, { useState } from "react";

type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  country: string;
  agree: boolean;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const textFields: { label: string; name: keyof FormDataType }[] = [
    { label: "Full Name", name: "fullName" },
    { label: "Email", name: "email" },
    { label: "Phone Number", name: "phone" },
    { label: "Company", name: "company" },
    { label: "Job Title", name: "jobTitle" },
    { label: "Country", name: "country" },
  ];

  return (
    <section className="relative w-full min-h-[1279px] flex justify-between items-center bg-[#0A0118] -mb-[calc(50%-597px+150.77px)] md:mb-0">
      <div
        className="absolute w-full min-h-[1194px] top-[calc(50%-597px+150.77px)] bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/images/am-form.png)",
          backgroundBlendMode: "plus-lighter",
        }}
      ></div>
      <div className="px-4 flex flex-col items-center gap-[61px] w-full min-h-[1079px] z-10">
        <div className="w-full max-w-[1050px]">
          <h1 className="text-white text-[3rem] leading-[130%] text-center">
            Uncover Hidden Threats with Attack Surface Intelligence
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-[34px] px-4 md:px-16 w-full max-w-[832px] h-[894px] bg-[rgba(25,19,63,0.5)] backdrop-blur-[16px] rounded-[20px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[30px] w-full max-w-[692px]"
          >
            {textFields.map(({ label, name }, index) => (
              <div key={index} className="flex flex-col gap-[20px]">
                <label className="text-white text-[16px]">
                  {label}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name={name}
                  value={formData[name] as string}
                  onChange={handleChange}
                  placeholder={`Enter your ${label}`}
                  className="w-full h-[32px] bg-transparent placeholder-white/60 border-b border-white/25 outline-none"
                  required
                />
              </div>
            ))}

            <div className="flex items-start gap-2 text-white">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-[14px] h-[14px] border border-[#767676] rounded-[2.5px]"
                required
              />
              <p className="text-[14px]">
                I understand and agree that my personal data will be collected
                and processed according to the{" "}
                <a href="/privacy-policy" className="text-[#0F6CBD] underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-[144px] h-[48px] bg-gradient-to-r from-[#1C76FD] to-[#5721F0] rounded-[8px] text-white text-[16px] font-medium flex justify-center items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
