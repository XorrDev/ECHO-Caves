document.getElementById("Confirm").addEventListener("click", Confirm);
document.getElementById("Confirm").addEventListener("click", Confirm);
document.getElementById("Confirm").addEventListener("click", Confirm);
document.getElementById("Confirm").disabled = true;
document.getElementById("Confirm").style = "background-color:#333F54;color:#B3B3B3;";
document.getElementById("currentGrade").addEventListener("input", CalculateAccess);
document.getElementById("targetGrade").addEventListener("input", CalculateAccess);
document.getElementById("assignmentWeight").addEventListener("input", CalculateAccess);
document.getElementById("checkbox").addEventListener("input", Checked);
document.getElementById("Calculate").addEventListener("click", Calculate);
document.getElementById("ClearInput").addEventListener("click", ClearInput);
document.getElementById("Calculate").disabled = true;
document.getElementById("Calculate").style = "background-color:#333F54;color:#B3B3B3;";
document.getElementById("ThemeLoader").style = "background-color:#527ac4;color:#FFFFFF;";
document.getElementById("OtherFeaturesBody").style = "display:none;";
document.getElementById("Revert").addEventListener("click", Revert);
document.getElementById("inputTheme").addEventListener("input", ConfirmAccess);
document.getElementById("licenseLink").addEventListener("click", openLicense);
document.getElementById("exitLicense").addEventListener("click", exitLicense);
document.getElementById("developersLink").addEventListener("click", openDevelopers);
document.getElementById("exitDevelopers").addEventListener("click", exitDevelopers);
document.getElementById("ThemeLoader").addEventListener("click", ThemeLoader);
document.getElementById("OtherFeatures").addEventListener("click", OtherFeatures);
//document.getElementById("checkbox").disabled = true;
var previousData;
var lenCurrentGrade;
var lenTargetGrade;
var lenAssignmentWeight;
function Confirm() {
    var json = document.getElementById("inputTheme").value;
    var jsonParsed;
    previousData = json;
    if (json !== "") {
        document.getElementById("Confirm").disabled = true;
        document.getElementById("Confirm").style = "background-color:#333F54;color:#B3B3B3;";
        try {
            jsonParsed = JSON.parse(json);
            chrome.storage.local.set({
                CustomThemeJSON: jsonParsed
            });
            document.getElementById("errTheme").style = "color:#5aff47;";
            document.getElementById("errTheme").innerHTML = "Reload tab to apply changes.";
            document.getElementById("Revert").removeAttribute("disabled");
            document.getElementById("Revert").style = "background-color:#5A6E92;color:#FFFFFF;";
        } catch (error) {
            document.getElementById("errTheme").style = "color:#ff5a47;";
            document.getElementById("errTheme").innerHTML = "[err: 2] Error parsing theme. Try again.";
        }
    }
}
function ConfirmAccess() {
    var input = document.getElementById("inputTheme").value;
    if (input.length != 0) {
        document.getElementById("Confirm").removeAttribute("disabled");
        document.getElementById("Confirm").style = "background-color:#5A6E92;color:#FFFFFF;";
    } else {
        document.getElementById("Confirm").disabled = true;
        document.getElementById("Confirm").style = "background-color:#333F54;color:#B3B3B3;";
        document.getElementById("errTheme").innerHTML = "";
    }
}
function Revert() {
    chrome.storage.local.clear(function() {
        var error = chrome.runtime.lasterror;
        if (error) {
            document.getElementById("errTheme").innerHTML = "[err: 1] Error loading default theme.";
        } else {
            document.getElementById("Revert").disabled = true;
            document.getElementById("Revert").style = "background-color:#333F54;color:#B3B3B3;";
            document.getElementById("errTheme").style = "color:#5aff47;";
            document.getElementById("errTheme").innerHTML = "Reload tab to apply changes.";
        }
    });
}
function openLicense() {
    document.getElementById("bottomIcons").style = "visibility: hidden;"
    document.getElementById('mainLicense').style = "visibility: visible;";
    document.getElementById("errTheme").innerHTML = "";
}
function exitLicense() {
    document.getElementById('mainLicense').style = "visibility: hidden;";
    document.getElementById("bottomIcons").style = "visibility: visible;"
}
function openDevelopers() {
    document.getElementById("bottomIcons").style = "visibility: hidden";
    document.getElementById('mainDevelopers').style = "visibility: visible;";
    document.getElementById("errTheme").innerHTML = "";
}
function exitDevelopers() {
    document.getElementById('mainDevelopers').style = "visibility: hidden;";
    document.getElementById("bottomIcons").style = "visibility: visible;";
}
function ThemeLoader() {
    document.getElementById("OtherFeaturesBody").style = "display:none;opacity:0;";
    document.getElementById("ThemeLoaderBody").style = "display:show;opacity:1;";
    document.getElementById("ThemeLoader").style = "background-color:#527ac4;color:#FFFFFF;";
    document.getElementById("OtherFeatures").style = "background-color:#5A6E92;color:#FFFFFF;";
}
function OtherFeatures() {
    document.getElementById("ThemeLoaderBody").style = "display:none;";
    document.getElementById("OtherFeaturesBody").style = "display:show;";
    document.getElementById("ThemeLoader").style = "background-color:#5A6E92;color:#FFFFFF;";
    document.getElementById("OtherFeatures").style = "background-color:#527ac4;color:#FFFFFF;";
}
function Calculate() {
    var currentGrade = document.getElementById("currentGrade").value / 100;
    var targetGrade = document.getElementById("targetGrade").value / 100;
    var assignmentWeight = document.getElementById("assignmentWeight").value / 100;
    var grossGrade = ((targetGrade - (1 - assignmentWeight) * currentGrade) / assignmentWeight) * 100;
    var finalGrade = grossGrade.toFixed(1);
    if (isNaN(finalGrade)) {
        document.getElementById("errCalc").style = "color:#ff5a47;";
        document.getElementById("errCalc").innerHTML = "[err: 4] Input invalid. Please try again.";
    } else {
        document.getElementById("score").innerHTML = finalGrade + "%";
    }
}
function CalculateAccess() {
    switch (this.id) {
        case "currentGrade":
            lenCurrentGrade = document.getElementById("currentGrade").value;
            break;
        case "targetGrade":
            lenTargetGrade = document.getElementById("targetGrade").value;
            break;
        case "assignmentWeight":
            lenAssignmentWeight = document.getElementById("assignmentWeight").value;
            break;
    }
    if (lenCurrentGrade && lenTargetGrade && lenAssignmentWeight) {
        document.getElementById("Calculate").removeAttribute("disabled");
        document.getElementById("Calculate").style = "background-color:#5A6E92;color:#FFFFFF;";
    } else {
        document.getElementById("Calculate").disabled = true;
        document.getElementById("Calculate").style = "background-color:#333F54;color:#B3B3B3;";
        document.getElementById("errCalc").innerHTML = "";
    }
}
function ClearInput() {
    document.getElementById("Calculate").disabled = true;
    document.getElementById("Calculate").style = "background-color:#333F54;color:#B3B3B3;";
    document.getElementById("errCalc").innerHTML = "";
    document.getElementById("score").innerHTML = "...";
    document.getElementById("currentGrade").value = "";
    document.getElementById("targetGrade").value = "";
    document.getElementById("assignmentWeight").value = "";
}
function Checked() {
    var checkedBool = document.getElementById("checkbox").checked;
    chrome.storage.local.set({
        Checked: checkedBool
    });
    document.getElementById("errTheme").style = "color:#5aff47;";
    document.getElementById("errTheme").innerHTML = "Reload tab to apply changes.";
}
chrome.storage.local.get('Checked', function(result) {
    if (typeof result.Checked !== 'undefined') {
        CheckedJSON = JSON.stringify(result.Checked);
        CheckedValue = JSON.parse(CheckedJSON);
        document.getElementById("checkbox").checked = CheckedValue;
    } else {
        chrome.storage.local.set({
            Checked: true
        });
    }
});