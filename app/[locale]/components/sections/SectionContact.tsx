"use client";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useTranslations } from "next-intl";

const inputs = [
  {
    id: 1,
    name: "first_name",
    label: "First name",
    type: "text",
    pattern: "",
    placeholder: "Arthur",
    required: true,
    error: "invalid first-name",
    styleGrid: "col-span-4 lg:col-span-2 flex flex-col",
    styleComponent:
      "w-full text-left rounded-md border-0 py-3 px-4 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6",
  },
  {
    id: 2,
    name: "last_name",
    label: "Last name",
    type: "text",
    pattern: "",
    placeholder: "Vicente",
    required: true,
    error: "invalid first-name",
    styleGrid: "col-span-4 lg:col-span-2 flex flex-col",
    styleComponent:
      "w-full text-left rounded-md border-0 py-3 px-4 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6",
  },
  {
    id: 3,
    name: "email",
    label: "E-mail",
    type: "email",
    pattern: "",
    placeholder: "exemple@email.com",
    required: true,
    error: "invalid email",
    styleGrid: "col-span-4 lg:col-span-2 flex flex-col",
    styleComponent:
      "w-full text-left rounded-md border-0 py-3 px-4 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6",
  },
  {
    id: 4,
    name: "phone_number",
    label: "Phone number",
    type: "tel", // Alterando o tipo para "tel"
    pattern: "[0-9]{0,12}", // Regex que aceita de 0 a 12 números
    placeholder: "(xx) x xxxx-xxxx",
    maxLength: 12, // Limitando o número máximo de caracteres a 12
    minLength: 11,
    required: true,
    error: "invalid phone-number",
    styleGrid: "col-span-4 lg:col-span-2 flex flex-col",
    styleComponent:
      "w-full text-left rounded-md border-0 py-3 px-4 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6",
  },
  {
    id: 5,
    name: "select_subject",
    label: "Choose a topic",
    type: "select",
    options: {
      style: "py-3 px-4",
      options: [
        { value: "parceria", option: "Parceria" },
        { value: "cliente", option: "Cliente" },
        { value: "fornecedor", option: "Fornecedor" },
        { value: "outros", option: "Outros" },
      ],
    },
    pattern: "",
    styleGrid: "col-span-4 flex flex-col",
    styleComponent:
      "w-full text-left rounded-md border-0 py-3 px-4 outline-none shadow-sm ring-1 ring-inset ring-gray-300 bg-white focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6 max-w-[300px]",
  },
  {
    id: 6,
    name: "textarea",
    label: "Message",
    type: "textarea",
    placeholder:
      "Olá, me chamo Arthur Vicente e gostaria de fazer uma parceria. Aguardo retorno.",
    required: true,
    styleGrid: "col-span-4 flex flex-col",
    styleComponent:
      "outline-none p-4 resize-none rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 bg-white focus:ring-2 focus:ring-inset focus:ring-[#5b655a] sm:text-sm sm:leading-6",
  },
  {
    id: 7,
    name: "button",
    label: "Submit",
    type: "button",
    styleGrid: "col-span-4",
    styleComponent: "py-3 px-4 bg-black text-white outline-none",
  },
];

const SectionContact = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    select_subject: "",
    textarea: "",
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    // alert(`firstname: ${formData.first_name} | lastname: ${formData.last_name}  |  email: ${formData.email} |  phone: ${formData.phone_number}  |  subject: ${formData.select_subject}  | message: ${formData.textarea}`);
  };

  return (
    <div className="w-full container pt-20" id="contact">
      <div className="w-full h-[100vh] grid grid-cols-6 grid-rows-7 gap-4">
        <div className="col-span-6 row-span-1 flex justify-center items-center flex-col p-4 mb-5">
          <h2 className="text-4xl uppercase w-full text-center">
            {t("title")}
          </h2>
          {/* <p className="w-full text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <div className="col-span-6 lg:col-span-3 row-span-3 lg:row-span-6">
          <form
            className="w-full h-full grid grid-cols-4 gap-4"
            onSubmit={handleSubmit}
          >
            {inputs.map((data, index) => {
              return (
                <div key={index} className={data.styleGrid}>
                  {data.type != "button" && (
                    <label
                      htmlFor={data.name}
                      className="w-full text-left pb-2 text-gray-900 text-sm font-semibold leading-6"
                    >
                      {data.label}
                    </label>
                  )}
                  {data.type === "textarea" ? (
                    <textarea
                      name={data.name}
                      id={data.name}
                      placeholder={data.placeholder}
                      onChange={handleInputChange}
                      className={data.styleComponent}
                      required
                    ></textarea>
                  ) : data.type === "select" ? (
                    <select
                      name={data.name}
                      id={data.name}
                      className={data.styleComponent}
                      onChange={handleInputChange}
                    >
                      {data.options?.options.map((node, index) => {
                        return (
                          <option
                            key={index}
                            value={node.value}
                            className={data.options.style}
                          >
                            {node.option}
                          </option>
                        );
                      })}
                    </select>
                  ) : data.type === "button" ? (
                    <button name={data.name} className={data.styleComponent}>
                      {data.label}
                    </button>
                  ) : (
                    <>
                      <input
                        type={data.type}
                        id={data.name}
                        // pattern={data.pattern}
                        placeholder={data.placeholder}
                        onChange={handleInputChange}
                        maxLength={data.maxLength}
                        minLength={data.minLength}
                        className={data.styleComponent}
                        required
                      />
                    </>
                  )}
                </div>
              );
            })}
          </form>
        </div>
        <div className="col-span-6 lg:col-span-3 row-span-3 lg:row-span-6">
          <div className="w-full h-full grid grid-cols-2 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-1 lg:col-span-1 flex flex-col justify-start items-center">
              <FaPhone className="text-3xl"/>
              <h2 className="text-xl font-bold mb-3">Telefone</h2>
              <p className="pb-0 lg:pb-0">Atendemos das 08:00 às 18:00</p>
              <a href="tel:+5511940163239">(11) 9 9494-9494</a>
            </div>
            <div className="col-span-2 row-span-1 lg:col-span-1 flex flex-col justify-start items-center">
              <MdEmail className="text-3xl"/>
              <h2 className="text-xl font-bold mb-3">Email</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="mailto:seuemail@example.com">exemple@email.com</a>
            </div>
            <div className="col-span-2 row-span-1 lg:col-span-1 flex flex-col justify-start items-center">
              <h2 className="text-xl font-bold mb-3">Redes Sociais</h2>
              <ul>
                <li><a target="_blank" href="https://www.facebook.com/northkush"><span className="flex items-center mb-2 text-md"><FaFacebookSquare className="mr-2"/> facebook.com/northkush</span></a></li>
                <li><a target="_blank" href="https://www.instagram.com/northkush"><span className="flex items-center mb-2 text-md"><FaInstagramSquare className="mr-2"/> instagram.com/northkush </span></a></li>
                <li><a target="_blank" href="https://www.twitter.com/northkush"><span className="flex items-center mb-2 text-md"><FaTwitterSquare className="mr-2"/> twitter.com/northkush</span></a></li>
                <li><a target="_blank" href="https://wa.me/5511940163239?text=Olá,%20North%20Kush!"><span className="flex items-center mb-2 text-md"><FaWhatsappSquare className="mr-2"/> 11 99999 9999</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
