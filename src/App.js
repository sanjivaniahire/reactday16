import ProfileCard from './component/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="card-container">
    <ProfileCard 
    image="https://xsgames.co/randomusers/assets/avatars/male/30.jpg"
    designation="Data Scientist"
    name=" John Carlos"
    jobDescription="Data Scientists are responsible for leveraging their programming skills to develop automated systems that help companies improve business operations."
    />
    <ProfileCard 
    image="https://xsgames.co/randomusers/assets/avatars/male/24.jpg"
    designation="Java Developer"
    name=" Ramson Jacob"
    jobDescription="A Java Developer is responsible for designing, implementing, and maintaining Java-based software and applications,  contributing to all stages of the software development."
    />
    <ProfileCard 
    image="https://xsgames.co/randomusers/assets/avatars/male/23.jpg"
    designation="Flutter Developer"
    name=" David Johnson"
    jobDescription="Flutter Developer Job Description Template. Flutter developers work on cross platform mobile app development, and can create an amazing UI for your application."
    />
    </div>
  );
}

export default App;
