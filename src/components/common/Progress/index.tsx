import React from 'react'
import styles from "./Progress.module.scss"

export default function CommonProgress({progress}: Progress) {
  return (
    <div className={styles.progressMain}>
        <progress className="progress progress-success w-56" value={progress} max="100"></progress>
    </div>
  )
};
