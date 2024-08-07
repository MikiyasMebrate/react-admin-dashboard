import { BellFilled, MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const DashboardHeader = () => {
    let items = [
        {
            key: '1',
            label: "Messages",
            icon: <MessageOutlined />
        },
        {
            key: '2',
            label: "Notification",
            icon: <BellFilled />
        },
        {
            key: '3',
            label: "User",
            icon: <UserOutlined />
        },
    ]

    let headerStyle={
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        alignItems: 'center',
        margin: 0, 
        backgroundColor: "#ffffff"
      }

    return (
        <>
            <Header style={headerStyle}>
                <Flex justify="space-between" align="center"  >
                    <img style={{maxWidth : "150px"}}   src="https://mikiyasmebrate.mopdportal.com/static/assets/images/logo/logo-no-background.png" alt="logo" />
                    <Menu style={{maxWidth :500}} theme="light"  items={items} mode="horizontal"></Menu>
                </Flex>
            </Header>
        </>
    );
}

export default DashboardHeader;