const apiUrl = 'http://localhost:9001';

// Авторизация пользователя
export const autho = () => {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const data = {
        login: login,
        password: password
    }

    fetch(`${apiUrl}/autho`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
    })
    .then(resurlt => resurlt.json())
    .then((resurlt) => {
        /*if (!resurlt.status == 'ok'){
        } */
        if (resurlt.token){
            localStorage.setItem('token', resurlt.token)
        }
    })
}

export const calculator = () => {
    const year = 12;

    const rateYear = parseFloat(document.getElementById('rateYear').value);
    const numberYeas = parseFloat(document.getElementById('numberYeas').value);
    const neededAmount = parseFloat(document.getElementById('neededAmount').value);

    // Расчитываем общую ставку
    const rateMonth = rateYear / year / 100;
    const totalMonths = numberYeas * year;
    const rateGeneral = Math.pow(1 + rateMonth, totalMonths);
    
    // Расчитываем ежемесячный платеж
    const payMonth = neededAmount * rateMonth * rateGeneral / (rateGeneral - 1);
    
    // Необходимый доход (в месяц)
    const requiredIncome = payMonth * 2.5;
    
    // Общая сумма (которую нужно выплатить)
    const totalPay = payMonth * numberYeas * year;

    document.getElementById('payMonth').innerHTML = payMonth.toFixed(2);
    document.getElementById('requiredIncome').innerHTML = requiredIncome.toFixed(2);
    document.getElementById('totalPay').innerHTML = totalPay.toFixed(2);

    // console.log(totalPay)
    
    return false;
}

export const addCalc = () => {

}