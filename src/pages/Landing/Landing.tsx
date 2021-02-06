import React from 'react';
// import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Background } from '../../layouts/Background';
import { Content } from '../../layouts/Content';
// import './Landing.less';
import '../../assets/styles/main.css';

export const Landing: React.FC = () => {
  return (
    <Background>
      <Content>
        <Header />
        <main className="text-white main-section">
          <div className="container-fluid">
            <div className="row overflow-auto main-section-content p-5">
              <div className="col-md-9"></div>
              <div className="col-sm-12 col-md-3">
                <div className="hidden"></div>
                <h1 className="heading">
                  Hi &#128075;, I'm Frank
                </h1>
                <p className="description">
                  Full stack web developer currently with <a href="https://www.homebound.com/" target="_blank" rel="noreferrer">Homebound</a>{" "}
                  where we are disrupting the construction industry in US and beyond.
                  During the weekends I help build <a href="https://comicwox.com/" target="_blank" rel="noreferrer">Comicwox</a> and{" "}
                  <a href="https://yutars.com/" target="_blank" rel="noreferrer">Yutars</a>,{" "}
                  2 startups seeking to disrupt the comics and lending industries.
                  I'm passionate about helping companies scale and achieve their goals using technology.
                </p>
                <button className="view-works-button mb-5">See my works</button>
                <div className="card bg-gray px-3 py-4 mb-5">
                  <div className="card-body text-dark">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Content>
    </Background>
  );
}
