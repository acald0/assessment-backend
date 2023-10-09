const goals = require('./db.json')
let globalID = 3

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 
    getFortune: (req, res) => {
        const fortunes = ["Adventure can be real happiness.", "Chance favors those in motion.", "Practice makes perfect.", "Soon life will become more interesting.", "Take the high road."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getGoals: (req, res) => {
        console.log('Adding goal:')
        console.log(req.body)
        let {goal, status, id} = req.body
        newGoal = {
            goal,
            status,
            id: globalID
        }

        goals.push(newGoal)
        globalID++
        // console.log(goals)
        res.status(200).send(newGoal)
    },
    updateGoal: (req, res) => {
        const {newStatus, lookupID} = req.body
        let index = goals.findIndex(goal => goal.lookupID === +req.params.id)
        if(index === lookupID){
            goals[index].status === newStatus
            res.status(200).send(goals)
            console.log("New status:")
            console.log(goals)
        }

    },
    deleteGoal: (req, res) => {
        let index = goals.findIndex(goal => goal.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    }

}