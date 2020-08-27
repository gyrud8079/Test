
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var inputWindow = document.createElement('input');
폼.append(inputWindow);
//document.body.append(inputWindow);

var btn = document.createElement('button');
btn.textContent = 'input!';
폼.append(btn);
//document.body.append(btn);

var result = document.createElement('div');
document.body.append(result);

폼.addEventListener('submit', function 콜백함수 (e) {
    e.preventDefault();
    if(단어.textContent[단어.textContent.length -1] === inputWindow.value[0]){
        result.textContent = '딩동댕';
        단어.textContent = inputWindow.value;
        inputWindow.value = '';
        inputWindow.focus();
    }else {
        result.textContent = '땡';
        inputWindow.value = '';
        inputWindow.focus();
    }
} 
);

// var word = '제로초';

// while ( true ){
//     var answer = prompt(word);
//     if(word[word.length -1]=== answer[0]){
//         alert('딩동댕');
//         word = answer;
//     }
//      else{
//          alert('땡');
//     }
// }
