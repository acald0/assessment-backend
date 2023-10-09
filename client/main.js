const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goalForm = document.querySelector('form')
const updateForm = document.getElementById('form2')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

fortuneBtn.addEventListener('click', getFortune)



const userContainer = document.querySelector("#user-info")

const login = body => axios.post("http://localhost:4000/api/goals", body).then(res => {
    createGoalCard(res.data)
    // console.log(res.data)
}).catch(err => {
    console.log(err)
    alert('Uh ohhhh')   
})

function loginSubmitHandler(e) {
    e.preventDefault()

    let goal = document.querySelector('#goal')
    let status = document.querySelector('#status')


    let bodyObj = {
        goal: goal.value,
        status: status.value
    }

    login(bodyObj)

    goal.value = ''

}

function createGoalCard(data) {

    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class="goal">Goal: ${data.goal}</p>
    <p class="status">Status: ${data.status}</p>
    <p class="id">ID: ${data.id}</p>
    `
    userContainer.appendChild(userCard)
}

goalForm.addEventListener('submit', loginSubmitHandler)


// function displayGoals(arr) {
//     userContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createGoalCard(arr[i])
//     }
// }

// displayGoals(goals)


const updateGoal = (id, type) => axios.put(`http://localhost:4000/api/goals/${id}`)
.then(res => {
    createGoalCard(res.data)
})

updateForm.addEventListener('submit', updateGoal)


const deleteGoal = (id, type) => axios.delete(`http://localhost:4000/api/goals/${id}`)
.then(res => {
    createGoalCard(res.data)
})

updateForm.addEventListener('submit', deleteGoal)



