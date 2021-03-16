import ProfileUi from 'react-profile-card';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const AboutMe = () =>{
    return(
        <Container>
            <div className="container py-5">
            <h2>AboutMe:</h2>
            </div>
            <Row>
                <Col>
                <ProfileUi className="img-box"
                imgUrl='./Images/Vasavi.jpg'
                name='Vasavi'  />
        </Col>
                <Col sm={8}>
                <Card className="text-centre">
<Card.Body className="card-body">
    <Card.Text>
        I am a graduate with a bachelor’s degree in computer science and live-long, self-taught front-end web developer who loves to create fun and accessible web projects using HTML, CSS, and JavaScript, Angular. I am on a journey to become a better version of myself by constant learning and execution. Currently looking for a job opportunity which allows me to use my skills at work and to learn from fellow team members. 
    </Card.Text>
    <Row>
    <Col sm={3}>
        <Button variant="outline-dark" href="https://github.com/VasaviGannena">GitHub</Button>
    </Col>
    <Col sm={3}>
        <Button variant="outline-dark" href="https://vasavigannena.github.io/portfolio-ng/">Github-Pages</Button>
    </Col>
    <Col sm={3}>
        <Button variant="outline-dark" href="https://www.linkedin.com/in/vasavigannena/">LinkedIn</Button>
    </Col>
    <Col sm={3}>
        <Button variant="outline-dark" href="https://twitter.com/vasavi_gannena">Twitter</Button>
    </Col>
  </Row>
    
</Card.Body>
</Card>
 </Col>
</Row>



</Container>
    )
}

export default AboutMe;