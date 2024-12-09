import React from "react";
import { useNavigate } from "react-router-dom";
const HistoryHairCut = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="py-12 font-bold">Hành trình tỏa sáng</h1>
      <div className="p-8 w-full border shadow-lg shadow-indigo-500/40 border-black rounded-lg flex justify-start flex-col lg:w-[800px]">
        {/*  Tên cơ sở & ngày giờ */}
        <div className="flex flex-col py-2">
          <h3 className="">109 Trần Quốc Hoàn</h3>
          <div className="flex justify-between w-32 opacity-70">
            <span>15/10/22</span>
            <span>18:21</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex md:flex-row">
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
        <div className="pt-8 flex justify-center">
          <button
            className="border-none text-white cursor-pointer p-2 w-[50%] bg-[#8B9A46] rounded-lg ease-in duration-200"
            onClick={() => navigate("detail")}
          >
            Đánh giá ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryHairCut;
