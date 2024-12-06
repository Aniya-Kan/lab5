// console.log("dssd");
/*var num;
num = 5;*/

/*           переменные и их вывод в консоль
var num = 5;
num = 7;
document.write(num);
const num2 = 1; //не изменяется 
num2 = 4;
document.write(num2);*/


/*            Работа с переменными и типами данных
var num_1=5;
var num_2 = 15;
var res = num_1 - num_2;
console.log(res)
var num_3 = 7;
num_3 = num_3+7;
console.log(num_3);
var str1 = Number("12");
var str2=Number("2"); //Number - класс который позволяет перевести строку в число и производить математические действия
console.log(str1+str2)
*/

/*                      Условный оператор
var number=23;
if(number==3){
    number++
    console.log("Ok")
} else{
    console.log("no")
} */

/*                            Switch - case
var str = "word";
switch(str){
    case "4":
        console.log("4");
        break;
    case "5":
        console.log("5");
        break
    case "Word":
        console.log("teeee");
        break;
        default:
            console.log("nonon");
        break;

}*/
/*        массив
var arr = [5, true, 5.7, 0];
arr[2] = false;  -----  заменяем второй жлемент массива новым значением
console.log(arr.length); */


/*         многомерные массивы
var arr = [[1,2,3],[3,4,5,5],[22,44,true]];
arr[2][0] = 0;----- заменяем первый элемент второго массива 
console.log(arr) */

/*                             for
for(var i=100;i>10;i--){
console.log(i);}
*/

/*             Функции всплывающих окон
alert("Hello");  //Просто всплывающее окно
confirm("Cookies"); //Всплывающее окно с кнопкой ОК и отмена
prompt("Enter name: "); //Всплывающее окно в которое можно ввести данные
*/


function summa(a,b){
    var res = a+b;
    console.log(res);
}
summa(5,7);