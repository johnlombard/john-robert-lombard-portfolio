import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {
  Card, CardText, CardBody,
  CardTitle, CardLink, CardSubtitle,
} from 'reactstrap';

// Jumbotron Items
const items = [
  {
    id: 1,
    altText: 'Slide 1',
    title: 'My Financial Friend',
    caption: 'Track your portfolio',
    url: 'https://github.com/johnlombard/my-financial-friend'
  },
  {
    id: 2,
    altText: 'Slide 2',
    title: 'ShareFlix',
    caption: 'Subscription Management service'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    id: 4,
    altText: 'Slide 4',
    title: 'Finance Terminal',
    caption: 'Search for stock tickers'
  },
];

// Card Array
const projects = [
  {
    id: 1,
    title: 'My Financial Friend',
    caption: 'Track your portfolio',
    url: 'https://github.com/johnlombard/my-financial-friend'
  },

  {
    id: 2,
    title: 'ShareFlix',
    caption: `Don't let a password keep you from your favorite shows`,
    url: 'https://github.com/johnlombard/my-financial-friend'
  },



]


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
// Auto render through Jumbotron
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-success" captionText={item.caption} captionHeader={item.title} >
          </CarouselCaption>
        </CarouselItem>
      );
    });

    // Projects
    const cards = projects.map((project) => {
      return (
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div>
            <Card>
              <CardBody
                className="cardProject"
                tag="div"
                key={project.id}>
                <CardTitle
                  title={project.title}
                ></CardTitle>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardText > {project.caption}</CardText>
                <CardLink url={project.url}> Github</CardLink>
                <CardLink url={project.url}> Demo</CardLink>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    });




    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 400px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>

        <div className="container">
          <div className="row">
            {cards}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;