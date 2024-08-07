import { CiCircleFilled, DatabaseFilled, FileFilled, FileOutlined, HomeFilled, MailFilled, UserOutlined, VideoCameraFilled } from "@ant-design/icons";
import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const DashboardSider = () => {

    const siderStyle = {
        height: '100%',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarColor: 'unset',
    };

    

    const items = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <HomeFilled />
        },
        {
            key: 'file',
            label: 'Files',
            icon: <FileFilled />
        },
        {
            key: 'video',
            label: 'Video',
            icon: <VideoCameraFilled />
        },
        {
            key: 'component',
            label: "Component",
            icon: <DatabaseFilled />,
            children: [
                {
                    key: 'button',
                    label: "Button",
                },
                {
                    key: 'alert',
                    label: "Alert",
                },
                {
                    key: 'table',
                    label: "Table",
                },
                {
                    key: 'badge',
                    label: "Badge",
                }
            ]
        },
        {
            key: 'icon',
            label: "Icon",
            icon: <CiCircleFilled />,
            children: [
                {
                    key: 'ant-design',
                    label: "Ant Design",
                },
                {
                    key: 'bootstrap',
                    label: "Bootstrap",
                },
            ]
        },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailFilled />,
            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: '7',
                    label: 'Option 7',
                },
                {
                    key: '8',
                    label: 'Option 8',
                },
            ],
        },
    ]
    return (
        <Sider theme="light" breakpoint="lg" width={200} style={siderStyle} collapsible>
             <div><Menu theme="light" mode="inline" items={items} /></div>            
        </Sider>
    );
}

export default DashboardSider;