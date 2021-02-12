import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Background } from '../../layouts/Background';
import { Content } from '../../layouts/Content';
import '../../assets/styles/main.css';

export const Landing: React.FC = () => {
  return (
    <Background>
      <Content>
        <Header color="transparent" />
        <main className="text-white main-section">
          <div className="container-fluid">
            <div className="row overflow-auto main-section-content p-md-5">
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
                  2 startups seeking to leave their marks on the comics and lending industries.
                  I'm passionate about helping companies scale and achieve their goals using technology.
                </p>
                <Link to="/resume">
                  <button className="view-works-button mb-5">My work experiences</button>
                </Link>
                <p className="heading">News &#128071;</p>
                <div className="card px-3 py-4 mb-2">
                  <div className="card-body text-dark">
                    <h5 className="card-title">Yutars</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://yutars.com/" className="card-link">yutars.com</a>
                  </div>
                </div>
                <div className="card px-3 py-4 mb-2">
                  <div className="card-body text-dark">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
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
