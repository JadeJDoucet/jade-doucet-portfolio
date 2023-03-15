import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Experience = () => {
  return (
    <div className="experience-container">
      <Fade bottom>
        <h2>Experience</h2>
      </Fade>
      <Zoom>
        <div className="experience-card">
          <h3>Senior Front-End Engineer, Preem (start-up)</h3>
          <p>Aug. 2022 - Current</p>
          <ul>
            <li>
              Build and deploy React Native application to both iOS App Store and Google Play Store within a month of starting
              greenfield project in order to gain user traffic and to start acquiring user feedback
            </li>
            <li>
              Implement Redux API architecture with Redux Toolkit in TypeScript and React/React Native environments to establish
              organized code patterns enabling quicker ramp-up for new engineers
            </li>
            <li>
              Integrate Google Analytics and Crashylitics into React Native project to allow user tracking throughout the application and
              supply focus areas for future product development
            </li>
            <li>
              Create mobile screens and components with React Native based on Figma designs to build out initial product
            </li>
          </ul>
        </div>
      </Zoom>
      <Zoom>
        <div className="experience-card">
          <h3>Software Engineer, Symmetry Systems (start-up)</h3>
          <p>Feb. 2022 - Aug. 2022</p>
          <ul>
            <li>
              Constructed data visualizations in React of operations and permissions between AWS Accounts, GCP Projects, and Azure
              Subscriptions with their respective data stores using Python to create server endpoints, allowing quick identification of
              at-risk data and potential bad actors in cloud environments
            </li>
            <li>
              Connected GraphQL data sources to APIs while creating Queries and Mutations to be used with GQL Resolvers in React
              components, resulting in more user features and retention of clients investing over $500k per year
            </li>
            <li>
              Collected user feedback and translated it to user stories to be used in Agile methodology, and successfully executed
              tasks within the stories involving reimplementation of ElasticSearch dashboards into React web pages within SaaS product
            </li>
          </ul>
        </div>
      </Zoom>
      <Zoom>
        <div className="experience-card">
          <h3>Senior Front-End Engineer, ALFI Inc (start-up)</h3>
          <p>June 2021 - Feb 2022</p>
          <ul>
            <li>
              Re-architectured React Native application and Kotlin modules to reduce resource consumption which improved
              application up-time and reduced device crashes to &lt;4% (previously &gt;40%)
            </li>
            <li>
              Broke down a single application context into smaller, more manageable contexts to reduce application re-renders which
              reduced time between user interactions by 200-500ms
            </li>
            <li>
              Rebuilt legacy application into modern React with Functional Components and React Hooks, drastically reducing load
              times between web pages by &gt;450ms
            </li>
            <li>
              Converted Java classes and code snippets into Kotlin to integrate AI/ML modules, allowing approximations of user age
            </li>
          </ul>
        </div>
      </Zoom>
      </div>
  );
};

export default Experience;