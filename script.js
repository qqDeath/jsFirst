let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", 10000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "01.01.21");

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 10000);
    }
}
start();

let  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: true,
    chooseExpenses: ()=> {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if( typeof(a) === "string" && typeof(a)!= null && typeof(b)!= null &&
                a != "" && b !="" && a.length < 50)  //проверка ввода данных
                {
                    console.log("done");
                    appData.expenses [a] = b;
                }   else {
                    i--;
                }
        }
    },
    detectDayBudget: ()=> {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " +appData.moneyPerDay);
    },
    detectLevel: ()=> {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: ()=> {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
        }
    },
    chooseOptExpenses: ()=> {
        for(let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: ()=> {
    let i = 0;
    while (i < 1) {
        let items;
        items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if(typeof(items) === "string" && typeof(items) != null && items != ""){
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            i++;
            } else {i = i + 0;}
        }
    appData.income.forEach('Способы доп. заработка:' + appData.income);
    }
};
/* appData.chooseIncome; */
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key, ":", appData[key]);
}

