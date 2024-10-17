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
    // Create row toggle button
    const rowToggle = document.createElement('button');
    rowToggle.classList.add('button-small', 'row-toggle');
    rowToggle.textContent = `Row ${i}`;
    rowToggle.onclick = () => toggleRow(i);
    flowchart.appendChild(rowToggle);

    for (let j = 1; j <= numCols; j++) {
      if (i === 1) {
        // Create column toggle button for the first row
        const colToggle = document.createElement('button');
        colToggle.classList.add('button-small', 'col-toggle');
        colToggle.textContent = `Col ${j}`;
        colToggle.onclick = () => toggleColumn(j);
        flowchart.appendChild(colToggle);
      }
      
      const column = document.createElement('div');
      column.classList.add('column', `row-${i}`, `col-${j}`);
      column.textContent = `Row ${i} - Col ${j}: ${generateRandomText()}`;
      flowchart.appendChild(column);
    }
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
