import React from "react";
import "../../Stylesheets/capabilities.css";

function Capabilities() {
  return (
    <div className="capabilities-container">
      <h2>Capabilities</h2>
      <h3>Technical Skills</h3>
      <ul>
        <li>Proficient in Java and Python programming languages</li>
        <li>Experience with front-end web development using HTML, CSS, and JavaScript</li>
        <li>Experience with back-end web development using Node.js and MongoDB</li>
        <li>Experience with data analysis using Python libraries such as NumPy and Pandas</li>
        <li>Experience with machine learning algorithms and frameworks such as TensorFlow and Scikit-learn</li>
      </ul>

      <h3>Professional Experience</h3>
      <h4>Software Engineer - Acme Corporation</h4>
      <p>September 2021 - Present</p>
      <ul>
        <li>Developed and maintained web applications using Java and Spring Framework</li>
        <li>Designed and implemented REST APIs for various projects</li>
        <li>Collaborated with cross-functional teams to deliver high-quality software products</li>
        <li>Identified and fixed software defects to improve product quality</li>
      </ul>

      <h4>Data Analyst - XYZ Corporation</h4>
      <p>June 2020 - August 2021</p>
      <ul>
        <li>Analyzed large datasets using Python libraries such as Pandas and NumPy</li>
        <li>Developed and maintained ETL pipelines using Python and SQL</li>
        <li>Created interactive data visualizations using Python libraries such as Matplotlib and Seaborn</li>
        <li>Collaborated with cross-functional teams to provide insights and recommendations based on data analysis</li>
      </ul>
    </div>
  );
}

export default Capabilities;
