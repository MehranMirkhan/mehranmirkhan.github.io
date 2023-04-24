import React from "react";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

import profile from "src/images/Mirkhan_Logo_2.jpg";
import atomaze from "src/images/atomaze.png";

export default () => (
  <MainLayout>
    <div className="flex flex-col gap-6 md:px-8 lg:px-24 py-6">
      <About />
      <Contact />
      <Publications />
      <Products />
      <Technologies />
    </div>
  </MainLayout>
);

const About = () => (
  <div className="relative mt-24">
    <Element.Segment>
      <div className="absolute top-0 left-0 w-full">
        <img
          src={profile}
          alt="Profile Picture"
          className="w-48 h-48 mx-auto rounded-full -translate-y-24 shadow-2xl"
        />
      </div>
      <div className="h-16" />
      <h1 className="font-copperplate text-3xl text-center py-2">
        Mehran Mirkhan
      </h1>
      <h1 className="text-xl text-center">Web Developer & AI Researcher</h1>
    </Element.Segment>
  </div>
);

const Contact = () => (
  <Element.Segment title="Contact">
    <div className="w-[28rem] mx-auto">
      <div className="flex flex-col items-stretch gap-2">
        <Element.LabeledInfo label="Email">
          <a href="mailto:mehran.mirkhan@gmail.com">mehran.mirkhan@gmail.com</a>
        </Element.LabeledInfo>
        <Element.LabeledInfo label="LinkedIn">
          <a href="https://www.linkedin.com/in/mehran-mirkhan/">
            https://www.linkedin.com/in/mehran-mirkhan/
          </a>
        </Element.LabeledInfo>
        <Element.LabeledInfo label="Github">
          <a href="https://github.com/MehranMirkhan/">
            https://github.com/MehranMirkhan/
          </a>
        </Element.LabeledInfo>
      </div>
    </div>
  </Element.Segment>
);

const Publications = () => (
  <Element.Segment title="Publications">
    <div className="flex flex-col gap-2">
      <Reference index={1}>
        Mehran Mirkhan, and Mohammad Reza Meybodi. ”Restricted Convolutional
        Neural Networks.” Neural Processing Letters 50.2 (2019): 1705-1733. (
        <a
          className="text-blue-600"
          target="_blank"
          href="https://link.springer.com/article/10.1007/s11063-018-9954-x"
        >
          Link
        </a>
        )
      </Reference>
      <Reference index={2}>
        Mehran Mirkhan, Maryam Amir Haeri, and Mohammad Reza Meybodi.
        ”Analytical Split Value Calculation for Numerical Attributes in
        Hoeffding Trees with Misclassification-Based Impurity.” Annals of Data
        Science (2021): 1-21. (
        <a
          className="text-blue-600"
          target="_blank"
          href="https://link.springer.com/article/10.1007/s40745-019-00225-4"
        >
          Link
        </a>
        )
      </Reference>
    </div>
  </Element.Segment>
);

const Reference = ({ index, children }: { index: number; children: any }) => (
  <div className="flex flex-row gap-2">
    <div className="w-16 text-right text-gray-500">[{index}]</div>
    <div className="w-fit">{children}</div>
  </div>
);

const Products = () => (
  <Element.Segment title="Products">
    <div className="flex flex-row justify-center gap-8 items-center">
      <div className="w-24 text-right text-gray-500">
        <img src={atomaze} alt="AtoMaze Logo" className="w-24 h-24" />
      </div>
      <div className="text-2xl">AtoMaze</div>
      <Element.LinkLabel href="https://apps.apple.com/us/app/atomaze-atom-in-maze/id1601103437">
        ios
      </Element.LinkLabel>
      <Element.LinkLabel href="https://play.google.com/store/apps/details?id=app.atomaze.android&hl=en&gl=US">
        Android
      </Element.LinkLabel>
    </div>
  </Element.Segment>
);

const Technologies = () => (
  <Element.Segment title="Technical Expertise">
    <div className="flex flex-col gap-10 mt-8">
      <Element.CompactSegment title="Programming Languages">
        <SkillsContainer>
          <Element.Label>Java</Element.Label>
          <Element.Label>JavaScript</Element.Label>
          <Element.Label>TypeScript</Element.Label>
          <Element.Label>Python</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Back-end Technologies">
        <SkillsContainer>
          <Element.Label>Spring Boot</Element.Label>
          <Element.Label>Spring Cloud</Element.Label>
          <Element.Label>NestJs</Element.Label>
          <Element.Label>Hibernate</Element.Label>
          <Element.Label>Reactor</Element.Label>
          <Element.Label>WebFlux</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Front-end Technologies">
        <SkillsContainer>
          <Element.Label>ReactJs</Element.Label>
          <Element.Label>React Native</Element.Label>
          <Element.Label>Redux</Element.Label>
          <Element.Label>Ionic</Element.Label>
          <Element.Label>NextJs</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Machine Learning">
        <SkillsContainer>
          <Element.Label>Keras</Element.Label>
          <Element.Label>PyTorch</Element.Label>
          <Element.Label>Tensorflow</Element.Label>
          <Element.Label>Scipy</Element.Label>
          <Element.Label>Pandas</Element.Label>
          <Element.Label>Scikit-learn</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Database & Queue">
        <SkillsContainer>
          <Element.Label>MySQL</Element.Label>
          <Element.Label>PostgreSQL</Element.Label>
          <Element.Label>MongoDB</Element.Label>
          <Element.Label>SQL Server</Element.Label>
          <Element.Label>Redis</Element.Label>
          <Element.Label>RabbitMq</Element.Label>
          <Element.Label>Kafka</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="DevOps">
        <SkillsContainer>
          <Element.Label>Git</Element.Label>
          <Element.Label>Docker</Element.Label>
          <Element.Label>Kubernetes</Element.Label>
          <Element.Label>Jenkins</Element.Label>
          <Element.Label>Prometheus</Element.Label>
          <Element.Label>Grafana</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Architectural Concepts">
        <SkillsContainer>
          <Element.Label>Domain Driven Design</Element.Label>
          <Element.Label>Microservices</Element.Label>
          <Element.Label>CQRS</Element.Label>
          <Element.Label>Event-Sourcing</Element.Label>
          <Element.Label>Load Balancing</Element.Label>
          <Element.Label>OAuth</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
      <Element.CompactSegment title="Cloud Platforms">
        <SkillsContainer>
          <Element.Label>Dialogflow</Element.Label>
          <Element.Label>BigQuery</Element.Label>
          <Element.Label>Firebase</Element.Label>
          <Element.Label>ECS</Element.Label>
          <Element.Label>Lambda</Element.Label>
          <Element.Label>S3</Element.Label>
          <Element.Label>LightSail</Element.Label>
          <Element.Label>Rekognition</Element.Label>
        </SkillsContainer>
      </Element.CompactSegment>
    </div>
  </Element.Segment>
);

const SkillsContainer = ({ children }: any) => (
  <div className="flex items-center flex-wrap mt-4 gap-4">{children}</div>
);
