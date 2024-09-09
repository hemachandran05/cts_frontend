import React, { useState } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Alert
} from 'reactstrap';

const RiskPrediction = () => {
  const diagnosesList = [
    { code: 'V1582', description: 'Personal history of tobacco use' },
    { code: 'Z7901', description: 'Abnormal glucose' },
    { code: '5849', description: 'Acute kidney failure' },
    { code: '2449', description: 'Hypothyroidism' },
    { code: 'E039', description: 'Hypothyroidism (E039)' },
    { code: 'Z794', description: 'Long term use of insulin' },
    { code: 'E119', description: 'Type 2 diabetes mellitus' },
    { code: '3051', description: 'Tobacco use disorder' },
    { code: '2859', description: 'Anemia' },
    { code: 'F17210', description: 'Nicotine dependence' },
    { code: 'G4733', description: 'Obstructive sleep apnea' },
    { code: '40390', description: 'Hypertensive chronic kidney disease' },
    { code: 'V5861', description: 'Long-term use of anticoagulants' },
  ];

  const [diagnoses, setDiagnoses] = useState(() =>
    diagnosesList.reduce((acc, diagnosis) => {
      acc[diagnosis.code] = false;
      return acc;
    }, {})
  );

  const [procedures, setProcedures] = useState({
    3893: false,
    '02HV33Z': false,
    3897: false,
    '3E0G76Z': false,
    966: false,
    1140: false,
    9671: false,
    5491: false,
    3722: false,
    '10E0XZZ': false,
    4513: false,
    8744: false,
    '0DJ08ZZ': false,
    '5A1221Z': false,
    8856: false,
    3995: false,
    8952: false,
    '0BH17EZ': false,
  });

  const [csvFile, setCsvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    if (name.startsWith('diagnoses')) {
      const field = name.split('.')[1];
      setDiagnoses((prevDiagnoses) => ({
        ...prevDiagnoses,
        [field]: checked
      }));
    } else if (name.startsWith('procedures')) {
      const field = name.split('.')[1];
      setProcedures((prevProcedures) => ({
        ...prevProcedures,
        [field]: checked
      }));
    }
  };

  const handleFileUpload = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Form submission logic here

    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setPredictionResult({
        risk: 'High'
      });
    }, 2000);
  };

  return (
    <div>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <h5>Diagnoses</h5>
              <FormGroup>
                <Row>
                  {diagnosesList.map(({ code, description }) => (
                    <Col md="4" key={code}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            id={`diagnoses-${code}`}
                            name={`diagnoses.${code}`}
                            checked={diagnoses[code] || false}
                            onChange={handleInputChange}
                          />
                          {description} ({code})
                        </Label>
                      </FormGroup>
                    </Col>
                  ))}
                </Row>
              </FormGroup>

              <h5>Procedures</h5>
              <FormGroup>
                <Row>
                  {Object.entries(procedures).map(([key, value]) => (
                    <Col md="4" key={key}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            id={`procedures-${key}`}
                            name={`procedures.${key}`}
                            checked={value || false}
                            onChange={handleInputChange}
                          />
                          {key}
                        </Label>
                      </FormGroup>
                    </Col>
                  ))}
                </Row>
              </FormGroup>

              <hr />
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Label for="csvFile">Upload CSV File</Label>
                    <Input
                      type="file"
                      name="csvFile"
                      id="csvFile"
                      onChange={handleFileUpload}
                      accept=".csv"
                    />
                    <small className="form-text text-muted">
                      CSV should contain headers matching the form fields, diagnoses, and procedures.
                    </small>
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" type="submit" disabled={loading} onClick={handleSubmit}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>

              {saved && (
                <Alert color="success" className="mt-4">
                  Data saved successfully.
                </Alert>
              )}
              {predictionResult && (
                <Alert color="info" className="mt-4">
                  <h5>Prediction Result</h5>
                  <p>Readmission Risk: {predictionResult.risk}</p>
                </Alert>
              )}
              {error && (
                <Alert color="danger" className="mt-4">
                  {error}
                </Alert>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RiskPrediction;
