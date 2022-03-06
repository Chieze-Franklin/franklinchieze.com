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
                  In my spare time I build <a href="http://agnos-cloud.herokuapp.com/designs/+" target="_blank" rel="noreferrer">Agnos Cloud</a> and{" "}
                  <a href="https://www.npmjs.com/package/graphstrap" target="_blank" rel="noreferrer">graphstrap</a>,{" "}.
                  I'm passionate about helping companies scale and achieve their goals using technology.
                </p>
                <Link to="/resume">
                  <button className="view-works-button mb-5">See my resume</button>
                </Link>
                <p className="heading">News &#128071;</p>
                <Card
                  title="Agnos Cloud"
                  text="Agnos provides you with a drag-and-drop interface to help you create system designs. You can also bring your system designs to life by provisioning them on any of the popular cloud providers, right from within the app."
                  url="http://agnos-cloud.herokuapp.com/designs/+"
                  urlText="yutars.com"
                />
                <Card
                  title="graphstrap"
                  text="This is a CLI tool that converts TypeScript types to GraphQL schema and their TypeScript resolvers."
                  url="https://www.npmjs.com/package/graphstrap"
                  urlText="npm package"
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
