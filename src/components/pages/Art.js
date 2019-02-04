import React from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Bull from "../images/art/bull.JPG"
import Alternative from "../images/art/alternative.JPG"
import Snow from "../images/art/snow.JPG"
import Reflection from "../images/art/reflection.jpg"
import Projector from "../images/art/projector.jpg"
import Beach from "../images/art/beach.JPG"
import Statue from "../images/art/statue.jpg"
import Textbook from "../images/art/textbook.jpg"
import Dome from "../images/art/dome.JPG"

// Style sheets
const styles = {
  jumbotron: {
    backgroundImage: `url(${Projector})`,
    backgroundSize: 'cover',
    color: 'white',
    textShadow: "2px 2px rgb(44, 39, 17)",
    height: 610
  },
  artImage: {
    height: 500
  }
};

// Photographs and other art to display
const artImages = [
  
  {
    src: Alternative,
    alt: "Couple in a musuem"
  },
  {
    src: Dome,
    alt: "Couple in a musuem"
  },
  {
    src: Bull,
    alt: "Wall Street Bull"
  },
  {
    src: Snow,
    alt: "Snow Covered Tree Top"
  },
  {
    src: Reflection,
    alt: "Reflecting pond"
  },
  {
    src: Beach,
    alt: "Beach at sunset"
  },
  {
    src: Statue,
    alt: "Statue at night"
  },
  {
    src: Textbook,
    alt: "Painting by a text book"
  },
 

]

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    // Maps through art images
    const artSelection = artImages.map((artImage) => {
      return (
        <div className="col-lg-3 col-md-6 col-xs-12">
          <img src={artImage.src} alt={artImage.alt} style={styles.artImage} />
        </div>
      );
    });


    return (
      <section>
        {/* Jumbotron */}
        <div style={styles.jumbotron} className="jumbotron">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 col-md-8 align-center">
                {/* Center Jumbotron Text */}
                <h2 className="mbr-section-title align-center mbr-fonts-style mbr-bold mbr-white display-1">Art</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="row ">
            {artSelection}
        </div>

        {/* Will Be Used to Toggle Modal on click of picture */}
        {/* <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div> */}
      </section>
    );
  }
}
export default Art;






