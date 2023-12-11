/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    
    for(let i=0;i<scannedTextObj.length;i++){
        var bookCode = scannedTextObj[i].ISBN
        //set the array variable so we can parse through the length of content array
        let content = scannedTextObj[i].Content;
        for(let j=0;j<content.length;j++){
            //We now have a function that is able to return the element in the content array that matches the search term we are looking for
            if (content[j].Text.match(searchTerm)){
                //Sets the Results
                var pageNumber = content[j].Page
                var lineNumber = content[j].Line
            }
        }
    }
    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    
    result.SearchTerm = searchTerm

    const obj = {"ISBN":bookCode,"Page":pageNumber,"Line":lineNumber}
    result.Results.push(obj)

    //console.log(obj)
    //console.log(result.SearchTerm)
    //console.log(result.Results)

    return result; 

}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results.*/ 
const test2result = findSearchTermInBooks("hello", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

//MY Three unit test

/*
---Unit Test 1--- 
This is a positive result test.

In this test we are checking to see if the correct line number will be return to us when searching for specific words
In our case we want to see a result that comes from the entry with line 8. 
Since the word we are searching for is found in line 8 we recieve a pass on the unit test
*/
const postiveTest = findSearchTermInBooks("momentum", twentyLeaguesIn);
let posTestLength = postiveTest.Results;
for(let x=0;x<posTestLength.length;x++){
    var postiveLineNum = postiveTest.Results[x].Line;
}
if(postiveLineNum == 8){
    console.log("UNIT TEST 1 PASS: CORRECT LINE NUMBER");
}else{
    console.log("UNIT TEST 1 FAIL: INCORRECT LINE NUMBER");
    console.log("Expected: Line "+ num);
    console.log("Returned: Line "+ postiveLineNum)
}

/*
---Unit Test 2--- 
This is a negative result test.

 Unit test to see if we are able to find the match we are looking for.
 Search term is set to "the" but we are checking if it matches "Hello"
 

 
 */
const negativeTest = findSearchTermInBooks("the", twentyLeaguesIn);
if(negativeTest.SearchTerm == "Hello"){
    console.log("UNIT TEST 2 PASS: MATCH FOUND");
    
}else{
    console.log("UNIT TEST 2 FAIL: NO MATCHES");
}

/*
---Unit Test 3--- 
This result will show a fail

In this test we are checking to see if the search term is case sensitive with the result we want.

The word we want is capital "T" The but the search term is lowercase "t" the so the unit test
produces a fail until the correct word with proper case sensitivity is searched for.
*/
const caseSensitive = findSearchTermInBooks("the", twentyLeaguesIn);
const word = "The"   
if(caseSensitive.SearchTerm.match(word)){
        console.log("UNIT TEST 3 PASS: CASE MATCH");
        console.log("Returned: ", caseSensitive);

    }else{
        console.log("UNIT TEST 3 FAIL: CASE MISMATCH");
        console.log("Expected: ", word);
        console.log("Returned: ", caseSensitive.SearchTerm);
    }


    

    



