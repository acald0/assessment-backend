const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const goalForm = document.querySelector('form')

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

    let bodyObj = {
        goal: goal.value,
    }

    login(bodyObj)

    goal.value = ''

}

function createGoalCard(data) {

    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class="goal">Goal: ${data.goal}</p>
    `
    userContainer.appendChild(userCard)
}

goalForm.addEventListener('submit', loginSubmitHandler)