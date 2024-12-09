import { Alert, Calendar, DatePicker, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick";
import './Orders.css'
import moment from "moment/moment";
import { fetchTimesOrders } from "../../page/client/Orders/OrderSlice";
import { DownOutlined, HourglassOutlined, UpOutlined } from "@ant-design/icons";
import NotiOrders from "./NotiOrders";

const ChooseTime = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector(data => data)
    const [activedTime, setActivedTime] = useState(0)
    const [value, setValue] = useState(() => moment(''));
    const [selectedValue, setSelectedValue] = useState(() => moment());
    const [selectedTime, setSelectedTime] = useState("");

    const [hideTime, setHideTime] = useState(false)
    const [hideDate, setHideDate] = useState(false)

    let totalTimeListSelected = '00:00:00'
    orders.listServiceSelected.map((service, index) => {
        totalTimeListSelected = moment(totalTimeListSelected, "HH:mm").add(service.work_time, "minutes").format('HH:mm')
    })

    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
        setHideTime(false)
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        rows: 3,
        slidesPerRow: 2,
    };
    const handleActiveCategory = (index, time) => {
        setActivedTime(index)
        setSelectedTime(time)
        setHideDate(true)
    }
    const disabledDay = current => {
        return current && (current > moment().add(6, 'day') || current < moment().subtract(1, 'days'));
    }
    useEffect(() => {
        const formData = new FormData()
        if (selectedValue?.format('DD-MM-YYYY').length > 0, Object.keys(orders.stylist).length !== 0) {
            formData.append("idStore", orders.allInfoOrders.data.id)
            formData.append("idStaff", orders.stylist.id)
            formData.append("time", selectedValue.format('YYYY-MM-DD'))
            dispatch(fetchTimesOrders(formData))
        }
        console.log(formData.get("time"))

    }, [orders.stylist, selectedValue])

    return (
        <div className="m-3">
            <div className="flex flex-col justify-between space-y-3">
                <h3 className="uppercase mb-0">Chọn thời gian</h3>
                <div className="">
                    <div onClick={() => setHideTime(!hideTime)} className={`cursor-pointer bg-white flex justify-between  items-center border-[0.2px] border-solid border-[#e0e0e0]`} >
                        <p className="m-0 py-1 pl-3"> Ngày : {selectedValue?.format('DD-MM-YYYY')}</p>
                        <div className="py-1 pr-3 ">
                            {hideTime ? <DownOutlined /> : <UpOutlined />}
                        </div>
                    </div>

                    <div className={`${!hideTime && "hidden "}`}>
                        <Calendar format="YYYY-MM-DD"
                            disabledDate={disabledDay}
                            onSelect={onSelect} onPanelChange={onPanelChange}
                            fullscreen={false}
                            locale={{
                                lang: {
                                    locale: 'en',
                                    dayFormat: moment.updateLocale('en', {
                                        weekdaysMin: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', `Thứ Tư`, 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy',]
                                    })
                                }
                            }}

                        />
                    </div>

                </div>
                <Spin spinning={orders.loadingTime}>
                    <div className="md:block hidden">
                        <div onClick={() => setHideDate(!hideDate)} className="cursor-pointer bg-white flex justify-between  items-center border-[0.2px] border-solid border-[#e0e0e0]" >
                            <p className="m-0 py-1 pl-3"> Bắt đầu vào lúc: {selectedTime && moment(selectedTime, "HH:mm").format("HH giờ mm") + " phút"} </p>
                            <div className="py-1 pr-3 ">
                                {!hideDate ? <DownOutlined /> : <UpOutlined />}
                            </div>
                        </div>

                        <div className={`grid grid-cols-9 md:grid-cols-8 gap-1 cursor-pointer`}>
                            {(orders?.allInfoOrders?.dataTimes.length > 0 && !hideDate) && orders.allInfoOrders.dataTimes.map((order, index) => {
                                return (
                                    <div key={index} onClick={() => handleActiveCategory(index, order.time)} className={`${activedTime === index && "bg-[#B4975A] text-white border-none"} px-6 py-3 border-solid border-white text-center hover:bg-[#B4975A] hover:text-white hover:border-none  text-center   "`}  >
                                        <span className=" ">{order.time}</span>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>

                    <div className={`block md:hidden`} >
                        <div onClick={() => setHideDate(!hideDate)} className="bg-white flex justify-between  items-center border-[0.2px] border-solid border-[#e0e0e0]" >
                            <p className="m-0 py-1 pl-3"> Bắt đầu vào lúc: {selectedTime && moment(selectedTime, "HH:mm").format("HH giờ mm") + " phút"}</p>

                            <div className="py-1 pr-3 ">
                                {!hideDate ? <DownOutlined /> : <UpOutlined />}
                            </div>
                        </div>

                        <div className=" mx-4">
                            <Slider {...settings}>
                                {(orders?.allInfoOrders?.dataTimes.length > 0 && !hideDate) && orders.allInfoOrders.dataTimes.map((order, index) => {
                                    return (
                                        <div key={index} onClick={() => handleActiveCategory(index, order.time)} className={`${activedTime === index && " bg-[#B4975A] text-white border-none"} cursor-pointer px-6 py-3 border-solid border-white text-center hover:bg-[#B4975A] hover:text-white hover:border-none `} >
                                            <span className=" ">{order.time}</span>
                                        </div>
                                    )
                                })
                                }
                            </Slider>
                        </div>

                    </div>
                </Spin>
                {selectedTime &&
                    <div>
                        <div className="bg-white flex justify-between  items-center border-[0.2px] border-solid border-[#e0e0e0]" >
                            <p className="m-0 py-1 pl-3">  Kết thúc vào khoảng: {selectedTime && moment(selectedTime, "HH:mm").add(totalTimeListSelected, "minutes").format('HH giờ mm') + ' phút'}</p>
                            <div className="py-1 pr-3 ">
                                <HourglassOutlined />
                            </div>
                        </div>
                    </div>
                
                }
            </div>
        </div>
    )
}

export default ChooseTime