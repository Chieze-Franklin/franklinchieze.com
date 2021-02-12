import React, { Fragment } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Company, Experience, Role } from '../../layouts/Experience';
import '../../assets/styles/main.css';

export const Resume: React.FC = () => {
  const companies = [
    {
      name: "Homebound",
      description: "Homebound (https://www.homebound.com/) is a Santa Rosa-based company that specializes in delivering very smooth home-building experiences.",
      website: "https://www.homebound.com/",
      logo: "data:image/png;base64,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",
      location: "Santa Rosa, California, USA",
      startDate: "Oct 2020",
      endDate: "Present",
      roles: [{
        title: "Software Engineer",
        startDate: "Oct 2020",
        endDate: "Present",
        type: "Fulltime",
        description: "I'm working as a full stack engineer, contributing both to the React front-end and the GraphQL back-end of an internal tool.",
        tools: [{
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
          url: "https://reactjs.org/"
        }, {
          name: "TypeScript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
          url: "https://www.typescriptlang.org/"
        }],
        projects: [{
          name: "Blueprint: Internal React Application",
          icon: "",
          url: ""
        }, {
          name: "Internal GraphQL Service",
          icon: "",
          url: ""
        }]
      }]
    },
    {
      name: "Andela",
      description: "",
      website: "https://andela.com/",
      logo: "https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Confidential-Egypt-39834-1554216626.png",
      location: "Lagos, Nigeria",
      startDate: "Oct 2017",
      endDate: "Present",
      roles: [{
        title: "Senior Software Engineer",
        startDate: "Feb 2020",
        endDate: "Present",
        type: "Fulltime",
        description: "I'm working with the Partner Engineering department to help Andela's partners achieve their goals.",
      }, {
        title: "Senior Software Engineer, technology",
        startDate: "Aug 2020",
        endDate: "Feb 2020",
        type: "Fulltime",
        description: "I worked on an internal tool called Devsig Dashboard which fetches engineer performance data from different sources, displays fetched data on a single dashboard, and checks if engineers are meeting the targets set by their managers.",
        tools: [{
          name: "Firebase",
          icon: "data:image/jpeg;base64,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",
          url: "https://firebase.google.com/"
        }, {
          name: "JavaScript",
          icon: "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
          url: "https://www.w3schools.com/js/js_intro.asp"
        }, {
          name: "NodeJS",
          icon: "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",
          url: "https://nodejs.org/en/"
        }, {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
          url: "https://reactjs.org/"
        }, {
          name: "Redux",
          icon: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
          url: "https://redux.js.org/"
        }, {
          name: "TypeScript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
          url: "https://www.typescriptlang.org/"
        }],
        projects: [{
          name: "DevSig. This is a CLI tool that collects performance data and sends them to the server for processing.",
          icon: "",
          url: ""
        }, {
          name: "DevSig Dashboard. The dashboard where processed data are displayed against time.",
          icon: "",
          url: ""
        }]
      }]
    }
  ];
  return (
    <Fragment>
      <Header color="white" shadow fixed />
      <main>
        <Experience title="My Work Experiences">
          {companies.map(company => (
            <Company key={company.name} company={company}>
              {company.roles.map(role => (
                <Role key={role.title} role={role} />
              ))}
            </Company>
          ))}
        </Experience>
      </main>

      <Footer color="white" showPrint={false} />
    </Fragment>
  );
}
