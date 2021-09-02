/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, CardImg, CardText, Button } from "reactstrap";

const data = [
  {
  title: "title1",
  text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title2",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title3",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
  title: "title4",
  text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title5",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title6",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
  title: "title7",
  text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title8",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
  {
    title: "title0",
    text: "this is the text of card. this is the text of card. this is the text of card. this is the text of card.",
  },
]

const clickHandler = () => {
  alert("clicked");
};

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {data.map(d => {
                return (
                  <a href="" onClick={clickHandler}>
                    <Col lg="6" xl="3" style={{paddingBottom: "32px"}}>
                      <Card style={{ width: "22rem" }}>
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1000x900.jpg").default}
                          top
                        />
                        <CardBody>
                          <CardTitle style={{color: "black"}}>{d.title}</CardTitle>
                          <CardText style={{color: "black"}}>
                            {d.text}
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </a>
                  
                )
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
