import { Content } from "antd/es/layout/layout";
import DashboardCardUser from "./DashboardCardUser";
import { Card, Col, Row } from "antd";
import DashboardActive from "./DashboardActive";
import DashboardCountFeedback from "./DashboardCountFeedback";
import DashboardBarChart from "./DashboardBarChart";
import DashboardTable from "./DashboardTable";
import DashboardList from "./DashboardList";
import DashboardCalender from "./DashboardCalender";

const DashboardContent = () => {
    return (
        <Content style={{ marginTop: 10 }}>
            <Row gutter={[6, 6]} >

                <Col xs={24} md={8}>
                    <Card title="Users" hoverable>
                        <DashboardCardUser />
                    </Card>
                </Col>


                <Col xs={24} md={8}>
                    <Card title="Feedback" hoverable>
                        <DashboardCountFeedback />
                    </Card>
                </Col>


                <Col xs={24} md={8}>
                    <Card title="Users" hoverable>
                        <DashboardCardUser />
                    </Card>
                </Col>

            </Row>

            <Row gutter={[12, 12]} style={{ marginTop: 50 }} >

                <Col xs={24} md={16}>
                    <Card title="Users" hoverable>
                        <DashboardBarChart />
                    </Card>
                </Col>

                <Col xs={24} md={8}>

                    <Row gutter={[12, 12]}>
                        <Col xs={24}>
                            <Card title="Users" hoverable>
                                <DashboardCardUser />
                            </Card>
                        </Col>

                        <Col xs={24}>
                            <Card title="Users" hoverable>
                                <DashboardCardUser />
                            </Card>
                        </Col>
                    </Row>

                </Col>

            </Row>


            <div style={{ marginTop: 50 }}>
                <Row  gutter={[12,12]}>
                    <Col  xs={16}>
                        <Card>
                            <DashboardList />
                        </Card>
                    </Col>
                    <Col  xs={6}>
                        <Card>
                            <DashboardCalender />
                        </Card>
                    </Col>
                </Row>
            </div>



            <div style={{ marginTop: 50 }}>
                <DashboardTable />
            </div>
        </Content>
    );
}

export default DashboardContent;