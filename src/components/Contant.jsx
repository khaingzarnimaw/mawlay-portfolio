import React from "react";
import Title from "./resources/Title";
import {GrSend} from "react-icons/gr"

const Contant = () => {
  return (
    <div className="h-screen flex justify-center items-center my-20">
      <div className="w-[70%] mx-auto">
        <Title title={"Contact"} setTitle={"Get in touch with me"} />

        <div className=" flex gap-3 flex-col md:flex-row ">
          <div className=" basis-1/2 ">
            <form className=" flex flex-col gap-5 ">
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className=" mt-1  py-3 px-4 border border-slate-800 rounded-sm w-full"
                  
                />
              </div>
              <div>
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className=" mt-1  py-3 px-4 border border-slate-800 rounded-sm w-full"
                />
              </div>
              <div>
                <label>Your Message</label>
                <textarea
                  className=" mt-1 py-3 px-4 border border-slate-800 rounded-sm w-full"
                  cols="30"
                  rows="5"
                  placeholder="Enter Yoru Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button className=" py-3 px-5 border border-slate-800 rounded-sm ">
                  <div className="flex gap-2 ">
                    <GrSend className="text-xl"/>Send Message
                  </div>
                  
                </button>
              </div>
            </form>
          </div>

          <div className="basis-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.051295460704!2d138.4014882!3d34.95532299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a36264ba43cd9%3A0xcf084a12babc0289!2z44CSNDIyLTgwNDIgU2hpenVva2EsIFN1cnVnYSBXYXJkLCBJc2hpZGEsIDMtY2jFjW1l4oiSMTbiiJI0MCDjg5vjg7PjgrHjg57jg7Pjgrfjg6fjg7MgMjAy!5e0!3m2!1sen!2sjp!4v1687110121329!5m2!1sen!2sjp"
              width="100%"
              height="450"
             
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            　　
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contant;
