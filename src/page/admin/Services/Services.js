import {
  PlusOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import {
  Button,
  Image,
  Popconfirm,
  Spin,
  Table,
  Modal,
  Form,
  Input,
  Select,
  message,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesAsync, addServicesAsync } from "./ServiceSlice";
import { fetchCategoriesAsynk } from "../Categories/CategoriesSlice";
import UpdateService from "../../../components/admin/services/Update";
const { Option } = Select;
const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((data) => data.services);
  const { categories } = useSelector((data) => data.categories);
  const servicesStatus = useSelector((data) => data);
  const cateStatus = useSelector((data) => data);
  const [perPage, setPerPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [cate, setCate] = useState([]);
  const [images, setImages] = useState();
  const [status, setStatus] = useState("1");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const handleCreate = () => {
    form.setFieldValue({
      name: "",
      description: "",
      price: "",
      work_time: "",
    });
    setOpen(true);
  };
  const handleClose = () => {
    form.resetFields();
    setOpen(false);
  };
  const onFinish = async (value) => {
    let formData = new FormData();
    formData.append("name", value.name);
    formData.append("description", desc);
    formData.append("price", value.price);
    formData.append("work_time", value.work_time);
    formData.append("image", images);
    formData.append("category_id", value.category_id);
    formData.append("status", status);
    const response = await dispatch(addServicesAsync(formData));
    if (response.meta.requestStatus === "fulfilled") {
      message.success("Thêm dịch vụ thành công");
      setOpen(!open);
      form.resetFields();
    } else {
      message.error("Thêm dịch vụ thất bại");
    }
  };

  const handleGetImage = (img) => {
    if (img.size > 500000) {
      if (img.size >= 1024) {
        let size = (img.size / 1024).toFixed(0) + " KB";
        alert(`Chỉ cho phép kích thước ảnh nhỏ hơn 500kb, ảnh của bạn ${size}`);
      }
    } else {
      setImages(img);
    }
  };
  const handleChange = (page) => {
    dispatch(fetchServicesAsync(`?page=${page.current}`));
  };
  useEffect(() => {
    dispatch(fetchServicesAsync("?page=1"));
    dispatch(fetchCategoriesAsynk());
  }, []);
  useEffect(() => {
    if (services.status === 200) {
      setTotalPage(services.data.total);
      setPerPage(services.data.per_page);
      setDatas(services.data.data);
    } else {
      setDatas([]);
    }
    if (categories.status === 200) {
      setCate(categories.data.data);
    } else {
      setCate([]);
    }
  }, [services, categories]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image) => {
        return <Image src={image} width={70} />;
      },
    },
    {
      title: "Chi tiết dịch vụ",
      dataIndex: "description",
    },
    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "ID Danh mục",
      dataIndex: `category_id`,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      editable: true,
      render: (status) => {
        return status === 1 ? (
          <Tag icon={<SyncOutlined spin />} color="processing">
            Đang hoạt động
          </Tag>
        ) : (
          <Tag icon={<MinusCircleOutlined />} color="default">
            Ngừng hoạt động
          </Tag>
        );
      },
    },
    {
      title: "Chức năng",
      dataIndex: "operation",
      render: (_, record) => (
        <div className="flex gap-3">
          <UpdateService record={record} />
          <Popconfirm title="Bạn chắc chắn xoá không?">
            <Button type="" danger ghost>
              Xoá
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => handleCreate()}
      >
        Thêm dịch vụ
      </Button>
      <Spin
        spinning={
          (servicesStatus.services.loading, cateStatus.categories.loading)
        }
      >
        <div className="my-6">
          <h1 className="text-center">Danh sách dịch vụ</h1>
        </div>
        <Table
          columns={columns}
          dataSource={datas}
          pagination={{
            current_page: perPage,
            total: totalPage,
          }}
          onChange={(page) => handleChange(page)}
        />
      </Spin>
      {/* Form Add Service */}
      <Modal
        title="Thêm dịch vụ"
        centered
        open={open}
        onOk={() => handleClose()}
        onCancel={() => handleClose()}
        width={1000}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Tên dịch vụ"
            rules={[
              {
                required: true,
                message: "Tên này không được để trống!",
              },
            ]}
          >
            <Input placeholder="Điền tên dịch vụ" />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            name="image"
            required
            tooltip="Không được để trống"
            rules={[
              {
                required: true,
                message: "Ảnh này không được để trống!",
              },
            ]}
          >
            <input
              type="file"
              className="avatar-uploader"
              onChange={(e) => handleGetImage(e.target.files[0])}
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Chi tiết dịch vụ"
            rules={[
              {
                required: true,
                message: "Chi tiết không được để trống!",
              },
            ]}
          >
            <Input
              placeholder="Điền chi tiết dịch vụ"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá dịch vụ"
            rules={[
              {
                required: true,
                message: "Giá không được để trống!",
              },
            ]}
          >
            <Input placeholder="Điền giá của dịch vụ" />
          </Form.Item>
          <Form.Item
            name="work_time"
            label="Thời gian của dịch vụ"
            rules={[
              {
                required: true,
                message: "Thời gian không được để trống!",
              },
            ]}
          >
            <Input placeholder="Điền thời gian của dịch vụ" />
          </Form.Item>
          <Form.Item
            name="category_id"
            label="Danh mục dịch vụ"
            rules={[
              {
                required: true,
                message: "Danh mục không được để trống!",
              },
            ]}
          >
            <Select placeholder="Vui lòng chọn danh mục" allowClear>
              {cate.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái của dịch vụ"
            required
            tooltip="Không được để trống danh mục"
          >
            <Select
              defaultValue={status}
              onChange={(e) => {
                setStatus(e);
              }}
              options={[
                {
                  value: "1",
                  label: "Đang hoạt động",
                },
                {
                  value: "0",
                  label: "Dừng hoạt động",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Services;
