import React from 'react';
import './Facilities.css';
import Card from 'react-bootstrap/Card';
import c1 from '../assests/images/library.png';
import c2 from '../assests/images/basketball.png';
import c3 from '../assests/images/cafeteria.png';
function Facilities() {
  return (
    <>
      <div className="container-fluid px-0 Facilities py-5">
        <div className="text-title text-center py-3">
          <div className="text text-center">
            <h2>Our Facilities</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex.
            </p>
          </div>
        </div>
        <div className="container  d-flex flex-md-row flex-column justify-content-between">
          <Card className="fcards mx-auto mb-md-0 mb-3">
            <Card.Img variant="top" src={c1} className="imgf img-fluid" />
            <Card.Body>
              <Card.Title>World Class library</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore error dolores illum facilis, incidunt illo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="fcards mx-auto mb-md-0 mb-3">
            <Card.Img variant="top" src={c2} className="imgf img-fluid" />
            <Card.Body>
              <Card.Title>Largest PLay Ground</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore error dolores illum facilis, incidunt illo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="fcards mx-auto mb-md-0 mb-3">
            <Card.Img variant="top" src={c3} className="imgf img-fluid" />
            <Card.Body>
              <Card.Title>TASTY AND HEALTHY FOOD</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore error dolores illum facilis, incidunt illo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Facilities;
