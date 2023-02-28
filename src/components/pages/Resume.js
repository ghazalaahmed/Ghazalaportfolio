import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
      You can find my resume here: <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/Ghazala resume.pdf"}> My resume</a>
      </p>
    </div>
  );
}
