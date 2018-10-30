// TODO: cancel on escape
// TODO: remove event handler on cancel

var hoverElement = null;
var oldBackground = null;

function resetHover() {
    if (hoverElement != null && oldBackground != null) {
        hoverElement.style.backgroundColor = oldBackground;
    }
    hoverElement = null;
    oldBackground = null;
}

window.onmouseover = function(e) {
    if (hoverElement != null) {
        resetHover()
    }

    hoverElement = e.target;
    oldBackground = hoverElement.style.backgroundColor;
    hoverElement.style.backgroundColor = "red";
};

function hideOthers(clicked, searchNode) {
    for (let node of searchNode.children) {
        if (node !== clicked) {
            node.style.display = "none";
            hideOthers(clicked, node);
        }
    }
}

window.onclick = function(e) {
    resetHover();

    clicked = e.target;

    hideOthers(clicked, document.body);
    
    clicked.style.margin = 0;
    clicked.style.height = "100%";
    clicked.style.width = "100%";
    
    document.body.appendChild(clicked);
}
