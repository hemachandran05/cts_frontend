
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
// Import Chart.js and necessary components
import { Line } from "react-chartjs-2";

function Analytics() {
  // Sample data for the analytics
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Patient Visits",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Readmissions",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Analytics Overview</CardTitle>
                <p className="card-category">
                  Insights on patient visits and readmissions.
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <div style={{ height: "400px" }}>
                      <Line data={data} options={options} />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Patient Visit Statistics</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <p>Total Visits: 400</p>
                        <p>Average Visits per Month: 57</p>
                        <p>Growth Rate: 10%</p>
                        <Button color="info" onClick={() => alert("View more details")}>
                          View More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Readmission Statistics</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <p>Total Readmissions: 120</p>
                        <p>Readmission Rate: 30%</p>
                        <Button color="warning" onClick={() => alert("View more details")}>
                          View More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Analytics;
