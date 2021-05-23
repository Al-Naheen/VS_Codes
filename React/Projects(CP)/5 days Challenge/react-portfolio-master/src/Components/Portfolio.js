import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    let portfolioData = this.props.data;

    if (portfolioData) {
      if (portfolioData.react) {
        var react = portfolioData.react.map(function (projects) {
          var projectImage = 'images/portfolio/' + projects.image;
          return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <a href={projects.url} target='_blank' title={projects.title}>
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
      } if (portfolioData.plainJS) {
        var plainJS = portfolioData.plainJS.map(function (projects) {
          var projectImage = 'images/portfolio/' + projects.image;
          return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <a href={projects.url} target='_blank' title={projects.title}>
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

            <h1 style={{ fontSize: '18px' }}>Check Out My <strong style={{ fontSize: '18px' }}><i>React Projects</i></strong></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {react}
            </div>
          </div>

          <div className="twelve columns collapsed" style={{ marginTop: '18px' }}>
            <h1 style={{ fontSize: '18px' }}>Check Out My <strong style={{ fontSize: '18px' }}><i>Plain JavaScript Projects</i></strong></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {plainJS}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio