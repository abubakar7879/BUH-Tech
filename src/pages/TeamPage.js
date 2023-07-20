/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';
import Footer from 'parts/Footer';

import Data from 'json/landingPage.json';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        {/* <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5 text-center">
          Under Construction
        </h1> */}
        <HeroTeam {...this.props} />
        <AllTeam data={Data.team} />
        <Footer />
      </>
    );
  }
}
