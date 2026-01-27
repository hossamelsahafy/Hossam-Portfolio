"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20) 01501083054",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hossamelsa7afy54@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Egypt, Damietta",
  },
];

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const Service = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE;
  const Template = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE;
  const Public = process.env.NEXT_PUBLIC_EMAIL_JS_USER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    // Validate phone number

    setErrorMessage("");

    // Send email via EmailJS
    emailjs.send(Service, Template, { ...formData }, Public).then(
      (response) => {
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);

        // Reset form after success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      },
      (err) => {
        setErrorMessage("Failed to send the message. Please try again.");
        setTimeout(() => setErrorMessage(""), 5000);
      }
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="shadow  xl:w-[54%]  order-2 xl:order-none">
            <motion.form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-6 p-10 relative overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                borderImageSource:
                  "linear-gradient(90deg, #005f4f, #004080, #6f004f, #004080, #005f4f)",
                borderImageSlice: 1,
              }}
              animate={{
                borderImageSource: [
                  "linear-gradient(270deg, #ff00cc, #3333ff, #00ffcc)",
                  "linear-gradient(270deg, #00ffcc, #ff00cc, #3333ff)",
                ],
              }}
              transition={{
                borderImageSource: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <h3 className="text-4xl text-accent z-10">Let's Work Together</h3>
              <p className="z-10">
                Whether you have a question, want to collaborate on a project,
                or just want to say hi, feel free to drop me a message. I’d love
                to hear from you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                name="service"
                value={formData.service}
                onValueChange={(value) => handleServiceChange(value)}
                required
              >
                <SelectTrigger className="w-full z-10">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend">
                      Front-end Development
                    </SelectItem>
                    <SelectItem value="backend">
                      Back-end Development
                    </SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="deployment">Deployment</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px] z-10"
                placeholder="Type your Message here."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <motion.button
                className="px-6 py-3 text-sm rounded-full font-semibold text-white shadow-md relative overflow-hidden max-w-[200px] self-start"
                style={{
                  background:
                    "linear-gradient(90deg, #005f4f, #004080, #6f004f, #004080, #005f4f)",
                  backgroundSize: "500% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.3)",
                }}
              >
                Send Message
              </motion.button>

              {/* Success Message */}
              {successMessage && (
                <motion.div
                  className="mt-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center font-medium">{successMessage}</p>
                </motion.div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <motion.div
                  className="mt-4 p-4 bg-red-100 border border-red-300 text-red-800 rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center font-medium">{errorMessage}</p>
                </motion.div>
              )}
            </motion.form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 ">
              {infos.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2323] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1 ">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
