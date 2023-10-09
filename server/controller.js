const goals = []

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
        let {goal} = req.body
        newGoal = {
            goal
        }

        goals.push(newGoal)
        // console.log(goals)
        res.status(200).send(newGoal)
    }

}