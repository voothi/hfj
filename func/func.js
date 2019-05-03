var avatar;
var levelThreshold = 1000;

function getScope(points) {
    var scope;
    var i = 0;
    while (i < levelThreshold) {
        i = i + 1;
    }
    levelThreshold = points;
    return scope;
}

getScope(11);
console.log('global' +  levelThreshold);

function getTest(test) {
    var scope;
    var i = 0;
    while (i < levelThreshold) {
        i = i + 1;
    }
    console.log('func test ' + levelThreshold);
    return scope;
}

getTest(12);