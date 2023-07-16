import React from "react";
import PowerImg from "../assets/img/power.jpg";

const AboutDetail = () => {
  return (
    <div className=" my-20 w-[70%] mx-auto text-slate-700 ">

      <span className=" text-sm italic ">Biography</span>
      <div className=" border border-b-slate-700 w-full mb-5"></div>

      {/* Biography */}
      <div className=" flex gap-10 ">
        <div className=" basis-1/4 ">
          <img src={PowerImg} className=" w-full rounded-sm " alt="" />
        </div>
        <div className=" basis-3/4 ">
          <table className=" text-md">
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Khaing Zar Ni Maw</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>Khaingzarnimaw1996@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>080-5160-7234</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>:</td>
                <td>1996-6-10</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>Female</td>
              </tr>
              <tr>
                <td>Nationality</td>
                <td>:</td>
                <td>Nationality</td>
              </tr>
              <tr>
                <td>Relagion</td>
                <td>:</td>
                <td>Buddha</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>
                  〒 160-0007 東京都
                  新宿区荒木町15番地横内マンション302ホンケマンション２０２号
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AboutDetail;
