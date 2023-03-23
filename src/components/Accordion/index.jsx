import React, { useState } from "react";
import styles from "./accordion.module.css";

const Accordion = ({ index, title, content, activeKey, setActiveKey }) => {
  //   const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion__item}>
      <div
        className={styles.accordion__title}
        onClick={() => setActiveKey(activeKey === index ? -1 : index)}
      >
        <div>{title}</div>
        <div>{index === activeKey ? "-" : "+"}</div>
      </div>
      {index === activeKey && (
        <div className={styles.accordion__content}>{content}</div>
      )}
    </div>
  );
};

export default Accordion;
