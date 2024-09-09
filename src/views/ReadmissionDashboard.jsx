import React from "react";
import { Bar, Bubble, Chart, Doughnut, Line, Pie, PolarArea, Radar, Scatter,  defaults } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { LineChart } from "recharts";
import {
  patientReadmissionChart,
  patientRiskDistributionChart,
  totalAdmissionsChart,
} from "variables/charts.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


// Additional sample data arrays
const demographicData = [
  { name: 'Male', value: 55 },
  { name: 'Female', value: 45 },
  { name: 'Male', value: 77 },
  { name: 'Female', value: 22 },
  { name: 'Male', value: 11 },
  { name: 'Female', value: 99 }
];

const admissionData = [
  { type: 'Emergency', count: 150 },
  { type: 'Elective', count: 100 },
];

const lengthOfStayData = [
  { day: '1-2 days', patients: 120 },
  { day: '3-5 days', patients: 230 },
  { day: '6-10 days', patients: 80 },
];

const vitalSignsData = {
  labels: ['Blood Pressure', 'Heart Rate', 'Respiratory Rate'],
  datasets: [
    {
      label: 'Average',
      data: [120, 75, 16],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

const medicationUsageData = {
  labels: ['Med A', 'Med B', 'Med C'],
  datasets: [
    {
      label: 'Usage',
      data: [300, 450, 150],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
    },
  ],
};

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-bar-32" style={{ color: '#2596be' }} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Readmission Rate</p>
                      <CardTitle tag="p">15%</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Updated now
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ambulance "style={{ color: '#2596be' }}  />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">High-Risk Patients</p>
                      <CardTitle tag="p">345</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last 24 hours
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-user-run"style={{ color: '#2596be' }}  />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Admissions</p>
                      <CardTitle tag="p">1,234</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Updated now
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 "style={{ color: '#2596be' }}  />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Satisfied Patients</p>
                      <CardTitle tag="p">+95%</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> In the last month
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                  <CardTitle tag="h5">Readmission Trends</CardTitle> 
                <p className="card-category">Past Month Performance</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={patientReadmissionChart.data}
                  options={patientReadmissionChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 10 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
              <CardTitle tag="h5">Admissions Over Time</CardTitle>
                <p className="card-category">Current Patient Risk Levels</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={patientRiskDistributionChart.data}
                  options={patientRiskDistributionChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Low Risk{" "}
                  <i className="fa fa-circle text-warning" /> Medium Risk{" "}
                  <i className="fa fa-circle text-danger" /> High Risk{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Last updated today
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Admissions Over Time</CardTitle>
                <p className="card-category">Past Year Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Line
                  data={totalAdmissionsChart.data}
                  options={totalAdmissionsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Admissions{" "}
                  <i className="fa fa-circle text-warning" /> Readmissions
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data validated
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Patient Demographics</CardTitle>
                <p className="card-category">Gender Distribution</p>
              </CardHeader>
              <CardBody >
                <Line
                  data={{
                    labels: demographicData.map(item => item.name),
                    datasets: [{
                      data: demographicData.map(item => item.value),
                      backgroundColor: ['#36A2EB'],
                      borderColor: "#85c1e9",
                      pointBorderColor: "      ",
                      pointRadius: 3,
                      pointHoverRadius: 5,
                      borderWidth: 2,
                      tension: 0.4,
                    }]
                  }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Medication Usage</CardTitle>
                <p className="card-category">Common Medications</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={medicationUsageData}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    }
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Length of Stay</CardTitle>
                <p className="card-category">Patient Stay Duration</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={{
                    labels: lengthOfStayData.map(item => item.day),
                    datasets: [{
                      data: lengthOfStayData.map(item => item.patients),
                      backgroundColor: '#42A5F5'
                    }]
                  }}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    }
                  }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Vital Signs</CardTitle>
                <p className="card-category">Average Vital Signs</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={vitalSignsData}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    }
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
