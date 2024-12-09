import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
const LayoutAdmin = () => {

    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}>
                        <Menu.Item key={1}>
                            <NavLink to="store"> Cửa hàng </NavLink>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <NavLink to="services"> Dịch vụ </NavLink>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <NavLink to="customer">Khách hàng </NavLink>
                        </Menu.Item>
                        <Menu.Item key={4}>
                            <NavLink to="staff">Nhân viên </NavLink>
                        </Menu.Item>
                        <Menu.Item key={5}>
                            <NavLink to="categories"> Danh mục </NavLink>
                        </Menu.Item>
                        <Menu.Item key={6}>
                            <NavLink to="orders"> Đơn đặt lịch </NavLink>
                        </Menu.Item>
                        {/* <Menu.SubMenu title="sub menu">
                            <Menu.Item>item 3</Menu.Item>
                        </Menu.SubMenu> */}
                    </Menu>

                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </div>
    )
}

export default LayoutAdmin