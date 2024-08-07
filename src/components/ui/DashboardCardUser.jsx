import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';


const formatter = (value) => <CountUp end={value} separator="," />;

const DashboardCardUser = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance" value={112893} precision={2} formatter={formatter} />
    </Col>
  </Row>
);


export default DashboardCardUser;