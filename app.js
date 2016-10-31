
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









//////////////////////////////////////////////////////////////////////////////////////////////////////




// requestKey();




//////////////////////////////////////////////////////////////////////////////////////////////////////





















//////////////////////////////////////////////////////////////////////////////////////////////////////




function display (passedArray){
	 var print = passedArray.map(function(person)
	 	{return "First Name:  " + person.firstName + "\n" +
				"Last Name:  " + person.lastName + "\n" +
				"ID Number:  " + person.personID + "\n" +
				"Gender:  " + person.gender + "\n" +
				"Date of Birth:  " + person.dob + "\n" +
				"Height:  " + person.height + "\n" +
				"Weight:  " + person.weight + "\n" +
				"Eye Color:  " + person.eyeColor + "\n" +
				"Occupation:  " + person.occupation + "\n" +
				"Parents:  "  + "\n" +
				"Spouse:  " + person.spouse + "\n" +
				"Family: " + person.family[0] + "\n\n\n\n"});
		console.log("\n\nSearch Results:\n\n\n" + print.join(""));
		};








function sortArray(passedArray, passedProperty){
	passedArray.sort(function(a, b){return a[passedProperty]-b[passedProperty]});
	return	passedArray;
	};




//////////////////////////////////////////////////////////////////////////////////////////////////////






























//////////////////////////////////////////////////////////////////////////////////////////////////////



function requestKey()
	{
		var userKeyInput = prompt("\nSelect your desired search terms by entering the matching key or keys.\n\nTo select multiple search terms at once, simply enter a comma and space between keys. For instance, entering \"F, L, A\" will allow you to search by matching first name, last name, and age. Keys are not case sensitive.\n\n\n\
		                                        [Key]  -  [Search Term]\n\n\
		                                            F  -  First Name\n\
		                                            L  -  Last Name\n\
		                                            N  -  ID Number\n\
		                                            G  -  Gender\n\
		                                            A  -  Age\n\
		                                            R  -  Age Range\n\
		                                            H  -  Height\n\
		                                            W  -  Weight\n\
		                                            E  -  Eye Color\n\
		                                            O  -  Occupation\n\n");
	 populatePromptsByKey(formatKeyInput(userKeyInput));
	};


function populatePromptsByKey(passedKeyArray)
	{
		var resultsArray = databaseArray;

		for (var i = 0; i < passedKeyArray.length; i++)
		{
		
			switch(passedKeyArray[i])
			{
				case "f": resultsArray = findFirstName(resultsArray); break;

				case "l": resultsArray = findLastName(resultsArray); break;

				case "n": resultsArray = findIDNumber(resultsArray); break;

				case "g": resultsArray = findGender(resultsArray); break;

				case "a": resultsArray = findAge(resultsArray); break;

				case "r": resultsArray = findAgeRange(resultsArray); break;

				case "h": resultsArray = findHeight(resultsArray); break;

				case "w": resultsArray = findWeight(resultsArray); break;

				case "e": resultsArray = findEyeColor(resultsArray); break;

				case "o": resultsArray = findOccupation(resultsArray); break;

				default: requestKey();
			}
		}
		// return resultsArray;
		console.log(resultsArray);
	};





function omniSearch(passedArray, searchCriteria, searchTerm)
	{
		var filteredArray = passedArray.filter(function(value){return value[searchCriteria] == searchTerm;});
		return filteredArray;
	};


function rangeSearch(passedArray, searchCriteria, searchRangeArray)
	{
		var filteredArray = passedArray.filter(function(value){return value[searchCriteria] >= searchRangeArray[0] && value[searchCriteria] <= searchRangeArray[1];});
		return filteredArray;
	};





function findFirstName(passedArray)
	{
		var firstNameInput = prompt("Please enter the first name you wish to search for:");
		var resultsArray = omniSearch(passedArray, "firstName", firstNameInput)
		return resultsArray;
	};


function findLastName(passedArray)
	{
		var lastNameInput = prompt("Please enter the last name you wish to search for:");
		var resultsArray = omniSearch(passedArray, "lastName", lastNameInput)
		return resultsArray;
	};


function findIDNumber(passedArray)
	{
		var idNumberInput = prompt("Please enter the ID number you wish to search for:");
		var resultsArray = omniSearch(passedArray, "personID", idNumberInput)
		return resultsArray;
	};


function findGender(passedArray)
	{
		var genderInput = prompt("Please enter the gender you wish to search for:");
		var resultsArray = omniSearch(passedArray, "gender", genderInput)
		return resultsArray;
	};


function findAge(passedArray)
	{
		var ageInput = prompt("Please enter the age you wish to search for:");
		var resultsArray = omniSearch(passedArray, "ageInYears", ageInput)
		return resultsArray;
	};


function findAgeRange(passedArray)
	{
		var ageRangeInput = prompt("Please enter the age range you wish to search for:");
		var ageRangeArray = formatRange(ageRangeInput);
		var resultsArray = rangeSearch(passedArray, "ageInYears", ageRangeArray)
		return resultsArray;
	};


function findHeight(passedArray)
	{
		var heightInput = prompt("Please enter the height you wish to search for:");
		var resultsArray = omniSearch(passedArray, "formattedHeight", heightInput)
		return resultsArray;
	};


function findWeight(passedArray)
	{
		var weightInput = prompt("Please enter the weight you wish to search for:");
		var resultsArray = omniSearch(passedArray, "weight", weightInput)
		return resultsArray;
	};


function findEyeColor(passedArray)
	{
		var eyeColorInput = prompt("Please enter the eye color you wish to search for:");
		var resultsArray = omniSearch(passedArray, "eyeColor", eyeColorInput)
		return resultsArray;
	};


function findOccupation(passedArray)
	{
		var occupationInput = prompt("Please enter the occupation you wish to search for:");
		var resultsArray = omniSearch(passedArray, "occupation", occupationInput)
		return resultsArray;
	};





function findSpouse(passedPerson)
	{
		var spouseArray = [];
		if(typeof passedPerson.currentSpouse == null){}
		else
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
			if(typeof databaseArray[i].parents[0] == 'undefined'){}
			else if(databaseArray[i].parents[0] == passedPerson.personID || databaseArray[i].parents[1] == passedPerson.personID)
			{
				childrenArray = childrenArray.concat(databaseArray[i]);
			}
		}
		return childrenArray;
	};


function findParents(passedPerson)
	{
		var parentsArray = [];
		if(typeof passedPerson.parents[0] == 'undefined'){}
		else
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
		if(typeof passedPerson.parents[0] == 'undefined'){}
		else
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



//////////////////////////////////////////////////////////////////////////////////////////////////////










//////////////////////////////////////////////////////////////////////////////////////////////////////



function formatDatabase()
	{
		for (var i = 0; i < databaseArray.length; i++) 
		{
			databaseArray[i] = formatPersonAttributes(databaseArray[i]);
		}
	};


function formatPersonAttributes(passedPerson)
	{
		passedPerson.spouseName = findSpouse(passedPerson);                   // done
		passedPerson.parentNames = findParents(passedPerson);		          // done 
		passedPerson.childrenNames = findChildren(passedPerson);              // done
		passedPerson.siblingNames = findSiblings(passedPerson.personID);      // done
		// passedPerson.relativeNames = findRelatives(passedPerson.personID);
		passedPerson.formattedHeight = formatHeight(passedPerson);            // done
		passedPerson.ageInYears = formatAge(passedPerson);                    // done
	}


function formatRelative(passedArray, passedRelationIndex)
	{
		var formattedRelative = passedArray.map(function(person){return {relationTypeIndex: passedRelationIndex, fullName: person.firstName + " " + person.lastName, relativeID: person.personID, relativeAge: person.dob}});
		return	formattedRelative;
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
























/*

console.log(findSiblings(databaseArray[16]));
*/
























function generateDescendants(passedArray)
{
	for (var i = 0; i < passedArray.length; i++) {
		findDescendants(passedArray, passedArray[i].personID)
	}
}



/*
function findDescendants(passedID, descendantIndex)
		{	
			var descendantArray = []

			var childrenFound = findChildren(passedID);

			if(typeof childrenFound[0] == 'undefined'){}

			else{

				relationTypeIndex = formatRelationType(descendantIndex);

				var formattedDescendants = formatRelative(childrenFound, relationTypeIndex);

				for (var i = 0; i < formattedDescendants.length; i++)
				{
					push to array

					descendantArray = descendantArray.concat(findDescendants( some array ))
				}
			return descendantArray;	
		}
	};
*/








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




//////////////////////////////////////////////////////////////////////////////////////////////////////













/*
function appendPersonAttributes(passedArray)
{
	for (var i = 0; i < passedArray.length; i++)
	{
		passedPerson.spouseName = [];
		passedPerson.parentNames = [];
		passedPerson.childrenNames = [];
		passedPerson.siblingNames = [];
		passedPerson.relativeNames = [];
		passedPerson.formattedHeight = "";
		passedPerson.ageInYears = 0;
	}
}
*/








// display(findDescendants(272822514));
/*
var term = "parents";
var criteria = 272822514;*/


// function findDescendants(personID){

// 	return ;
// }








/*


function matchKey(passedKey){

};*/

/*

var term = "gender";
var criteria = "male";


var term2 = "eyeColor";
var criteria2 = "brown";

*/
// var filterOne = omniSearch(term, criteria, databaseArray);


// var filterTwo = omniSearch(term2, criteria2, filterOne);











/*


function omniSearch(passedArray, searchTerm, searchCriteria)
{
	if (searchTerm === "parents"){
		return searchObjects(passedArray, searchTerm, searchCriteria);
	else{
		
	};
};*/

/*function searchObjects(passedArray, searchTerm, searchCriteria){
	var filteredArray = passedArray.filter(function(value)
		{return value[searchTerm] === searchCriteria;});
	return filteredArray;}
};

*/









/*

function print(passedArray){
	for (var i = 0; i < passedArray.length; i++)
	{
		alert(
			"ID Number:  " + passedArray[i]["personID"] + "\n" +
			"First Name:  " + passedArray[i]["firstName"] + "\n" +
			"Last Name:  " + passedArray[i]["lastName"] + "\n" +
			"Gender:  " + passedArray[i]["gender"] + "\n" +
			"Date of Birth:  " + passedArray[i]["dob"] + "\n" +
			"Height:  " + passedArray[i]["height"] + "\n" +
			"Weight:  " + passedArray[i]["weight"] + "\n" +
			"Eye Color:  " + passedArray[i]["eyeColor"] + "\n" +
			"Occupation:  " + passedArray[i]["occupation"] + "\n" +
			"Parents:  " + passedArray[i]["parents"] + "\n" +
			"Spouse:  " + passedArray[i]["spouse"] + "\n"
			);
	}
	};

*/
// alert(databaseArray.filter(checkAdult));


// function print(obj)
// {
// 	for (var thing in obj)
// 	{
// 		var stop = prompt(thing);
// 		/*if(stop = "stop")
// 		{
// 			break;
// 		};*/
// 	}
// };


// findFamilyMembers();










/*


function printAllToConsole(dataArray){
	for (var key in dataArray) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataArray[key]));
		}
	}
}
printAllToConsole(dataObject);





function initSearch(){
	alert("Hello World");

	// get all the information you need to run the search
	var yourName = prompt("Who do you want to search for?");

	// then pass that info to the respective function.
	var result = getPersonInfo("J", "T")

	// once the search is done, pass the results to the responder function
	responder(result);
}





function responder(results){
	// results may be a list of strings, an object, or a single string. 
	alert(results);
}





function getPersonInfo(firstname, lastname){
	var result = "This will be the information for whoever you searched for";
	// look up person's information
	return result;
}





function getFamily(){
	// return list of names of immediate family members
}





// there will be much more here, and some of the code above will certainly change

initSearch();
window.close(); // exit window as the end of the session -- you may remove this


*/