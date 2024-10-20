import React  , {useRef} from 'react';
import Header from './components/Header';
import ProfileContent from './components/ProfileContent/ProfileContent';
import ProgrammingLanguages from './components/ProgrammingLanguages/ProgrammingLanguages';
import ProjectPortfolio from './components/ProjectPortfolio/ProjectPortfolio';
import './index.css';
import OrganizationalExperiences from './components/OrganizationalExperiences/OrganizationalExperiences';
import ContactList from './components/ContactList/ContactList';



const App: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const orgExperiencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return(
    <div className="App">
      <Header 
       projectsRef = {projectsRef}
       orgExperiencesRef = {orgExperiencesRef}
       contactRef = {contactRef}
      />
      <ProfileContent />
      <ProgrammingLanguages />
      <ProjectPortfolio ref={projectsRef}/>
      <OrganizationalExperiences ref={orgExperiencesRef}/>

      <ContactList ref={contactRef} />
    </div>
  )
}

export default App;
