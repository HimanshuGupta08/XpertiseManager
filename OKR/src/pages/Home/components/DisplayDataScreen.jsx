// DisplayDataScreen component
import React from 'react';

function DisplayDataScreen({ submittedData }) {
  return (
    <div>
      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Title: {submittedData.title}</p>
          <p>Objectives: {submittedData.objectives}</p>
          {/* Display other form fields as needed */}
        </div>
      )}
    </div>
  );
}

export default DisplayDataScreen;
