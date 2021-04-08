function handleResponse(obj) {
    let parent = document.getElementById('res');
    if (obj.status.code == 0) {
        removeChild(parent)
        parent.appendChild(createNodeChild("p", `Polarity : ${findPolarity(obj.score_tag)}`));
        parent.appendChild(createNodeChild("p", `Agreement : ${obj.agreement}`));
        parent.appendChild(createNodeChild("p", `Subjectivity : ${obj.subjectivity}`));
        parent.appendChild(createNodeChild("p", `Confidence : ${obj.confidence}`));
        parent.appendChild(createNodeChild("p", `Irony : ${obj.irony}`));
        document.getElementById('results').style.display = "block";

    }
    else {
        removeChild(parent)
        parent.appendChild(createNodeChild("p", `Error : ${obj.status.msg}`));
        document.getElementById('results').style.display = "block";
    }
}

function createNodeChild(node, txt) {
    let child = document.createElement(node);
    let textnode = document.createTextNode(txt);
    child.appendChild(textnode);
    return child;
}

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function findPolarity(val) {
    let polarity;
    switch (val) {
        case "P+":
            polarity = "Strong positive";
            break;
        case "P":
            polarity = "Positive";
            break;
        case "NEU":
            polarity = "Neutral";
            break;
        case "N":
            polarity = "Negative";
            break;
        case "N+":
            polarity = "Strong negative";
            break;
        case "NONE":
            polarity = "Without polarity";
            break;
    }
    return polarity;
}


export {
    handleResponse
}