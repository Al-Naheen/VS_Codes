import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      if (this.props.data.projects) {
        var projects = this.props.data.projects.map(function (projects) {
          var projectImage = 'images/portfolio/' + projects.image;
          return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} target='_blank' title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        })
      }
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
          <h1>Plain JavaScript <i>31 Projects</i></h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>


          {/* <div className="twelve columns collapsed">

            <h1>Plain JavaScript <strong><i>30 Projects</i></strong></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {jsProjects}
            </div>
          </div> */}
         </div>
      </section>
    );
  }
  }

export default Portfolio