import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function ReadmissionRiskTable() {
  // Sample data for the table
  const patientsData = [
    {
      name: "KARTHIK",
      age: 65,
      readmissionRisk: "High",
      lastAdmissionDate: "2024-08-15",
      followUpDate: "2024-09-01",
    },
    {
      name: "HARISH",
      age: 72,
      readmissionRisk: "Moderate",
      lastAdmissionDate: "2024-07-20",
      followUpDate: "2024-08-25",
    },
    {
      name: " Johnson",
      age: 54,
      readmissionRisk: "Low",
      lastAdmissionDate: "2024-08-10",
      followUpDate: "2024-09-10",
    },
    {
      name: "BALU",
      age: 80,
      readmissionRisk: "High",
      lastAdmissionDate: "2024-07-30",
      followUpDate: "2024-08-30",
    },
    {
      name: "Davis",
      age: 60,
      readmissionRisk: "Moderate",
      lastAdmissionDate: "2024-08-05",
      followUpDate: "2024-08-29",
    },
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Patient Readmission Risk Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Readmission Risk</th>
                      <th>Last Admission Date</th>
                      <th>Next Follow-Up Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientsData.map((patient, index) => (
                      <tr key={index}>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>
                          <span className={`badge ${patient.readmissionRisk === "High" ? "badge-danger" : patient.readmissionRisk === "Moderate" ? "badge-warning" : "badge-success"}`}>
                            {patient.readmissionRisk}
                          </span>
                        </td>
                        <td>{patient.lastAdmissionDate}</td>
                        <td>{patient.followUpDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReadmissionRiskTable;
