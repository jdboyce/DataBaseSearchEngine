
 "use strict";


		//    ASSIGNED PERSON DATABASE

//////////////////////////////////////////////////////////////////////////////////////////////////////

var databaseArray =
[
	{"personID": "272822514",
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

	{"personID": "401222887",
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

	{"personID": "409574486",
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

	{"personID": "260451248",
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

	{"personID": "629807187",
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

	{"personID": "464142841",
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

	{"personID": "982411429",
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

	{"personID": "595767575",
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

	{"personID": "693243224",
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

	{"personID": "888201200",
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

	{"personID": "878013758",
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

	{"personID": "951747547",
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

	{"personID": "159819275",
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

	{"personID": "348457184",
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

	{"personID": "294874671",
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

	{"personID": "931247228",
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

	{"personID": "822843554",
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

	{"personID": "819168108",
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
 
	{"personID": "969837479",
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

	{"personID": "313207561",
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

	{"personID": "313997561",
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

	{"personID": "313998000",
	  "firstName": "Joey",
	  "lastName": "Madden",
	  "gender": "female",
	  "dob": "2/02/1987",
	  "height": 67,
	  "weight": 100,
	  "eyeColor": "blue",
	  "occupation": "doctor",
	  "parents": [313207561,313997561],
	  "currentSpouse": null },

	  {"personID": "313998001",
	  "firstName": "Jay",
	  "lastName": "Madden",
	  "gender": "male",
	  "dob": "2/02/2007",
	  "height": 52,
	  "weight": 68,
	  "eyeColor": "blue",
	  "occupation": "imagination admin",
	  "parents": [313998000],
	  "currentSpouse": null }
];

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    INITIALIZE

//////////////////////////////////////////////////////////////////////////////////////////////////////

formatDatabase(databaseArray);

requestKey();

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    INPUT / FILTER / DISPLAY FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////

function requestKey(){
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


function populatePromptsByKey(passedKeyArray){
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


function filterFirstName(passedArray){
		var resultsArray = [];
		var firstNameInput = prompt("Please enter the first name you wish to search for, in format \"Firstname\".");
		
		if (/^[A-Z]{1}[a-z]+$/.test(firstNameInput))
		{
			resultsArray = omniSearch(passedArray, "firstName", firstNameInput)
		}
		else if (firstNameInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterFirstName(passedArray);
		}
		return resultsArray;
	};


function filterLastName(passedArray){
		var resultsArray = [];
		var lastNameInput = prompt("Please enter the last name you wish to search for, in format \"Lastname\".");
		
		if (/^[A-Z]{1}[a-z]+$/.test(lastNameInput))
		{
			resultsArray = omniSearch(passedArray, "lastName", lastNameInput)
		}
		else if (lastNameInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterLastName(passedArray);
		}
		return resultsArray;
	};


function filterIDNumber(passedArray){
		var resultsArray = [];
		var idNumberInput = prompt("Please enter the ID number you wish to search for, in format \"#########\".");
		
		if (/^[0-9]{9}$/.test(idNumberInput))
		{
			resultsArray = omniSearch(passedArray, "personID", idNumberInput)
		}
		else if (idNumberInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterIDNumber(passedArray);
		}
		return resultsArray;
	};


function filterGender(passedArray){
		var resultsArray = [];
		var genderInput = prompt("Please enter the gender you wish to search for, either \"male\" or \"female\".");
		
		if (/(^(fe)?male$)/.test(genderInput))
		{
			resultsArray = omniSearch(passedArray, "gender", genderInput)
		}
		else if (genderInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterGender(passedArray);
		}
		return resultsArray;
	};


function filterAge(passedArray){
		var resultsArray = [];
		var ageInput = prompt("Please enter the age you wish to search for, in format \"##\".");
		
		if (/^[0-9]{1,2}$/.test(ageInput))
		{
			resultsArray = omniSearch(passedArray, "ageInYears", ageInput)
		}
		else if (ageInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterAge(passedArray);
		}
		return resultsArray;
	};


function filterAgeRange(passedArray){
		var resultsArray = [];
		var ageRangeInput = prompt("Please enter the age range you wish to search for, in format \"##-##\".");
		
		if (/^[0-9]{1,2}-[0-9]{1,2}$/.test(ageRangeInput))
		{
			var ageRangeArray = formatRange(ageRangeInput);
			resultsArray = rangeSearch(passedArray, "ageInYears", ageRangeArray)		
		}
		else if (ageRangeArray == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterAgeRange(passedArray);
		}
		return resultsArray;
	};


function filterHeight(passedArray){
		var resultsArray = [];
		var heightInput = prompt("Please enter the height you wish to search for, in format \" #'#\" \".");
		
		if (/^[0-9]{1}\'[0-9]{1,2}\"$/.test(heightInput))
		{
		resultsArray = omniSearch(passedArray, "formattedHeight", heightInput)
		}
		else if (heightInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterHeight(passedArray);
		}
		return resultsArray;
	};


function filterWeight(passedArray){
		var resultsArray = [];
		var weightInput = prompt("Please enter the weight you wish to search for, in format \"###\" (weight is displayed in Lbs).");
		
		if (/^[0-9]{2,3}$/.test(weightInput))
		{
		resultsArray = omniSearch(passedArray, "weight", weightInput)
		}
		else if (weightInput == null)
		{
			requestKey();
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterWeight(passedArray);
		}
		return resultsArray;
	};


function filterEyeColor(passedArray){
		var resultsArray = [];
		var eyeColorInput = prompt("Please enter the eye color you wish to search for, in format \"color\".");
		
		if (eyeColorInput == null)
		{
			requestKey();
		}
		else if (/^[a-z]+$/.test(eyeColorInput))
		{
		resultsArray = omniSearch(passedArray, "eyeColor", eyeColorInput)
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterEyeColor(passedArray);
		}
		return resultsArray;
	};


function filterOccupation(passedArray){
		var resultsArray = [];
		var occupationInput = prompt("Please enter the occupation you wish to search for, in format \"occupation\".");
		
		if (occupationInput == null)
		{
			requestKey();
		}
		else if(/^[a-z]+$/.test(occupationInput))
		{
		resultsArray = omniSearch(passedArray, "occupation", occupationInput)
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			resultsArray = filterOccupation(passedArray);
		}
		return resultsArray;
	};


function displayResults (passedArray){
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
					"Spouse: " + concatNames(person.spouseName) + "\n" +
				    "Children: " + concatNames(person.childrenNames) + "\n" +
				    "Parents: " + concatNames(person.parentNames) + "\n" +
				    "Siblings: " + concatNames(person.siblingNames) + "\n" +
				    "Ancestors: " + concatNames(person.ancestors) + "\n" +
					"Descendants: " + concatNames(person.descendants) + "\n" +
					"Aunts & Uncles: " + concatNames(person.unclesAndAunts) + "\n" +
					"Nieces & Nephews: " + concatNames(person.niecesAndNephews) + "\n" + 
					"Next of Kin: " + concatNames(person.nextOfKin) + "\n" + "\n\n\n"});
		}
		else
		{
			var print = ["No Results Found"];
		}
		alert("\n\nSearch Results:\n\n\n" + print.join("") +"\n\n\nPress OK to Start New Search\n\n");
		console.log(print);
		requestKey();
	};


function checkIfArrayUndefined(passedArray){
		if(typeof passedArray[0] != 'undefined')
		{
			return passedArray;
		}
		else
		{
			return "Unknown";
		}
	};


function concatNames(passedArray){
		var namesCombined = [];

		if(typeof passedArray[0] != 'undefined')
		{
			for (var i = 0; i < passedArray.length; i++)
			{
				var namesCombined = namesCombined.concat(" " + passedArray[i].firstName + " " + passedArray[i].lastName + " (" + passedArray[i].ageInYears + ")")
			}
			namesCombined.join(", ");
		}
		return checkIfArrayUndefined(namesCombined);
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    SEARCH FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////

function omniSearch(passedArray, searchCriteria, searchTerm){
		try
		{
			var filteredArray = passedArray.filter(function(value){return value[searchCriteria] == searchTerm;});
			return filteredArray;
		}
		catch(e)
		{
			var error = e;
			return "Unable to search.";
		}
	};


function rangeSearch(passedArray, searchCriteria, searchRangeArray){
		try
		{
			var filteredArray = passedArray.filter(function(value){return value[searchCriteria] >= searchRangeArray[0] && value[searchCriteria] <= searchRangeArray[1];});
			return filteredArray;
		}
		catch(e)
		{
			var error = e;
			return "Unable to search.";
		}
	};


function findSpouse(passedPerson){
		var spouseArray = [];

		if(typeof passedPerson.currentSpouse != null)
		{
			spouseArray = spouseArray.concat(omniSearch(databaseArray, "personID", passedPerson.currentSpouse));
		}
		return spouseArray;
	};


function findChildren(passedPerson){
		var childrenArray = [];

		for (var i = 0; i < databaseArray.length; i++)
		{
			if(typeof databaseArray[i].parents[0] != 'undefined' && (databaseArray[i].parents[0] == passedPerson.personID || databaseArray[i].parents[1] == passedPerson.personID))
			{
				var child = databaseArray[i];
				childrenArray.push(child);
			}
		}
		return sortAge(childrenArray);
	};


function findParents(passedPerson){
		var parentsArray = [];

		if(typeof passedPerson.parents[0] != 'undefined')
		{
			for (var i = 0; i < passedPerson.parents.length; i++)
			{
				parentsArray = parentsArray.concat(omniSearch(databaseArray, "personID", passedPerson.parents[i]));
			}
		}
		return sortAge(parentsArray);
	};


function findSiblings(passedPerson){		
		var parentsArray = [];
		var siblingsFound = [];
		var removeDuplicates = [];
		var siblingsArray = [];

		if(typeof passedPerson.parents[0] != 'undefined')
		{
			for (let i = 0; i < passedPerson.parents.length; i++)
			{
				parentsArray = parentsArray.concat(omniSearch(databaseArray, "personID", passedPerson.parents[i]));
			}
			for (let i = 0; i < parentsArray.length; i++)
			{
				siblingsFound = siblingsFound.concat(findChildren(parentsArray[i]));
			}
			removeDuplicates = siblingsFound.filter(function(elem, index, self) {return index == self.indexOf(elem);});
			siblingsArray = removeDuplicates.filter(function(value){return value["personID"] != passedPerson.personID;});
	 	}
		return sortAge(siblingsArray);
	};


function findDescendants(passedPerson, passedRelationIndex){
		var descendantArray = [];
		var newIndex = 0;
		var childrenArray = findChildren(passedPerson);

		if(typeof childrenArray[0] != 'undefined')
			{
				if(passedRelationIndex == 2){
					newIndex = passedRelationIndex + 3;
				}
				else{
					newIndex = passedRelationIndex + 4;
				}
				for (var i = 0; i < childrenArray.length; i++)
				{
					descendantArray = descendantArray.concat(findDescendants(childrenArray[i], newIndex));
				}
				descendantArray = descendantArray.concat(sortAge(formatRelative(childrenArray,passedRelationIndex)));
			}
		return  descendantArray;
	};


function findAncestors(passedPerson, passedRelationIndex){
		var ancestorArray = [];
		var newIndex = 0;
		var parentArray = findParents(passedPerson);

		if(typeof parentArray[0] != 'undefined')
			{
				if(passedRelationIndex == 3){
						newIndex = passedRelationIndex + 3;
					}
					else{
						newIndex = passedRelationIndex + 4;
					}
					for (var i = 0; i < parentArray.length; i++)
					{
						ancestorArray = ancestorArray.concat(findAncestors(parentArray[i], newIndex));
					}
					ancestorArray = ancestorArray.concat(sortAge(formatRelative(parentArray, passedRelationIndex)));
			}
		return  ancestorArray;	
	};


function findNiecesAndNephews(passedPerson){	
		var siblingsArray = [];
		var niecesAndNephews = [];
		siblingsArray = findSiblings(passedPerson);

		if(typeof siblingsArray[0] != 'undefined')
			{
				for (var i = 0; i < siblingsArray.length; i++)
				{
					niecesAndNephews = niecesAndNephews.concat(findChildren(siblingsArray[i]));
				}
			}
		return sortAge(niecesAndNephews);
	};


function findUnclesAndAunts(passedPerson){		
		var parentsArray = [];
		var unclesAndAunts = [];
		parentsArray = findParents(passedPerson);

		if(typeof parentsArray[0] != 'undefined')
			{
				for (var i = 0; i < parentsArray.length; i++)
				{
					unclesAndAunts = unclesAndAunts.concat(findSiblings(parentsArray[i]));
				}
			}
		return sortAge(unclesAndAunts);
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    FORMATTING FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////

function formatDatabase(passedArray){
		for (var i = 0; i < passedArray.length; i++) 
		{
			 passedArray[i] = formatPersonAttributes(passedArray[i]);
		}
		for (var i = 0; i < passedArray.length; i++) 
		{
			passedArray[i] = formatPersonRelatives(passedArray[i]);
		}
	};


function formatPersonAttributes(passedPerson){
		passedPerson.formattedHeight = formatHeight(passedPerson);            
		passedPerson.ageInYears = formatAge(passedPerson);
		passedPerson.relationTypeIndex = null;                 
		return passedPerson;
	};

/*  
    Each relative array returned to the person object will be sorted by age before being returned.
    A "relation type index" number is applied to each relative type to allow for next of kin sorting.
    Both ancestors and decendants will contiue to have higher indexes applied through each generation
    (for each recursion cycle), which will maintain the proper next of kin order.
*/

function formatPersonRelatives(passedPerson){
		passedPerson.spouseName = formatRelative(findSpouse(passedPerson),1);                   
		passedPerson.childrenNames = formatRelative(findChildren(passedPerson),2);             
		passedPerson.parentNames = formatRelative(findParents(passedPerson),3);		        
		passedPerson.siblingNames = formatRelative(findSiblings(passedPerson),4);
		passedPerson.descendants = findDescendants(passedPerson,2);
		passedPerson.ancestors = findAncestors(passedPerson,3);
		passedPerson.niecesAndNephews = formatRelative(findNiecesAndNephews(passedPerson),7);
		passedPerson.unclesAndAunts = formatRelative(findUnclesAndAunts(passedPerson),8);    
  		passedPerson.allRelatives = sortRelationIndex(passedPerson.spouseName.concat(passedPerson.descendants,passedPerson.ancestors,passedPerson.siblingNames,passedPerson.niecesAndNephews,passedPerson.unclesAndAunts));
		passedPerson.nextOfKin = returnNextOfKin(passedPerson.allRelatives);
		return passedPerson;
	};


function formatRelative(passedArray, passedRelationIndex){
		var formattedRelative = passedArray.map(function(person){return {relationTypeIndex: passedRelationIndex, firstName: person.firstName, lastName: person.lastName, personID: person.personID, ageInYears: person.ageInYears}});
		return	formattedRelative;
	};


function formatKeyInput(userKeyInput){
		var resultsArray = [];

		if(/^(([x,f,l,n,g,a,r,h,w,e,o],\s){1,10})?[x,f,l,n,g,a,r,h,w,e,o]{1}$/i.test(userKeyInput))
		{
			var removeSpaces = userKeyInput.replace(/ /g,'');
			var keyArray = removeSpaces.split(",");
			var removeDuplicates = keyArray.filter(function(elem, index, self) {return index == self.indexOf(elem);});
			resultsArray = removeDuplicates;
		}
		else
		{
			alert("Unfortunately your entry did not match the proper format. Please press OK to try again.");
			requestKey();
		}
		return resultsArray;
	};


function formatRange(passedString){
		var formattedRangeArray = passedString.split("-");
		return formattedRangeArray;
	};


function formatAge(passedPerson){
		var ageArray = passedPerson.dob.split("/");
	 	var todayDate = new Date();
	  	var todayYear = todayDate.getFullYear();
	  	var todayMonth = todayDate.getMonth();
	  	var todayDay = todayDate.getDate();
	  	var age = todayYear - ageArray[2];

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


function formatHeight(passedPerson){
	    var feet = Math.floor(passedPerson.height/12);
	    var inches = passedPerson.height % 12;
	    var formattedHeight =  feet + "'" + inches + "\"";
	    return formattedHeight;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    NEXT OF KIN FUNCTIONS

//////////////////////////////////////////////////////////////////////////////////////////////////////

function sortAge(passedArray){
		passedArray.sort(function(a, b){return b.ageInYears - a.ageInYears});
		return	passedArray;
	};


function sortRelationIndex(passedArray){
		passedArray.sort(function(a, b){return a.relationTypeIndex - b.relationTypeIndex});
		return	passedArray;
	};


function returnNextOfKin(passedArray){
		var nextOfKin = [];
		
		if(typeof passedArray[0] != 'undefined'){
			nextOfKin[0] = passedArray[0];
		}
		return nextOfKin;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////