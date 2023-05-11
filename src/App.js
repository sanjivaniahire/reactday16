import ProfileCard from  "./component/Atoms/ProfileCard";
import styles from './component/Atoms/ProfileCard.module.css'


function App() {
  return (
    <div className={styles.box}>
    <div className={styles.cardContainer}>
      <ProfileCard
        image="https://randomuser.me/api/portraits/men/33.jpg"
        designation="Web Developer"
        name="John Carlos"
        jobDescription= "Software engineer with a passion for creating clean, efficient code and developing innovative solutions."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/women/3.jpg"
        designation="Software Engineer"
        name="Sanjivani Ahire"
        jobDescription="Software engineer with a passion for creating clean, efficient code and developing innovative solutions."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/men/47.jpg"
        designation="UI/UX Designer"
        name="Arias Roy"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/men/88.jpg"
        designation="UI/UX Designer"
        name="Rajiv Singh"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/women/19.jpg"
        designation="UI/UX Designer"
        name="Neeta Kapoor"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/women/66.jpg"
        designation="UI/UX Designer"
        name="Neha Yadav"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
       <ProfileCard
        image="https://randomuser.me/api/portraits/women/79.jpg"
        designation="UI/UX Designer"
        name="Shanaya Deshmukh"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
       <ProfileCard
        image="https://randomuser.me/api/portraits/women/87.jpg"
        designation="UI/UX Designer"
        name="Priya Sen"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
    </div>
    </div>
  );
}

export default App;
