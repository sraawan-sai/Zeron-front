import Form from "@/components/Models/Form";

type ContactFormProps = {
  title: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  return (
    <section className="relative w-full flex justify-between items-center bg-[url('/images/am-form.png')] bg-cover bg-center bg-no-repeat py-20">
      <div className="px-4 flex flex-col items-center gap-15 w-full z-10">
        <div className="w-full max-w-[1050px]">
          <h1 className="text-white text-[3rem] leading-[130%] text-center">
            {title}
          </h1>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactForm;
