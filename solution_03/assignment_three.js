// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = "KASHIF ALI";
console.log(person_name); // just printing person's name.
console.log(person_name.toLowerCase()); // printing person's name in lower case.
console.log(person_name.toUpperCase()); // printing person's name in upper case.
function toTitleCase(personName) {
    var words = personName.split(" ");
    var titleCaseName = "";
    for (var i = 0; i < words.length; i++) {
        titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        if (words.length > 1) {
            titleCaseName += " ";
        }
        ;
    }
    ;
    console.log(titleCaseName);
}
;
toTitleCase(person_name); // printing person's name in title case.
