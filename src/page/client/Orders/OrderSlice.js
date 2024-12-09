import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { getAllInfoInOrders,  getStylistsInOrder, getTimesOrders } from '../../../api/orders';
const initialState = {
  allInfoOrders: [],
  activedServices: false,
  indexServiceSelected: [],
  listServiceSelected: [],
  services: [],
  loading: false,
  loadingTime: false,
  loadingAll: false,
  sendRequest: false,
  categorySelected: 0,
  hideListServicesSelected: false,
  hideSuggestedService: true,
  listStylist: [],
  stylist: {},
  timesOrders: [],
}

export const fetchStylistInOrderAsynk = createAsyncThunk(
  "orders/fetchStylistInOrderAsynk",
  async (endpoint) => {
      const {data} = await getStylistsInOrder(endpoint)
    return data;
  }
)
export const fetchAllInfoInOrders = createAsyncThunk(
  "orders/fetchAllInfoInOrders",
  async (endpoint) => {
      const {data} = await getAllInfoInOrders(endpoint)
    return data;
  }
)
export const fetchTimesOrders = createAsyncThunk(
  "orders/fetchTimesOrders",
  async (info) => {
    console.log(info);
      const {data} = await getTimesOrders(info)
    return data;
  }
)

export const OrderSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setActiveServices: (state) => {
      state.activedServices = !state.activedServices
    },
    setStoreOrder: (state, action) => {
      state.storeOrder = action.payload
    },
    setIndexServiceSelected: (state, action) => {
      state.indexServiceSelected = action.payload
    },
    setListServiceSelected: (state, action) => {
      state.listServiceSelected = action.payload
    },
    setSylist: (state, action) => {
      state.stylist = action.payload
    },
    setHideListServicesSelected: (state, action) => {
      state.hideListServicesSelected = action.payload
    },
    setHideSuggestedService: (state, action) => {
      state.hideSuggestedService = action.payload
      console.log(state.hideSuggestedService);
    },
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
    }
  },
  extraReducers : builder => {
    builder
    .addCase(fetchStylistInOrderAsynk.pending, (state) =>{
      state.loading = true;
    }) 
    .addCase(fetchStylistInOrderAsynk.fulfilled, (state, action) =>{
      state.loading = false;
      state.listStylist = action.payload
    }) 
    .addCase(fetchAllInfoInOrders.pending, (state) =>{
      state.loadingAll = true;
    }) 
    .addCase(fetchAllInfoInOrders.fulfilled, (state, action) =>{
      state.loadingAll = false;
      state.allInfoOrders = action.payload
    }) 
    .addCase(fetchTimesOrders.pending, (state) =>{
      state.loadingTime = true;
    }) 
    .addCase(fetchTimesOrders.fulfilled, (state, action) =>{
      state.loadingTime = false;
      state.timesOrders = action.payload.data
    })
    .addCase(fetchTimesOrders.rejected, (state, action) =>{
      state.loadingTime = false;
    })
  }

})

export const { setLoading, setStoreOrder, setActiveServices, setListServiceSelected, setSylist, setIndexServiceSelected, setCategorySelected, setHideSuggestedService } = OrderSlice.actions

export default OrderSlice.reducer