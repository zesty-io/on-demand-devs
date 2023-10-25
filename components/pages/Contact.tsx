import React from "react";
import PageTitle from "../SectionTitle";
import ContactForm from "@/components/forms/ContactForm";

const Contact = ({ content }: any) => {
  return (
    <div className="w-full min-h-[100vh] bg-dark md:px-20 lg:px-[10%] px-4 flex flex-col relative md:py-10">
      <PageTitle
        title={content?.contact_page_title}
        description={content?.contact_page_description}
      />

      <ContactForm />
    </div>
  );
};

export default Contact;
