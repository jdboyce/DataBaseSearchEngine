





//////////////////////////////////////////////////////////////////////////////////////////////////////



var databaseArray =
[
	{"personID": "272822514",   //0
	  "firstName": "Billy",
	  "lastName": "Bob",
	  "gender": "male",
	  "dob": "1/18/1949",
	  "height": 71,
	  "weight": 175,
	  "eyeColor": "brown",
	  "occupation": "programmer",
	  "parents": [],
	  "currentSpouse": 401222887},

	{"personID": "401222887",   //1
	  "firstName": "Uma",
	  "lastName": "Bob",
	  "gender": "female",
	  "dob": "4/1/1947",
	  "height": 65,
	  "weight": 162,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [],
	  "currentSpouse": 272822514 },

	{"personID": "409574486",  //2
	  "firstName": "Michael",
	  "lastName": "Walkens",
	  "gender": "male",
	  "dob": "5/9/1951",
	  "height": 76,
	  "weight": 250,
	  "eyeColor": "brown",
	  "occupation": "landscaper",
	  "parents": [],
	  "currentSpouse": 260451248 },

	{"personID": "260451248",     //3
	  "firstName": "Jon",
	  "lastName": "Walkens",
	  "gender": "male",
	  "dob": "9/6/1945",
	  "height": 62,
	  "weight": 115,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [],
	  "currentSpouse": 409574486 },

	{"personID": "629807187",  // 4
	  "firstName": "Jack",
	  "lastName": "Pafoy",
	  "gender": "male",
	  "dob": "3/16/1938",
	  "height": 70,
	  "weight": 207,
	  "eyeColor": "black",
	  "occupation": "nurse",
	  "parents": [],
	  "currentSpouse": 464142841 },

	{"personID": "464142841",   // 5
	  "firstName": "Jen",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "4/10/1940",
	  "height": 72,
	  "weight": 256,
	  "eyeColor": "black",
	  "occupation": "student",
	  "parents": [],
	  "currentSpouse": 629807187 },

	{"personID": "982411429",   //6
	  "firstName": "Mister",
	  "lastName": "Potatoo",
	  "gender": "male",
	  "dob": "12/18/1952",
	  "height": 66,
	  "weight": 170,
	  "eyeColor": "hazel",
	  "occupation": "architect",
	  "parents": [],
	  "currentSpouse": 595767575 },

	{"personID": "595767575",    //7
	  "firstName": "Missuz",
	  "lastName": "Potatoo",
	  "gender": "female",
	  "dob": "10/28/1948",
	  "height": 59,
	  "weight": 137,
	  "eyeColor": "blue",
	  "occupation": "architect",
	  "parents": [],
	  "currentSpouse": 982411429 },

	{"personID": "693243224",  //8
	  "firstName": "Joy",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "4/20/1939",
	  "height": 69,
	  "weight": 199,
	  "eyeColor": "hazel",
	  "occupation": "doctor",
	  "parents": [],
	  "currentSpouse": 888201200},

	{"personID": "888201200",   //9
	  "firstName": "Mader",
	  "lastName": "Madden",
	  "gender": "male",
	  "dob": "5/6/1937",
	  "height": 76,
	  "weight": 205,
	  "eyeColor": "black",
	  "occupation": "landscaper",
	  "parents": [],
	  "currentSpouse": 693243224  },

	{"personID": "878013758",     //10
	  "firstName": "Jill",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "2/8/1972",
	  "height": 74,
	  "weight": 118,
	  "eyeColor": "brown",
	  "occupation": "programmer",
	  "parents": [272822514,401222887],
	  "currentSpouse": 294874671 },

	{"personID": "951747547",      //11
	  "firstName": "Ralph",
	  "lastName": "Bob",
	  "gender": "male",
	  "dob": "12/23/1969",
	  "height": 66,
	  "weight": 179,
	  "eyeColor": "blue",
	  "occupation": "nurse",
	  "parents": [272822514,401222887],
	  "currentSpouse": 159819275 },

	{"personID": "159819275",        //12
	  "firstName": "Jasmine",
	  "lastName": "Bob",
	  "gender": "female",
	  "dob": "12/18/1969",
	  "height": 58,
	  "weight": 156,
	  "eyeColor": "blue",
	  "occupation": "assistant",
	  "parents": [409574486,260451248],
	  "currentSpouse": 951747547 },

	{"personID": "348457184",        //13
	  "firstName": "Annie",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "11/4/1970",
	  "height": 62,
	  "weight": 235,
	  "eyeColor": "hazel",
	  "occupation": "landscaper",
	  "parents": [629807187,464142841],
	  "currentSpouse": null },

	{"personID": "294874671",           //14
	  "firstName": "Dave",
	  "lastName": "Pafoy",
	  "gender": "male",
	  "dob": "8/5/1967",
	  "height": 61,
	  "weight": 112,
	  "eyeColor": "green",
	  "occupation": "doctor",
	  "parents": [629807187,464142841],
	  "currentSpouse": 878013758 },

	{"personID": "931247228",         //15
	  "firstName": "Amii",
	  "lastName": "Pafoy",
	  "gender": "female",
	  "dob": "3/13/1963",
	  "height": 74,
	  "weight": 184,
	  "eyeColor": "brown",
	  "occupation": "landscaper",
	  "parents": [629807187,464142841],
	  "currentSpouse": null },

	{"personID": "822843554",           //16
	  "firstName": "Regina",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "7/26/1959",
	  "height": 71,
	  "weight": 249,
	  "eyeColor": "brown",
	  "occupation": "nurse",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },

	{"personID": "819168108",          //17
	  "firstName": "Hana",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "10/7/1953",
	  "height": 70,
	  "weight": 187,
	  "eyeColor": "brown",
	  "occupation": "politician",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },

	{"personID": "969837479",             //18
	  "firstName": "Eloise",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "12/11/1961",
	  "height": 63,
	  "weight": 241,
	  "eyeColor": "brown",
	  "occupation": "assistant",
	  "parents": [693243224, 888201200],
	  "currentSpouse": null },

	{"personID": "313207561",                //19
	  "firstName": "Mattias",
	  "lastName": "Madden",
	  "gender": "male",
	  "dob": "2/19/1966",
	  "height": 70,
	  "weight": 110,
	  "eyeColor": "blue",
	  "occupation": "assistant",
	  "parents": [693243224, 888201200],
	  "currentSpouse": 313997561 },

	{"personID": "313997561",                //20
	  "firstName": "Ellen",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "2/19/1970",
	  "height": 67,
	  "weight": 100,
	  "eyeColor": "blue",
	  "occupation": "doctor",
	  "parents": [],
	  "currentSpouse": 313207561 },

	{"personID": "313998000",             //21
	  "firstName": "Joey",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "2/02/1987",
	  "height": 67,
	  "weight": 100,
	  "eyeColor": "blue",
	  "occupation": "doctor",
	  "parents": [313207561,313997561],
	  "currentSpouse": null }
];


//////////////////////////////////////////////////////////////////////////////////////////////////////

























		//    INITIALIZE

//////////////////////////////////////////////////////////////////////////////////////////////////////



formatDatabase();
var range = [1,100];
console.log(rangeSearch(databaseArray, "ageInYears", range));

requestKey();



//////////////////////////////////////////////////////////////////////////////////////////////////////

























		//    INPUT / FILTER / DISPLAY FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////



 // Search/filter design approved by Nick.

function requestKey()
	{
		var userKeyInput = prompt("\nSelect your desired search terms by entering the matching key or keys.\n\nTo select multiple search terms at once, simply enter a comma and space between keys. For instance, entering \"F, L, A\" will allow you to search by matching first name, last name, and age. Keys are not case sensitive.\n\n\n\
                                     [Key]   -   [Search Term]\n\n\
                                           F   -   First Name\n\
                                           L   -   Last Name\n\
                                           N   -   ID Number\n\
                                           G   -   Gender\n\
                                           A   -   Age\n\
                                           R   -   Age Range\n\
                                           H   -   Height\n\
                                           W   -  Weight\n\
                                           E    -   Eye Color\n\
                                           O   -   Occupation\n\n").toLowerCase();
	 populatePromptsByKey(formatKeyInput(userKeyInput));
	};



function populatePromptsByKey(passedKeyArray)
	{
		var resultsArray = databaseArray;

		for (var i = 0; i < passedKeyArray.length; i++)
		{
		
			switch(passedKeyArray[i])
			{
				case "x": resultsArray = databaseArray; break;  // Not displayed to user

				case "f": resultsArray = filterFirstName(resultsArray); break;

				case "l": resultsArray = filterLastName(resultsArray); break;

				case "n": resultsArray = filterIDNumber(resultsArray); break;

				case "g": resultsArray = filterGender(resultsArray); break;

				case "a": resultsArray = filterAge(resultsArray); break;

				case "r": resultsArray = filterAgeRange(resultsArray); break;

				case "h": resultsArray = filterHeight(resultsArray); break;

				case "w": resultsArray = filterWeight(resultsArray); break;

				case "e": resultsArray = filterEyeColor(resultsArray); break;

				case "o": resultsArray = filterOccupation(resultsArray); break;

				default: requestKey();
			}
		}
		displayResults(resultsArray);
	};




function filterFirstName(passedArray)
	{
		var firstNameInput = prompt("Please enter the first name you wish to search for, in format \"Firstname\", then press OK.");
		var resultsArray = omniSearch(passedArray, "firstName", firstNameInput)
		return resultsArray;
	};



function filterLastName(passedArray)
	{
		var lastNameInput = prompt("Please enter the last name you wish to search for, \"Lastname\", then press OK.");
		var resultsArray = omniSearch(passedArray, "lastName", lastNameInput)
		return resultsArray;
	};



function filterIDNumber(passedArray)
	{
		var idNumberInput = prompt("Please enter the ID number you wish to search for, in format \"#########\", then press OK.");
		var resultsArray = omniSearch(passedArray, "personID", idNumberInput)
		return resultsArray;
	};



function filterGender(passedArray)
	{
		var genderInput = prompt("Please enter the gender you wish to search for, either \"male\" or \"female\", then press OK.");
		var resultsArray = omniSearch(passedArray, "gender", genderInput)
		return resultsArray;
	};



function filterAge(passedArray)
	{
		var ageInput = prompt("Please enter the age you wish to search for, in format \"##\", then press OK.");
		var resultsArray = omniSearch(passedArray, "ageInYears", ageInput)
		return resultsArray;
	};



function filterAgeRange(passedArray)
	{
		var ageRangeInput = prompt("Please enter the age range you wish to search for, in format \"##-##\", then press OK.");
		var ageRangeArray = formatRange(ageRangeInput);
		var resultsArray = rangeSearch(passedArray, "ageInYears", ageRangeArray)
		return resultsArray;
	};



function filterHeight(passedArray)
	{
		var heightInput = prompt("Please enter the height you wish to search for, in format \" #'#\" \", then press OK.");
		var resultsArray = omniSearch(passedArray, "formattedHeight", heightInput)
		return resultsArray;
	};



function filterWeight(passedArray)
	{
		var weightInput = prompt("Please enter the weight you wish to search for, in format \"##\", then press OK (weight is displayed in lbs).");
		var resultsArray = omniSearch(passedArray, "weight", weightInput)
		return resultsArray;
	};



function filterEyeColor(passedArray)
	{
		var eyeColorInput = prompt("Please enter the eye color you wish to search for, in format \"color\", then press OK.");
		var resultsArray = omniSearch(passedArray, "eyeColor", eyeColorInput)
		return resultsArray;
	};



function filterOccupation(passedArray)
	{
		var occupationInput = prompt("Please enter the occupation you wish to search for, in format \"occupation\", then press OK.");
		var resultsArray = omniSearch(passedArray, "occupation", occupationInput)
		return resultsArray;
	};



function displayResults (passedArray)
	{
		if(typeof passedArray[0] != 'undefined')
			{
			 	var print = passedArray.map(function(person)
			 	{return "First Name:  " + person.firstName + "\n" +
						"Last Name:  " + person.lastName + "\n" +
						"ID Number:  " + person.personID + "\n" +
						"Gender:  " + person.gender + "\n" +
						"Date of Birth:  " + person.dob + "\n" +
						"Age (Years):  " + person.ageInYears + "\n" +
						"Height:  " + person.formattedHeight + "\n" +
						"Weight:  " + person.weight + " Lbs" + "\n" +
						"Eye Color:  " + person.eyeColor + "\n" +
						"Occupation:  " + person.occupation + "\n" +
						"Spouse:  " + concatNames(person.spouseName) + "\n" +
					    "Children:  " + concatNames(person.childrenNames) + "\n" +
					    "Parents:  " + concatNames(person.parentNames) + "\n" +
					    "Siblings:  " + concatNames(person.siblingNames) + "\n" +
						"Descendants:  " + concatNames(person.descendants) + "\n" +"\n\n\n"});
			}
		else
			{
				var print = ["No Results Found"];
			}
		alert("\n\nSearch Results:\n\n\n" + print.join("") +"\n\n\nPress OK to Start New Search\n\n");
		console.log(print);
		requestKey();
	};



function checkIfArrayUndefined(passedArray)
	{
		if(typeof passedArray[0] != 'undefined')
		{
			return passedArray;
		}
		else
		{
			return "Unknown";
		}
	};



function concatNames(passedArray)
	{
		var namesCombined = [];
		
		if(typeof passedArray[0] != 'undefined')
		{

			for (var i = 0; i < passedArray.length; i++)
			{
				var namesCombined = namesCombined.concat(" " + passedArray[i].fullName)
			}
			namesCombined.join(", ");

		}
		return checkIfArrayUndefined(namesCombined);
	};



//////////////////////////////////////////////////////////////////////////////////////////////////////

























		//    SEARCH FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////



function omniSearch(passedArray, searchCriteria, searchTerm)
	{
		try{
		var filteredArray = passedArray.filter(function(value){return value[searchCriteria] == searchTerm;});
		return filteredArray;
		}
		catch(e)
		{
			var error = e;
			return "Unable to search.";
		}
	};



function rangeSearch(passedArray, searchCriteria, searchRangeArray)
	{
		try{
		var filteredArray = passedArray.filter(function(value){return value[searchCriteria] >= searchRangeArray[0] && value[searchCriteria] <= searchRangeArray[1];});
		return filteredArray;
		}
		catch(e)
		{
			var error = e;
			return "Unable to search.";
		}
	};



function findSpouse(passedPerson)
	{
		var spouseArray = [];
		if(typeof passedPerson.currentSpouse != null)
		{
			spouseArray = spouseArray.concat(omniSearch(databaseArray, "personID", passedPerson.currentSpouse));
		}
		return spouseArray;
	};



function findChildren(passedPerson)
	{
		var childrenArray = [];
		for (var i = 0; i < databaseArray.length; i++)
		{
			if(typeof databaseArray[i].parents[0] != 'undefined' && (databaseArray[i].parents[0] === passedPerson.personID || databaseArray[i].parents[1] == passedPerson.personID))
			{
				childrenArray = childrenArray.concat(databaseArray[i]);
			}
		}
		return childrenArray;
	};



function findParents(passedPerson)
	{
		var parentsArray = [];
		if(typeof passedPerson.parents[0] != 'undefined')
		{
			for (var i = 0; i < passedPerson.parents.length; i++)
			{
				parentsArray = parentsArray.concat(omniSearch(databaseArray, "personID", passedPerson.parents[i]));
			}
		}
		return parentsArray;
	};



function findSiblings(passedPerson)
	{
		var siblingsArray = [];
		var parentsArray = [];
		if(typeof passedPerson.parents[0] != 'undefined')
		{
			for (var i = 0; i < passedPerson.parents.length; i++)
			{
				parentsArray = parentsArray.concat(omniSearch(databaseArray, "personID", passedPerson.parents[i]));
			}
			for (var i = 0; i < parentsArray.length; i++)
			{
				siblingsArray = siblingsArray.concat(findChildren(parentsArray[i]));
			}
		}
		return siblingsArray;
	};



function findDescendants(passedPerson/*, descendantIndex*/)
		{	
			/*descendantIndex++;*/

			var descendantArray = [];

			var childrenArray = findChildren(passedPerson);

			if(typeof childrenArray[0] != 'undefined')
				{
					for (var i = 0; i < childrenArray.length; i++)
					{
						descendantArray = descendantArray.concat(findDescendants(childrenArray[i]/*, descendantIndex*/));
					}
					descendantArray = descendantArray.concat(childrenArray);
				}
			return  descendantArray;	
		};



//////////////////////////////////////////////////////////////////////////////////////////////////////

























		//    FORMATTING FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////



function formatDatabase()
	{
		for (var i = 0; i < databaseArray.length; i++) 
		{
			 databaseArray[i] = formatPersonAttributes(databaseArray[i]);
		}
		for (var i = 0; i < databaseArray.length; i++) 
		{
			databaseArray[i] = formatPersonRelatives(databaseArray[i]);
		}
	};



function formatPersonAttributes(passedPerson)
	{
		passedPerson.formattedHeight = formatHeight(passedPerson);            
		passedPerson.ageInYears = formatAge(passedPerson);                   
		return passedPerson;
	};



function formatPersonRelatives(passedPerson)
	{
		passedPerson.spouseName = formatRelative(findSpouse(passedPerson),1);                   
		passedPerson.childrenNames = formatRelative(findChildren(passedPerson),2);             
		passedPerson.parentNames = formatRelative(findParents(passedPerson),3);		        
		passedPerson.siblingNames = formatRelative(findSiblings(passedPerson),4);
		passedPerson.descendants = formatRelative(findDescendants(passedPerson));      
		return passedPerson;
	};



function formatRelative(passedArray, passedRelationIndex)
	{
		try{
		var formattedRelative = passedArray.map(function(person){return {relationTypeIndex: passedRelationIndex, fullName: person.firstName + " " + person.lastName, relativeID: person.personID, relativeAge: person.ageInYears}});
		return	formattedRelative;
		}
		catch(e)
		{
			var error = e;
			return "Unable to format.";
		}
	};



function formatKeyInput(userKeyInput)
	{
		userKeyInput = userKeyInput.replace(/ /g,'');
		var keyArray = userKeyInput.split(",");
		return keyArray;
	};



function formatRange(passedString)
	{
		var formattedRangeArray = passedString.split("-");
		return formattedRangeArray;
	};



function formatAge(passedPerson)
	{
		var ageArray = passedPerson.dob.split("/");

	 	todayDate = new Date();
	  	todayYear = todayDate.getFullYear();
	  	todayMonth = todayDate.getMonth();
	  	todayDay = todayDate.getDate();
	  	age = todayYear - ageArray[2];

		if (todayMonth < ageArray[0] - 1)
			{
				age--;
			}
		if (ageArray[0] - 1 == todayMonth && todayDay < ageArray[1])
		  	{
		    	age--;
		    }
	  	return age;
	};



function formatHeight(passedPerson)
	{
	    var feet = Math.floor(passedPerson.height/12);
	    var inches = passedPerson.height % 12;
	    var formattedHeight =  feet + "'" + inches + "\"";
	    return formattedHeight;
	};



//////////////////////////////////////////////////////////////////////////////////////////////////////

























		//    NEXT OF KIN FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////



/*
function sortArray(passedArray, passedProperty)
	{
		passedArray.sort(function(a, b){return a[passedProperty]-b[passedProperty]});
		return	passedArray;
	};

function findGrandchild(passedArray)
	{	
			
	};

function findGrandparent(passedArray)
	{		
	};

function findNieceOrNephew(passedArray)
	{		
	};

function findAuntOrUncle(passedArray)
	{		
	};

function findGreatGrandchild(passedArray)
	{		
	};

function findGreatGrandParent(passedArray)
	{		
	};
*/



//////////////////////////////////////////////////////////////////////////////////////////////////////