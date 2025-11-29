body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
}

header {
  background-color: #007BFF;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
}

.dashboard {
  display: flex;
  justify-content: space-around;
  margin: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  flex: 1 1 200px;
  min-width: 200px;
}

.card h2 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: #333;
}

.stat {
  font-size: 2em;
  font-weight: bold;
  color: #007BFF;
  margin-bottom: 10px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.chart-container {
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
