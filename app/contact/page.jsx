"use client";

import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorProvider";
import { motion } from "framer-motion";
import Form from "@/components/Form";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1  flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center">Contact Info</h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-star gap-12">
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="" />
                  {/* El accesorio fill permite que el tamaño de su imagen se ajuste a su elemento principal. */}
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">
                    123/45 Elm St, Suite 800 <br />
                    Los Angeles, CA 90012
                  </p>
                </div>
              </div>
              {/* End Item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt="" />
                  {/* El accesorio fill permite que el tamaño de su imagen se ajuste a su elemento principal. */}
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div>
                    <p className="pt-1 flex-1">Phone: +99(0) 999 333 667</p>
                    <p className="">Fax: +99(0) 999 322 678</p>
                  </div>
                </div>
              </div>
              {/* End Item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt="" />
                  {/* El accesorio fill permite que el tamaño de su imagen se ajuste a su elemento principal. */}
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email Address</h4>
                  <div className="flex flex-col gap-1">
                    <p>info@serene.com</p>
                    <p>support@serene.com</p>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1"
          >
            <div className=" w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
