import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Layover({ onClose, data }) {
  const layoverStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    backgroundColor: 'grey',
    color: '#000', // Text color black
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 9999
  };

  return (
    <div style={layoverStyle}>
      <div>
        <h2>{data.NAME}</h2>
        <p>Projects: {data.Projects}</p>
        <p>Tasks: {data.Tasks}</p>
        <p>Hours Logged: {data.timeSpent}</p>
      </div>
      <button onClick={onClose}>Close Layover</button>
    </div>
  );
}

Layover.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    NAME: PropTypes.string.isRequired,
    Projects: PropTypes.string.isRequired,
    Tasks: PropTypes.string.isRequired,
    timeSpent: PropTypes.string.isRequired
  }).isRequired
};

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ceq-xpertise-manager-dev.azurewebsites.net/api/v2/reports/users/0/0');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseLayover = () => {
    setSelectedItem(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {selectedItem && (
        <Layover onClose={handleCloseLayover} data={selectedItem} />
      )}
      <div>
        <h2>Report Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Projects</th>
              <th>Tasks</th>
              <th>Hours Logged</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td onClick={() => handleItemClick(item)}>{item.NAME}</td>
                <td>{item.Projects}</td>
                <td>{item.Tasks}</td>
                <td>{item.timeSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
