import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function PatientVisitDetails() {
  // Sample data for the patient visit details
  const patientInfo = {
    totalPatients: 400,
    avgLengthOfStay: 4.5, // in days
    commonDiagnoses: ["Hypertension", "Diabetes", "Asthma"],
    avgReadmissionRate: "30%",
    admissionTypes: [
      { type: "Emergency", count: 120 },
      { type: "Elective", count: 80 },
      { type: "Urgent", count: 60 },
      { type: "Newborn", count: 40 },
    ],
    outcomes: {
      discharged: 200,
      transferred: 50,
      expired: 10,
    },
    medicationUsage: {
      antibiotics: 150,
      analgesics: 200,
      anticoagulants: 180,
      antihypertensives: 100,
    },
  };

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Patient Visit Details</CardTitle>
              <p className="card-category">
                Detailed statistics and information about patient visits.
              </p>
            </CardHeader>
            <CardBody>
              <Row className="mt-4">
                <Col md="6">
                  <p>Total Patients: {patientInfo.totalPatients}</p>
                  <p>Average Length of Stay: {patientInfo.avgLengthOfStay} days</p>
                  <p>Average Readmission Rate: {patientInfo.avgReadmissionRate}</p>
                </Col>
                <Col md="6">
                  <p>Common Diagnoses: {patientInfo.commonDiagnoses.join(", ")}</p>
                  <p>Discharged: {patientInfo.outcomes.discharged}</p>
                  <p>Transferred: {patientInfo.outcomes.transferred}</p>
                  <p>Expired: {patientInfo.outcomes.expired}</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h5">Admission Types</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {patientInfo.admissionTypes.map((admission, index) => (
                        <p key={index}>{admission.type}: {admission.count}</p>
                      ))}
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h5">Medication Usage</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <p>Antibiotics: {patientInfo.medicationUsage.antibiotics}</p>
                      <p>Analgesics: {patientInfo.medicationUsage.analgesics}</p>
                      <p>Anticoagulants: {patientInfo.medicationUsage.anticoagulants}</p>
                      <p>Antihypertensives: {patientInfo.medicationUsage.antihypertensives}</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PatientVisitDetails;
