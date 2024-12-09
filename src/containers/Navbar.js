import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal } from '../page/client/Orders/OrderSlice';
import Slider from "react-slick";

const navItems = [
  { id: 1, name: 'Trang chủ', link: '/' },
  { id: 2, name: 'Về barber', link: '/barber' },
  { id: 2, name: 'Tin tức', link: '/news' },
  { id: 2, name: 'Về chúng tôi', link: '/us' },

];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const navigate = useNavigate()


  const handleOrder = () => {
    setIsOpenMenu(!isOpenMenu)
    navigate("/orders")
  }

  return (
    <div className="">
      <div className="bg-[#2C2D2C]">
        <div className="container flex flex-row justify-between ">
          <div>

          </div>
          <ul className='mb-0 py-1 space-x-3'>
            <li className="list-none inline">
              <a className='text-white text-sm font-sans hover:text-gray-500'>Đăng kí</a>
            </li>
            <li className="list-none inline">
              <a className='text-white text-sm font-sans hover:text-gray-500  '>Đăng nhập</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img className='w-[40px]' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="easybank logo" />
          </div>

          <div className="hidden lg:block text-sm ">
            {navItems.map((navItem, index) => (
              <a key={index} className="mx-3 py-5  text-black font-sans text-xl uppercase hover:text-gray-500  " href={navItem.link}>
                {navItem.name}
              </a>
            ))}
          </div>

          <button className='hidden lg:block font-sans bg-[#B4975A] text-white border-none hover:text-gray-500 cursor-pointer px-5 py-1' onClick={() => handleOrder()}>Đặt lịch </button>

          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className={`lg:hidden ${isOpenMenu && 'hidden'}  cursor-pointer  hover:text-[#8B9A46] hover:bg-[#541212]`}
          >
            <MenuOutlined className={`${isOpenMenu && 'hidden'}, p-1 `} />
          </button>
        </nav>
      </div>

      <div className="bg-[#2C2D2C] text-center py-1">
        <div>
          <Slider {...settings}>
            <div>
              <h3 className='text-white text-[13px] mb-0' onClick={() =>  navigate("/orders")}>Bu đẹp trai</h3>
            </div>
              <div>
                <h3 className='text-white text-[13px] mb-0' onClick={() =>  navigate("/orders")}>Nhất thế giới</h3>
              </div>
          </Slider>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpenMenu ? 'block' : 'hidden'} lg:hidden`}
      >
        <div className="bg-gray-300 flex flex-col text-center mx-5 my-20 py-4 rounded ">
          <div className='absolute right-9 top-[87px] cursor-pointer' onClick={() => handleOrder()}> <CloseOutlined /></div>
          {navItems.map((navItem, index) => (
            <a key={index} className="py-2 text-black font-sans text-xl uppercase hover:text-gray-500" href={navItem.link}>
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}