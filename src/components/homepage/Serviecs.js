import { Badge, Image, Tabs } from 'antd';

import React from "react";
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigation = useNavigate()
    return (
        <div className="container">
            <h1 className="text-black uppercase text-xxl my-6 font-oswald  text-left">Các dịch vụ</h1>
            <div className="flex flex-col bg-white">
                <Tabs type="card">
                    <Tabs.TabPane tab={"Cắt tóc"} tabs={"abc"} key="1" >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                            <div
                                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70">
                                <Image
                                    src="https://phongbvb.com/upload/anh-menu-chinh/1.jpg?v=1.0.2"
                                />
                                <div className="px-3 py-2">
                                    <p className="font-medium py-1">1. Tư vấn kiểu tóc hợp khuôn mặt</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70">
                                <Image
                                    src="https://phongbvb.com/upload/anh-menu-chinh/1.jpg?v=1.0.2"
                                />
                                <div className="px-3 py-2">
                                    <p className="font-medium py-1">1. Tư vấn kiểu tóc hợp khuôn mặt</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70">
                                <Image
                                    src="https://phongbvb.com/upload/anh-menu-chinh/1.jpg?v=1.0.2"
                                />
                                <div className="px-3 py-2">
                                    <p className="font-medium py-1">1. Tư vấn kiểu tóc hợp khuôn mặt</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70">
                                <Image
                                    src="https://phongbvb.com/upload/anh-menu-chinh/1.jpg?v=1.0.2"
                                />
                                <div className="px-3 py-2">
                                    <p className="font-medium py-1">1. Tư vấn kiểu tóc hợp khuôn mặt</p>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Uốn tóc" key="2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                            <div
                                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70">
                                <Image
                                  
                                    src="https://phongbvb.com/upload/anh-menu-chinh/1.jpg?v=1.0.2"
                                />
                                <div className="flex justify-around items-center">
                                    <p className="font-medium pt-[11px]">Tẩy tóc</p>
                                    <p className="font-medium pt-[11px]">500k</p>
                                    <button className='font-sans bg-gray-300 text-white border-none hover:bg-gray-500 hover:text-gray-300 px-5 py-1' onClick={() => navigation("/orders")}>Đặt lịch ngay</button>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Nhuộm tóc" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane></Tabs>
            </div>

        </div>
    )
}

export default Services