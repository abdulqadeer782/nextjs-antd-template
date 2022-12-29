import {MenuOutlined, ApartmentOutlined, HomeOutlined, DashboardOutlined} from '@ant-design/icons';
import { Avatar, Button, Divider, Drawer, Dropdown, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import {getCookie,deleteCookie} from 'cookies-next'
import { apiClient } from '../shared/apiClient';
import { openNotificationWithIcon } from '../shared/openNotification';
import Link from "next/link";

const { Header } = Layout;

const HeaderComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    let router = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    let user = getCookie('user') && JSON.parse(getCookie('user'))

    const handleLogout = async () =>{
        try {
            // const result = await apiClient.post('/logout')
            if(true){
                deleteCookie('user')
                router.push('/')
                openNotificationWithIcon('success',"Logged out successfully.")
            }
        } catch (error) {
            openNotificationWithIcon('error','Something went wrong.')
        }
    }

    const items = [
        { label: 'Logout', key: 'Logout',onClick:()=>handleLogout() },
    ]

    const logoElement = (
        <div style={{fontSize:'1.7rem', fontWeight: 'bold',color:'#a70292',padding:'10px'}}>
                <Link href="/dashboard">
                    <strong>Contact+ V2</strong>
                </Link>
            </div>
    )

    return (
        <Header className="main-header">
            {!isTabletOrMobile && logoElement}
            {isTabletOrMobile ? <Button onClick={handleDrawer} icon={<MenuOutlined />} /> : <div>
                <div style={{width:'400px'}}><MenuItems router={router} mode="horizontal" /></div>
            </div>}

            <Dropdown menu={{ items }}>
                <Avatar
                    style={{
                        backgroundColor: "rgb(125,2,126)",
                        cursor: 'pointer',
                        textTransform:'capitalize'
                    }}
                    size={40}
                >
                    U
                </Avatar>
            </Dropdown>

            {isTabletOrMobile && <Drawer
                headerStyle={{padding:'10px 0'}}
                onClose={() => setDrawerOpen(!drawerOpen)}
                open={drawerOpen}
                closeIcon={true}
                closable
                title={logoElement}
                bodyStyle={{padding:'10px 0',overflow:'hidden'}}
                width={250}
                height={'100%'}
            >
                <MenuItems router={router} mode="inline" />
            </Drawer>
            }

            
        </Header>
    )
}

const MenuItems = ({ router, mode }) => {
    const items = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard'
        },
        /*{
            key: '/dashboard/calling_server',
            icon: <DatabaseOutlined />,
            label: 'Calling Server'
        },*/
    ]

    const onClick = (e) => {
        router.push(e.key);
    };

    return <Menu
        mode={mode}
        onClick={onClick}
        selectedKeys={router.pathname}
        style={{ border: "none" }}
        items={items}
    />

}

export default HeaderComponent