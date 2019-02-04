import React, { Component } from 'react';
import Shareflix from '../images/projects/shareflix.png';
import ClickCards from '../images/projects/clickCoversGame.png';
import Terminal from '../images/projects/finapp.png';
import Gems from '../images/projects/gems.png';
import Psychic from '../images/projects/psychic.png';
import Trivia from '../images/projects/trivia.png';
import Finfriend from '../images/projects/finfriend.png';

import {
  Card, CardText, CardBody,
  CardTitle, CardLink,
} from 'reactstrap';

// Card Array
const projects = [
  {
    id: 1,
    title: 'My Financial Friend',
    caption: 'A financial tool to ease your path to financial independence through a portfolio tracker and budget and compound interest calculators.',
    img: Finfriend,
    technologies: 'JavaScript, React.js. Passport.js, Express, Node.js, MongoDB, HTML, CSS, Bootstrap',
    alt: 'My Financial Friend Home Page',
    github: 'https://github.com/johnlombard/my-financial-friend',
    demo: ''
  },

  {
    id: 2,
    title: 'ShareFlix',
    caption: `A subscription management service that allows users to create an account and
    join groups to share their subscription information.`,
    img: Shareflix,
    technologies: 'JavaScript, Node.js, MySQL, HTML, CSS, Bootstrap',
    alt: 'Shareflix home page',
    github: 'https://github.com/jn394/Project-2',
    demo: 'https://project2-shareflix.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Finance Terminal',
    caption: `An equity information terminal. User enters a stock ticker and is presented with various articles, financial data, and a five year historical price graph.`,
    img: Terminal,
    technologies: 'JavaScript, jQuery, Firebase, D3.js, HTML, CSS, Bootstrap',
    alt: 'Shareflix home page',
    github: 'https://github.com/johnlombard/finance-app',
    demo: 'https://johnlombard.github.io/finance-app/'
  },
  {
    id: 4,
    title: 'React Book Reader',
    caption: `A user tries to "read" some of my favorite books by clicking their covers.
    If they reread a book, the game restarts.`,
    img: ClickCards,
    technologies: 'JavaScript, React.js, HTML, CSS, Bootstrap',
    alt: 'React Book Reader demo',
    github: 'https://github.com/johnlombard/clickTheCards',
    demo: 'https://johnlombard.github.io/clickTheCards/'
  },
  {
    id: 5,
    title: 'Gem Collector',
    caption: `A target number is randomly selected, the player clicks the four gems, each
    with their own random value, to reach that target number`,
    img: Gems,
    technologies: 'Technologies Used: jQuery, JavaScript, CSS, Bootstrap, HTML',
    alt: 'Gem Collector demo',
    github: 'https://github.com/johnlombard/unit-4-game',
    demo: 'https://johnlombard.github.io/unit-4-game/'
  },
  {
    id: 6,
    title: 'Beatle Mania Trivia',
    caption: `You have thirty seconds to answer this quiz about the Beatles!`,
    img: Trivia,
    technologies: 'JavaScript, CSS, HTML',
    alt: 'Beatle mania Triva demo',
    github: 'https://github.com/johnlombard/TriviaGame',
    demo: 'https://johnlombard.github.io/TriviaGame/'
  },
  {
    id: 6,
    title: 'Psychic',
    caption: `Guess the computer generated letter.`,
    img: Psychic,
    technologies: 'JavaScript, CSS, HTML',
    alt: 'Psychic Javascript Demo',
    github: 'https://github.com/johnlombard/psychic-game',
    demo: 'https://johnlombard.github.io/psychic-game/'
  },
]

const styles= {
  projectContainer: {
    marginTop: 5
  }
}

class Projects extends Component {

  render() {
    // Card for each specific coding project
    const cards = projects.map((project) => {
      return (
        <div className="col-lg-3 col-md-6 col-xs-12" key={project.id}>
          <div>
            <Card>
              <CardBody
                className="cardProject"
                tag="div"
                key={project.id}>
                <CardTitle
                  title={project.title}
                ></CardTitle>
                <img width="100%" src={project.img} alt={project.alt} />
                <CardText > {project.caption}</CardText>
                <div className="row d-flex justify-content-center">
                  <CardLink target="_blank" rel="noopener noreferrer" href={project.github}>Github</CardLink>
                  <CardLink target="_blank" rel="noopener noreferrer" href={project.demo}>Demo</CardLink>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    });

    return (
      <div style={styles.projectContainer} className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
}

export default Projects;