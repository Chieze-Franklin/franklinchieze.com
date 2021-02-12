import React, { Fragment } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Company, Experience, Role } from '../../layouts/Experience';
import '../../assets/styles/main.css';

export const Resume: React.FC = () => {
  return (
    <Fragment>
      <Header color="white" shadow fixed />
      <main>
        <Experience title="My Work Experiences">
          <Company name="Andela">
            <Role title="Software Engineer"></Role>
            <Role title="Senior Software Engineer"></Role>
          </Company>
          <Company name="ZTP">
            <Role title="Software Engineer"></Role>
            <Role title="Senior Software Engineer"></Role>
          </Company>
        </Experience>
      </main>

      <Footer color="white" showPrint={false} />
    </Fragment>
  );
}
