import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
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
                  Full stack web developer currently working with <a href="https://www.homebound.com/" target="_blank" rel="noreferrer">Homebound</a>{" "}
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
                <Card
                  title="Yutars"
                  text="I'm currently working on Yutars, a simple and modern way to know a borrower's level of credit exposure in real time."
                  url="https://yutars.com/"
                  urlText="yutars.com"
                />
                <Card
                  title="graphql-bootstrap"
                  text="I'm currently working on this CLI tool that converts TypeScript types to GraphQL schema and their TypeScript resolvers."
                  url="https://www.npmjs.com/package/graphql-bootstrap"
                  urlText="npm package"
                />
                <Card
                  title="Comicwox"
                  text="I'm currently adding some new features to Comicwox, a platform that allows users read Nigerian-made comics."
                  url="https://comicwox.com/"
                  urlText="comicwox.com"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Content>
    </Background>
  );
}
