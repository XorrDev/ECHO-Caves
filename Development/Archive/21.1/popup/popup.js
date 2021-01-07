document.getElementById("Confirm").addEventListener("click", Confirm);
document.getElementById("Confirm").addEventListener("click", Confirm);
document.getElementById("Confirm").disabled = true;
document.getElementById("Confirm").style = "background-color:#333f54;color:#B3B3B3;";
document.getElementById("Confirm").addEventListener("click", Confirm);

document.getElementById("Revert").addEventListener("click", Revert);

document.getElementById("inputText").addEventListener("input", ConfirmAccess);

document.getElementById("licenseLink").addEventListener("click", openLicense);
document.getElementById("exitLicense").addEventListener("click", exitLicense);
//document.getElementById("checkbox").disabled = true;

var previousData;

function Confirm() {
    var json = document.getElementById("inputText").value;
    var jsonParsed;
    previousData =json;
    if(json !== "") {
        document.getElementById("Confirm").disabled = true;
        document.getElementById("Confirm").style = "background-color:#333f54;color:#B3B3B3;";
        try {
        jsonParsed = JSON.parse(json);
        chrome.storage.local.set({CustomThemeJSON: jsonParsed});
        document.getElementById("err").style = "color:#5aff47;";
        document.getElementById("err").innerHTML = "Custom theme loaded! Refresh the page.";
        document.getElementById("Revert").removeAttribute("disabled");
        document.getElementById("Revert").style = "background-color:#5a6e92;color:#FFFFFF;";
        } catch(error) {
            document.getElementById("err").style = "color:#ff5a47;";
            document.getElementById("err").innerHTML = "Not in JSON format. Try again.";
        }
    }
}
function Revert() { {
    chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            document.getElementById("err").innerHTML = "Error loading default data. Try again.";
        } else {
            document.getElementById("Revert").disabled = true;
            document.getElementById("Revert").style = "background-color:#333f54;color:#B3B3B3;";
            document.getElementById("err").style = "color:#5aff47;";
            document.getElementById("err").innerHTML = "Default theme loaded! Refresh the page.";
        }
    });
}}

function ConfirmAccess() {
    var input = document.getElementById("inputText").value;
    if(input === previousData) {
        document.getElementById("Confirm").style = "background-color:#333f54;color:#B3B3B3;";
        document.getElementById("err").style = "color:#ff5a47;";
        document.getElementById("err").innerHTML = "You already loaded this data!";
    } else if(input.length != 0) {
        document.getElementById("Confirm").removeAttribute("disabled");
        document.getElementById("Confirm").style = "background-color:#5a6e92;color:#FFFFFF;";
    } else {
        document.getElementById("Confirm").style = "background-color:#333f54;color:#B3B3B3;";
        document.getElementById("err").innerHTML = "";
    }
}


function openLicense() {
    document.getElementById('mainLicense').style = "visibility: visible;";
    document.getElementById("err").innerHTML = "";

}

function exitLicense() {
    document.getElementById('mainLicense').style = "visibility: hidden;";
}