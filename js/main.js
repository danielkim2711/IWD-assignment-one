function pihaClick() {
  window.open('http://www.piha.co.nz', '_blank');
}

function replayBtn() {
  let selectedDiv = document.getElementById('part-2');
  let newDiv = selectedDiv.cloneNode(true);
  selectedDiv.parentNode.replaceChild(newDiv, selectedDiv);
}

const summaryList = document.getElementById('summary');
new URLSearchParams(window.location.search).forEach((value, name) => {
  summaryList.append(`${name}: ${value}`);
  summaryList.append(document.createElement('br'));
});
