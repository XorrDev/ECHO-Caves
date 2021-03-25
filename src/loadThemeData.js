
chrome.storage.local.get('Checked', function (result) {
    ECInitial = true;
    if(typeof result.Checked !== 'undefined') {
        console.log('%c[EC] Theme state: ' + result.Checked, 'color: #00FF00');
        CheckedJSON = JSON.stringify(result.Checked);
        CheckedValue = JSON.parse(CheckedJSON);
        if(CheckedValue == true) {
            chrome.storage.local.get('CustomThemeJSON', function(result) {
                try {
                    CustomJSON = JSON.stringify(result.CustomThemeJSON);
                    CustomData = JSON.parse(CustomJSON);
                    loadTheme();
                    removeInlineStyles();
                    console.log('%c[EC] Loading custom theme.', 'color: #00FF00');
                } catch {
                    console.log('%c[EC] Loading default theme.', 'color: #00FF00');
                }
            });
            getThemeStyleSheet();
        }
    } else if(ECInitial == true) {
        ECInitial = false;
        getThemeStyleSheet();
        console.log('%c[EC] Theme state: ' + result.Checked + '\nInitializing Theme State to true. ', 'color: #FF8000');
    }
}); 
function loadTheme() {
    document.documentElement.style.setProperty("--PrimaryBackgroundColor", CustomData.Background.NewPrimaryBackgroundColor);
    document.documentElement.style.setProperty("--SecondaryBackgroundColor", CustomData.Background.NewSecondaryBackgroundColor);
    document.documentElement.style.setProperty("--TertiaryBackgroundColor", CustomData.Background.NewTertiaryBackgroundColor);
    document.documentElement.style.setProperty("--QuaternaryBackgroundColor", CustomData.Background.NewQuaternaryBackgroundColor);
    document.documentElement.style.setProperty("--QuinaryBackgroundColor", CustomData.Background.NewQuinaryBackgroundColor);
    document.documentElement.style.setProperty("--PrimaryTextColor", CustomData.Text.NewPrimaryTextColor);
    document.documentElement.style.setProperty("--SecondaryTextColor", CustomData.Text.NewSecondaryTextColor);
    document.documentElement.style.setProperty("--PrimaryAccentTextColor", CustomData.Text.NewPrimaryAccentTextColor);
    document.documentElement.style.setProperty("--SecondaryAccentTextColor", CustomData.Text.NewSecondaryAccentTextColor);
    document.documentElement.style.setProperty("--PrimaryGradeColor", CustomData.Grade.NewPrimaryGradeColor);
    document.documentElement.style.setProperty("--SecondaryGradeColor", CustomData.Grade.NewSecondaryGradeColor);
    document.documentElement.style.setProperty("--TertiaryGradeColor", CustomData.Grade.NewTertiaryGradeColor);
    document.documentElement.style.setProperty("--TertiaryGaugeTransparency", CustomData.Background.NewTertiaryBackgroundColor + 'BF');
    document.documentElement.style.setProperty("--PrimaryMenuColor", CustomData.Menu.NewPrimaryMenuColor);
    document.documentElement.style.setProperty("--SecondaryMenuColor", CustomData.Menu.NewSecondaryMenuColor);
}
function getThemeStyleSheet() {
    var LoadedTheme = chrome.extension.getURL("ConvertedPageTheme.css");
    document.head.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\""+LoadedTheme+"\">";
}
