// Code your solution here
let friends = ['Teresa','Grecia','Alex','Shannon','Adam',]
function findMatching(listOfNames,person) {
    let sameName = listOfNames.filter(function(element) {
        if (element.toLowerCase() === person.toLowerCase()) {
            return element;}
    });
    return sameName;
}
function fuzzyMatch(listOfNames,letters) {
    let sameLetters = listOfNames.filter(function(element) {
        return element.startsWith(letters);
    });
    return sameLetters;
};
function matchName(driverObjects,randomName) {
    let nameEqual = driverObjects.filter(function(element) {
        if (element.name === randomName) {
            return element.name;}
    });
    return nameEqual;
}