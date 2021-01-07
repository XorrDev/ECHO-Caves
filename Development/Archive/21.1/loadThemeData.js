chrome.storage.local.get('CustomThemeJSON', function(result) {
    CustomJSON = JSON.stringify(result.CustomThemeJSON);
    CustomData = JSON.parse(CustomJSON);
    if(CustomData !== "undefined" || CustomData !== "") {
        loadTheme();
    }
    else {
        alert("[EC] Problems occured loading custom theme data. Please try again.");
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

    document.documentElement.style.setProperty("--PrimaryMenuColor", CustomData.Menu.NewPrimaryMenuColor);
    document.documentElement.style.setProperty("--SecondaryMenuColor", CustomData.Menu.NewSecondaryMenuColor);
}
