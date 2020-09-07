import React from 'react'
import { Col, Row} from 'react-bootstrap'
import "./App.css"
import "./assets/colors/colors.css"
import TopNavbar from './components/TopNavbar'
import AnalyticsHeader from './components/AnalyticsHeader'
import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'
import ChartType1 from './components/ChartType1'
import ChartType2 from './components/ChartType2'
import DonutChart from './components/DonutChart'
import SortingBox from './components/SortingBox'
import Box2 from './components/Box2'

const App = () => {
  return (
    <div className="body">
      <TopNavbar />
      <AnalyticsHeader />
      <div className="d-flex flex-wrap page-padding w-100" >
        <div className="m-0 mt-4 p-0 primary-text" style={{ width: "93%", minWidth: "1324.31px" }}>
          <Row className="m-0 p-0">
            <Col className="m-0 p-0" sm={1} ></Col>
            <Col className="m-0 p-0" xl={11} lg={9} md={7} sm={5} xs={5} >
              <HorizontalNav />
            </Col>
          </Row>

          <Row className="m-0 p-sm-0 pl-5">
            <Col className="p-0 d-none d-sm-block" sm={1}>
              <VerticalNav />
            </Col>
            <Col className="p-0 mt-4" xl={7} lg={5} md={5} sm={5} xs={4}>
              <ChartType1 />
              <ChartType2/>
            </Col>
            <Col className="mt-4 p-0 d-md-block d-none container align-items-center" xl={4} lg={4} md={2}>
              <div className="d-flex flex-wrap flex-column justify-content-between h-100">
                <div className="donut-container-responsive"><DonutChart /></div>
                <div className="d-md-none d-lg-block" style={{ height: "11%" }}>
                  <SortingBox />
                </div>
                <div className="d-md-none d-lg-block" style={{ height: "44%" }}>
                  <Box2 />
                </div>
              </div>
            </Col>
            <Col lg={2} md={4}></Col>
          </Row>
          <Row className="m-0 p-sm-0 pl-5 d-md-flex d-lg-none">
            <Col className="m-0 p-0" sm={1}></Col>
            <Col className="m-0 mt-2 p-0" md={7} sm={5} xs={4}>
              <SortingBox/>
            </Col>
          </Row>

          <Row className="m-0 p-sm-0 pl-5 d-flex d-md-none">
            <Col className="m-0 p-0" sm={1}></Col>
            <Col className="m-0 mt-2 p-0" sm={5} xs={4}>
              <DonutChart/>
            </Col>
          </Row>

          <Row className="m-0 p-sm-0 pl-5 d-md-flex d-lg-none">
            <Col className="m-0 p-0" sm={1}></Col>
            <Col className="m-0 mt-2 p-0" md={7} sm={5} xs={4}>
              <Box2/>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  )
}
export default App