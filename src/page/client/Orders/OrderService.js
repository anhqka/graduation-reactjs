import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./Orders.css"
import ChooseStore from "../../../components/orders/ChooseStore";
import { Spin } from "antd";
import MyStore from "../../../components/orders/MyStore";
import ChooseTime from "../../../components/orders/ChooseTime";
import ChooseCategory from "../../../components/orders/ChooseCategory";
import Auth from "../../../components/orders/Auth";
import ChooseServices from "../../../components/orders/ChooseServices";
import ListServicesSelected from "../../../components/orders/ListServicesSelected";
import { setHideSuggestedService } from "./OrderSlice";

const OrderService = () => {
    const { orders } = useSelector(data => data)
    const dispatch = useDispatch()
    const handleOrderServices = (bool) => {
        dispatch(setHideSuggestedService(bool))
    }
    console.log(orders);
    return (
        <div className="container bg-[#f2f2f2] rounded-sm flex flex-col-reverse p-4 md:grid md:grid-cols-4 md:gap-5">
            <div className="md:col-span-3 ">
                <Auth />
                <Spin spinning={orders.loadingAll}>
                    <>
                        {orders?.allInfoOrders?.data && <ChooseStore />}
                        <div className="m-3">
                            <div className="flex flex-row justify-between mb-3">
                                <h3 className="uppercase mb-0">Chọn dịch vụ</h3>
                                <a onClick={() => handleOrderServices(!orders.hideSuggestedService)} className="text-[13px] mb-0 text-[#B4975A] hover:text-black" >{orders.hideSuggestedService && "Xem dịch vụ đã chọn"}</a>
                            </div>

                            <div className="md:grid md:grid-cols-7">
                                <ChooseCategory />
                                {orders?.allInfoOrders?.data && <ChooseServices />}
                                <div className="col-span-7 cursor-pointer">
                                    <ListServicesSelected />
                                </div>
                            </div>
                        </div>
                        {orders?.listServiceSelected.length > 0 && <ChooseTime />}
                    </>
                </Spin>
            </div>
            <Spin spinning={orders.loadingAll}>
            {orders?.allInfoOrders?.data && <MyStore /> }

            </Spin>
        </div>
    )
}

export default OrderService