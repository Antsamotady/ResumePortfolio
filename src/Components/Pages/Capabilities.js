import React from "react";
import "../../Stylesheets/capabilities.css";

function Capabilities() {
  return (
    <div className="app-container">
      <div className="capabilities-container">
        <div className="job-position">
          <h2>Web Development</h2>
          <div className="tasks">
            <div className="task">
              <h3>Laravel</h3>
              <p>Login; Form validation; Password resetting; Listing; Live search; Navigation menu; Dynamic DB update via AJAX...</p>
            </div>
            <div className="task">
              <h3>Symfony</h3>
              <p>Docker containerization; Debugging and Troubleshooting; Application security with login rate limiting and URL obfuscation; Deployment; Remotely managing app through APIs...</p>
            </div>
            <div className="task">
              <h3>Reactjs</h3>
              <p>Portfolio design; <span>Mini app</span></p>
            </div>
          </div>
        </div>

        <div className="job-position">
          <h2>Linux Programming</h2>
          <div className="tasks">
            <div className="task">
              <h3>Bash programming</h3>
              <p>Creating a script to automate page downloads; Cron automation; Web page parsing and data extraction; Database table optimization and data purification; Data integrity checks...</p>
            </div>
          </div>
        </div>

        <div className="job-position">
          <h2>CIO Assistant</h2>
          <div className="tasks">
            <div className="task">
              <h3>System and Network Engineering</h3>
              <p>Operating system installation; Structured network cabling; Firewall rule-based filtering of network connections...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
