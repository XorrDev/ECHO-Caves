# ECHO-Caves


![Echo Caves](https://lh3.googleusercontent.com/PjNgv-Zmh2VRaI3jSZ5FsQv5OczwML7wS5zcnHe6IpgzgOcK5eyZRJRizDV6PupDon47T-fHRBJ3kuxZo6bc3LcxGLU=w640-h400-e365-rj-sc0x00ffffff)

Find it on the (Chrome Web Store)[https://chrome.google.com/webstore/detail/echo-caves-alpha/ibjaciendmijpaipiblmkgjpjiaklgpf].

ECHO Caves is a reverse engineered dark mode built by a former New Tech student solely for the Agilix Buzz Echo Portal provided to the New Tech Schools. The idea behind this project was to create a flexible and lightweight option to add a 3rd party dark mode on top of the existing framework. It accomplishes this by injecting css files directly into the echo page under any echo domain. If you are a student or member of the New Tech / NTN network, feel free to contribute to this source code. 

(This makes for a pretty damn good Senior Project / Senior Defense)

#### Though I no longer attend a New Tech School, I will maintain this project along with my brother(s) who are still attending. If you have any questions or would like to discuss more about this project, feel free to email xorrdev@gmail.com.

## Theme Codes

Theme codes are written in JSON (JavaScript Object Notation). When a theme code is passed through the ECHO Caves menu, it is parsed and injected into CSS root variables to then be interpreted by the stylesheet.  

Parent Keys are required for each category,. For example,  `"Background":`  is an example of the Parent Key for all Background key : value pairs:
```json
"Background":{"NewPrimaryBackgroundColor":"#282A36",
```


Writing Theme Codes is very simple; each theme code requires the following key : value pairs:
*The values shown below are examples, they can be any RGB hex code.*

#### Background

|JSON key     |JSON Value                       |Raw JSON                         |
|------------------|-------------------------------|-----------------------------|
| `NewPrimaryBackgroundColor`|eg. `#181818`|`"NewPrimaryBackgroundColor":"#181818"`|
|`NewSecondaryBackgroundColor`|eg. `#282828`|`"NewSecondaryBackgroundColor":"#282828"`|
|`NewTertiaryBackgroundColor`|eg. `#383838` |`"NewTertiaryBackgroundColor":"#383838"`|
|`NewQuaternaryBackgroundColor`|eg. `#484848` |`"NewQuaternaryBackgroundColor":"#484848"`|
|`NewQuinaryBackgroundColor`|eg. `#585858` |`"NewQuinaryBackgroundColor":"#585858"`|

#### Text

|JSON key     |JSON Value                       |Raw JSON                         |
|------------------|-------------------------------|-----------------------------|
|`NewPrimaryTextColor`|eg. `#ffffff`|`"NewPrimaryBackgroundColor":"#181818"`|
|`NewSecondaryTextColor`|eg. `#B3B3B3`|`"NewSecondaryBackgroundColor":"#282828"`|
|`NewPrimaryAccentTextColor`|eg. `#CF86FF` |`"NewTertiaryBackgroundColor":"#383838"`|
|`NewSecondaryAccentTextColor`|eg. `#00ACFF` |`"NewQuaternaryBackgroundColor":"#484848"`|

#### Grades

|JSON key     |JSON Value                       |Raw JSON                         |
|------------------|-------------------------------|-----------------------------|
|`NewGradePassColor`|eg. `#00DF00`|`"NewPrimaryBackgroundColor":"#181818"`|
|`NewGradeFailColor`|eg. `#ff5f59`|`"NewSecondaryBackgroundColor":"#282828"`|

#### Menu

|JSON key     |JSON Value                       |Raw JSON                         |
|------------------|-------------------------------|-----------------------------|
|`NewPrimaryMenuColor`|eg. `#585858`|`"NewPrimaryMenuColor":"#585858`|
|`NewSecondaryMenuColor`|eg. `#484848`|`"NewSecondaryMenuColor":"#484848"`|


#### Below is an example of a fully written Theme Code:

```json
{
	"Background":
	{
		"NewPrimaryBackgroundColor":"#181818",
		"NewSecondaryBackgroundColor":"#282828",
		"NewTertiaryBackgroundColor":"#383838",
		"NewQuaternaryBackgroundColor":"#484848",
		"NewQuinaryBackgroundColor":"#585858"
	},
	"Text":	
	{
		"NewPrimaryTextColor":"#F8F8F2",
		"NewSecondaryTextColor":"#8BE9FD",
		"NewTertiaryTextColor":"#FF79C6",
		"NewPrimaryAccentTextColor":"#BD93F9",
		"NewSecondaryAccentTextColor":"#FF5555"
	}
,	"Grade":
	{
		"NewGradePassColor":"#50FA7B",
		"NewGradeFailColor":"#FF5555"
	},
	"Menu":
	{
		"NewPrimaryMenuColor":"#44475A",
		"NewSecondaryMenuColor":"#5d6177"
	}
}
```
