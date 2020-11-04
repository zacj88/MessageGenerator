//New project creating a random generated message.
const holiday = {
    destination: ['Scotland', 'England', 'Spain', 'China', 'America', 'Canada', 'Australia'],
    scene: ['countryside', 'beach', 'city', 'lakes', 'mountains'],
    activity: ['site-seeing', 'partying', 'playing sports', 'relaxing', 'taking in the culture']
}

const randomNum = (num) => {
    return [Math.floor(Math.random() * num)];
}

const holidayGenerator = () => {
    let holidayIdea = []; 

    for (let prop in holiday){
        let index = randomNum(holiday[prop].length)

        switch(prop) {

            case 'destination':
                holidayIdea.push(`The holiday generator has chosen for you to go to ${holiday[prop][index]}. `)
                break
            case 'scene':
                holidayIdea.push(`It believes that the best place to go in this country is the ${holiday[prop][index]}, `)
                break
            case 'activity':
                holidayIdea.push(`while there you will be ${holiday[prop][index]}......Enjoy!`)
                break
            default:
                holidayIdea.push("something appears to have gone wrong...looks like there is not holiday for you :(")

        }
    }
 
    let Sentence = holidayIdea.join("");
    return Sentence
}

console.log(holidayGenerator());