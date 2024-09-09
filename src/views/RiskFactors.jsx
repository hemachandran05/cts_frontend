import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Table,
} from "reactstrap";
import { Bar } from "react-chartjs-2";

const RiskFactors = () => {
  const data = {
    labels: ["Age", "Diabetes", "Heart Disease", "Smoking", "Obesity", "Hypertension"],
    datasets: [
      {
        label: "Risk Factor Score",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [80, 90, 85, 70, 95, 60],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Risk Score",
        },
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
                <h5>Patient Risk Factors</h5>
                <p className="card-category">
                  Overview of key risk factors affecting patient health.
                </p>
              </CardHeader>
              <CardBody>
                <div style={{ height: "400px" }}>
                  <Bar data={data} options={options} />
                </div>

                <h5 className="mt-4">Detailed Risk Factors</h5>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Risk Factor</th>
                      <th>Description</th>
                      <th>Score</th>
                      <th>Prevention Tips</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Age</td>
                      <td>Patients aged over 65 are at higher risk due to the cumulative effect of aging on organ function, immune response, and overall health.</td>
                      <td>80</td>
                      <td>Regular health screenings, encourage physical activity, and promote a balanced diet.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Diabetes</td>
                      <td>Diabetes significantly increases the risk of complications, including cardiovascular disease, neuropathy, and kidney damage.</td>
                      <td>90</td>
                      <td>Maintain a healthy diet, exercise regularly, monitor blood sugar levels, and adhere to medication.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Heart Disease</td>
                      <td>A history of heart disease poses a significant risk for patients, often leading to heart attacks and strokes due to plaque buildup in arteries.</td>
                      <td>85</td>
                      <td>Encourage a heart-healthy diet rich in fruits, vegetables, and whole grains; regular exercise; and smoking cessation.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Smoking</td>
                      <td>Smoking is a major risk factor for numerous diseases, including lung cancer, emphysema, and heart disease, as it damages blood vessels and reduces oxygen supply.</td>
                      <td>70</td>
                      <td>Implement quit-smoking programs, provide counseling, and encourage support groups.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Obesity</td>
                      <td>Obesity can lead to various health complications, such as diabetes, heart disease, and certain cancers, due to excessive fat affecting body function.</td>
                      <td>95</td>
                      <td>Promote a balanced diet, regular physical activity, and consider behavioral therapy for weight management.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hypertension</td>
                      <td>High blood pressure increases the risk of heart disease and stroke by placing extra strain on the heart and blood vessels.</td>
                      <td>60</td>
                      <td>Encourage a low-sodium diet, regular exercise, and stress-reducing techniques.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Cholesterol Levels</td>
                      <td>High cholesterol can lead to arterial blockages, increasing the risk of heart disease and stroke.</td>
                      <td>75</td>
                      <td>Advise a diet low in saturated fats, regular physical activity, and medication when necessary.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Family History</td>
                      <td>A genetic predisposition increases the risk for certain conditions, including heart disease and diabetes, based on family medical history.</td>
                      <td>85</td>
                      <td>Encourage patients to discuss family health history and assess their risk factors with a healthcare provider.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Physical Inactivity</td>
                      <td>Lack of exercise contributes to obesity, diabetes, and cardiovascular disease, making it a critical risk factor for many patients.</td>
                      <td>70</td>
                      <td>Encourage at least 150 minutes of moderate aerobic activity each week and strength training.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Stress</td>
                      <td>Chronic stress can lead to mental health issues and physical health problems, including hypertension and weakened immune response.</td>
                      <td>65</td>
                      <td>Promote mindfulness practices, counseling, and stress management techniques.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alcohol Consumption</td>
                      <td>Excessive alcohol intake can lead to liver disease, addiction, and increase the risk of various cancers.</td>
                      <td>70</td>
                      <td>Advise moderation in consumption and provide resources for support in reducing alcohol intake.</td>
                      <td>
                        <button className="btn btn-info btn-sm">View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RiskFactors;
