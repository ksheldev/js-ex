// 1

function getCurrentDate(separator) {
  console.log(new Date().getDate() + separator + ( new Date().getMonth() +1) + separator + new Date().getFullYear())
}

getCurrentDate('-')

// 2 

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const getMonthName = new Date("10/11/2021");
console.log("The current month is " + monthNames[getMonthName.getMonth()]);


//3

function dateCompare(){
  const date1 = new Date('11/14/2021 00:01');
  const date2 = new Date('11/14/2021 00:00');

  if(date1 > date2){
      console.log(`${'11/14/2021 00:01'} больше, чем ${'11/14/2021 00:00'}`)
  } else if(date1 < date2){
      console.log(`${'11/14/2021 00:00'} больше, чем ${'11/14/2021 00:01'}`)
  } else{
      console.log(`Обе даты равны`)
  }
}

dateCompare("11/14/2021 00:00", "11/14/2021 00:01")


//4 

const day = new Date('Nov 16, 2020');
const n = day.getDay();
if( n == 6 )
console.log("выходной");
else
console.log("не выходной");


// 5

function max (a, b){
  return a < b ? b : a;
  }
  console.log(max(-1, 0));
  
 // 6
  
  function min(a, b) {
    if (a < b ? a : (a = b)) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(0, -1, 100, 500, 100500));
  
  // 7
  
  function min(...arg) {
    return arg.reduce((a, b) => {
      return a < b ? a : (a = b);
    }, arg[0]);
  }
  
  
  // 8
  
  const users = [
    { firstName: "Иван", lastName: "Золо", age: 17 },
    { firstName: "Игорь", lastName: "Дон", age: 54 },
    { firstName: "Ваня", lastName: "Гон", age: 33 },
    { firstName: "Денис", lastName: "Пушкин", age: 11 },
    { firstName: "Григорий", lastName: "Лепс", age: 70 },
    { firstName: "Костя", lastName: "Шак", age: 24 },
    { firstName: "Артем", lastName: "Лог", age: 40 },
    { firstName: "Вася", lastName: "Пуг", age: 42 },
    { firstName: "Макс", lastName: "Род", age: 12 },
    { firstName: "Андрей", lastName: "Куй", age: 30 },
  ];
  
  users.forEach(function(item, i, users) {
    item.fullName = item.firstName+" "+item.lastName;
  });
  let ageNum = users.filter((item) =>{
    return item.age >= 18;
  });
  let result = users.map(({firstName, lastName}) => `\n${firstName} ${lastName}`).join('')
  
  console.log(users);
  console.log(ageNum);
  console.log(result);
  
  // 9
  
  let words = [1,2,3,4,5]
  test(words)
  function test(Arr) {
    words.splice(0, 1);
  }
     console.log(words);
  
  // 10
  
  let words = [1,2,3,4,5]
  test(words)
  function test(Arr) {
    words.splice(5, 0, 6, 7, 8);
  }
     console.log(words);