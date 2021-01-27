import React, { Component } from 'react';
class Portfolio extends Component {
  render() {
    if (this.props.data) {
      if (this.props.data.projects) {
        var projects = this.props.data.projects.map(function (projects) {
          let projectImage = './port/' + projects.image;
          return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
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

      if (this.props.data.jsProjects) {
        var jsProjects = this.props.data.jsProjects.map(function (jsProjects) {
          let projectImage = 'images/portfolio/' + jsProjects.image;
          return <div key={jsProjects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={jsProjects.url} title={jsProjects.title}>
                <img alt={jsProjects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{jsProjects.title}</h5>
                    <p>{jsProjects.category}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        })
      }
      if (this.props.data.random) {
        var random = this.props.data.random.map(function (random) {
          let projectImage = './portfolio/' + random.image;
          return <div key={random.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={random.url} target='_blank' title={random.title}>
                <img alt={random.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{random.title}</h5>
                    <p>{random.category}</p>
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
            <h1>Check Out My <strong><i>ReactJs Projects</i></strong></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>


          <div className="twelve columns collapsed">

            <h1>Plain JavaScript <strong><i>30 Projects</i></strong></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {jsProjects}
            </div>
          </div>
          <div className="twelve columns collapsed">

            <h1>Some Random Fun Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {random}
            </div>
          </div>
        </div>
      </section>
    );
  }
  }

export default Portfolio 