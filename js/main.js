function pihaClick() {
    window.open('http://www.piha.co.nz', '_blank');
}

function replayBtn() {
    var selectedDiv = document.getElementById('part-2');
    var newDiv = selectedDiv.cloneNode(true);
    selectedDiv.parentNode.replaceChild(newDiv, selectedDiv);

}

const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append('')
})