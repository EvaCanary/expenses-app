const expenses = [];
const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const historyNode = document.querySelector('.js-history');
buttonNode.addEventListener('click', function() {
//если ничего нет в поле ввода - вернуть
// 1. получаем значение из поля воода
if (!inputNode.value) {
    return;
}
console.log(inputNode.value);
// ввод пользователя передается в функцию
 const expense = parseInt(inputNode.value);
 // сброс поля ввода после внесения
 inputNode.value = '';
// внесение данных по кнопке
// 2. сохраняем трату в список
 expenses.push(expense);
// 3. выводим новый список трат
const html = `<ol><li>${expense}</li></ol>`;
historyNode.innerHTML = html;
});


