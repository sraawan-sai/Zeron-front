import Link from "next/link";
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

const Form = () => {
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
    <div className="flex flex-col items-center justify-center gap-[34px] px-4 md:px-16 w-full max-w-[832px] h-[894px] bg-[rgba(25,19,63,0.5)] backdrop-blur-[16px] rounded-[20px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[30px] w-full max-w-[692px]"
      >
        {textFields.map(({ label, name }, index) => (
          <div key={index} className="flex flex-col gap-5">
            <label className="text-white">
              {label}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name={name}
              value={formData[name] as string}
              onChange={handleChange}
              placeholder={`Enter your ${label}`}
              className="px-2 py-1.5 w-full bg-transparent placeholder-white/60 border-b border-white/20 outline-none"
              required
            />
          </div>
        ))}

        <div className="flex items-start gap-2 text-white">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-[1px] border border-[#767676] rounded-[2.5px] cursor-pointer"
              required
            />
            <p className="text-[0.875rem] leading-[17.5px] max-w-[480px]">
              I understand and agree that my personal data will be collected and
              processed according to the{" "}
              <Link href="#" className="text-[#0F6CBD] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </label>
        </div>

        <button
          type="submit"
          className="w-[144px] h-[48px] bg-gradient-to-r from-[#1C76FD] to-[#5721F0] rounded-[8px] text-white text-[16px] font-medium flex justify-center items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
