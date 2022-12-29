import { Card, Col, Divider, Row, Space, Spin, Statistic, Typography } from "antd";
import { ApartmentOutlined, FieldNumberOutlined, SyncOutlined, PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { apiClient } from "../../shared/apiClient";
import { openNotificationWithIcon } from "../../shared/openNotification";

export default function Dashboard() {

    const timeout = 2000;

    const [campaignData, setCampaignData] = useState({
        numberCount: 0,
        active: '',
        startTime: '',
        endTime: '',
    })
    const [loading, setLoading] = useState(false)


    return (
        <>
            <Divider orientation="center">Dashboard</Divider>
            
        </>
    )
}
