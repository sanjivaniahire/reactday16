import React from "react";
import styles from './ProfileCard.module.css'

function ProfileCard(props) {
  const { image, designation, name, jobDescription } = props;

  function handleClick() {
    alert(name);
  };

  return (
    <>
      
      <div className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.cardBody}>
      <h4 className={styles.cardSubtitle}>{designation}</h4>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardText}>{jobDescription}</p>
        <button onClick={handleClick}>See More</button>
      </div>
    </div>
    
   </>
  );
}

export default ProfileCard;