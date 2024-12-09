import React from "react";
import { Rate } from "antd";
import { Input } from "antd";
const { TextArea } = Input;
const DetailRating = () => {
  return (
    <div className="flex flex-col items-center h-auto lg:m-auto">
      {/*  Đánh giá */}
      <p className="text-3xl font-bold  mt-8 mb-0">Đánh giá</p>
      <div className="flex flex-col items-center w-full">
        <div className="py-8 md:pb-10">
          <Rate style={{ fontSize: "40px" }} theme="outlined" />
        </div>
        <div className="w-full px-4  md:w-[900px] md:px-10">
          <TextArea
            rows={12}
            placeholder="
                Hãy để lại ý kiến của bạn sau khi trải nghiệm dịch vụ của chúng tôi (tối đa 150 ký tự)"
            maxLength={150}
          />
        </div>
        <div className="my-10">
          <button className="text-black text-lg uppercase cursor-pointer h-12 w-56 rounded-lg">
            lưu đánh giá
          </button>
        </div>
      </div>
      {/*  Cơ sở sử dụng dịch vụ */}
      <div className="p-8 w-full border border-black rounded-lg flex justify-start flex-col shadow-lg shadow-indigo-500/40 lg:w-[800px]">
        <div className="flex flex-col py-2">
          <h3 className="">109 Trần Quốc Hoàn</h3>
          <div className="flex justify-between w-32 opacity-70 ">
            <span>15/10/22</span>
            <span>18:21</span>
          </div>
        </div>
        <div className="flex flex-col items-center  md:flex md:flex-row">
          <div className="image__stylist">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
              width="180px"
            />
          </div>
          <div className="px-2 mt-4">
            <p className="p-2">Stylist : Nguyễn Văn A</p>
            <p className="p-2">Skinner : Nguyễn Văn A</p>
            <p className="p-2">Dịch vụ : (2022) Cắt xả tạo kiểu 80k (30p)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRating;
