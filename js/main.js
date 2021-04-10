function pihaClick() {
    window.open('http://www.piha.co.nz', '_blank');
}

function replayBtn() {
    var selectedDiv = document.getElementById('part-2');
    var newDiv = selectedDiv.cloneNode(true);
    selectedDiv.parentNode.replaceChild(newDiv, selectedDiv);

}

const summaryList = document.getElementById('summary')
new URLSearchParams(window.location.search).forEach((value, name) => {
    summaryList.append(`${name}: ${value}`)
    summaryList.append(document.createElement('br'))
})