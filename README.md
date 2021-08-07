# ECHO-Caves

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
