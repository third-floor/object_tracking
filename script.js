function toggleRow(rowId) {
  const row = document.getElementById(rowId);
  row.classList.toggle('hidden');
}

function toggleColumn(columnClass) {
  const columns = document.getElementsByClassName(columnClass);
  for (let column of columns) {
    column.classList.toggle('hidden');
  }
}
