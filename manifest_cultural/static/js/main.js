var dualListBox;

$(document).ready(function(event) {
    dualListBox = new DualListbox('.demo');
});

function generateEventList() {
    // plain js
    document.getElementById('genlist').innerHTML = dualListBox.selectedList.innerText

    // or the same thing using jquery:
    //$('#genlist').html(dualListBox.selectedList.innerText);
}

