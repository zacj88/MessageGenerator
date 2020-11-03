//New project creating a random generated message.
const destination = ['Scotland', 'England', 'Spain', 'China', 'America', 'Canada', 'Australia'];
const scene = ['countryside', 'beach', 'city', 'lake', 'mountains']; 
const activiy = ['site-seeing', 'partying', 'playing sports', 'relaxing', 'taking in the culture']; 

const desitnationGenerator = (arr) => {
    
    let item1 = arr[Math.floor(Math.random() * arr.length)];
    return item1;
}

const sceneGenerator = (arr) => {
    
    let item1 = arr[Math.floor(Math.random() * arr.length)];
    return item1;
}

const activityGenerator = (arr) => {
    
    let item1 = arr[Math.floor(Math.random() * arr.length)];
    return item1;
}

 
const makeSentence = (arr1, arr2, arr3) => {

    return `The holiday generator has 
    chosen for you to go to the ${sceneGenerator(arr1)} in ${desitnationGenerator(arr2)},
    and you will be ${activityGenerator(arr3)}`;

}

console.log(makeSentence(scene, destination, activiy));