import Form from "@/components/Models/Form";

const ContactForm = () => {
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
            Get in Touch - Strengthen Your <br /> Cyber Resilience
          </h1>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactForm;
