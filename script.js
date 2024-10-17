const numRows = 50;
const numCols = 10;

// Function to generate random text
function generateRandomText() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const textLength = 10;
  for (let i = 0; i < textLength; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Function to create flowchart rows and columns dynamically with random text
function generateFlowchart() {
  const flowchart = document.getElementById('flowchart');

  // Generate rows
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= numCols; j++) {
      const column = document.createElement('div');
      column.classList.add('column', `row-${i}`, `col-${j}`);
      column.textContent = `Row ${i} - Col ${j}: ${generateRandomText()}`;
      flowchart.appendChild(column);
    }
  }
}

// Function to create toggle controls for rows and columns
function generateControls() {
  const rowControls = document.getElementById('row-controls');
  const colControls = document.getElementById('column-controls');

  // Create row toggle buttons
  for (let i = 1; i <= numRows; i++) {
    const rowButton = document.createElement('button');
    rowButton.textContent = `Toggle Row ${i}`;
    rowButton.onclick = () => toggleRow(i);
    rowControls.appendChild(rowButton);
  }

  // Create column toggle buttons
  for (let j = 1; j <= numCols; j++) {
    const colButton = document.createElement('button');
    colButton.textContent = `Toggle Column ${j}`;
    colButton.onclick = () => toggleColumn(j);
    colControls.appendChild(colButton);
  }
}

// Function to toggle a specific row
function toggleRow(rowNumber) {
  const rowElements = document.getElementsByClassName(`row-${rowNumber}`);
  for (let element of rowElements) {
    element.classList.toggle('hidden');
  }
}

// Function to toggle a specific column
function toggleColumn(colNumber) {
  const colElements = document.getElementsByClassName(`col-${colNumber}`);
  for (let element of colElements) {
    element.classList.toggle('hidden');
  }
}

// Generate the flowchart and controls on page load
generateFlowchart();
generateControls();
