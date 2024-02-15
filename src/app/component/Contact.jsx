"use client";

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // Email
  const templateParams = {
    to_name: "Hassan",
    from_name: senderName,
    message: message,
  };

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .send(
        "service_z7l46yr",
        "template_dqx0m49",
        templateParams,
        "9U2cyyWfD5etMLRuS"
      )
      .then(
        (response) => {
          setLoading(false);
          setMessage("");
          setSenderName("");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div id="contact" className="pt-[10vh] px-2 sm:px-20 min-h-[90vh]">
      <h2 className="w-full h-[10vh] text-3xl sm:text-3xl md:text-4xl ">
        Contact:
      </h2>
      <div className="flex justify-between flex-wrap min-h-[60vh]">
        <div className=" w-full sm:w-[40%] flex items-center justify-center sm:justify-start">
          <div className="flex flex-col items-center justify-between sm:p-5 pt-10 pb-10 p-0  w-[90%] sm:w-[80%] h-[50vh] bg-green-600 rounded-lg ">
            <input
              onChange={(event) => setSenderName(event.target.value)}
              value={senderName}
              type="text"
              placeholder="Full Name"
              required
              className="w-[90%] rounded-lg p-1"
            />
            <br />
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Message"
              className="w-[90%] rounded-lg p-1 h-[10rem]"
            ></textarea>
            <br />
            <div className="flex justify-end w-[90%]">
              <button
                onClick={sendEmail}
                className="pl-4 pr-5 pt-2 pb-2 bg-slate-50 rounded-lg"
              >
                {loading ? (
                  <div className="w-4 h-4 animate-spin border-t-2 border-b-2 border-gray-900 rounded-full"></div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[100%] sm:w-[40%] flex items-center justify-start border-gray-900 ">
          <Image
            src="/contact-image.png"
            width={500}
            height={500}
            className="hidden sm:block"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Contact;
