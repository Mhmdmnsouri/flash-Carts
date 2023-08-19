const flashCarts = document.getElementsByClassName('flashCarts')[0];
const createBox = document.getElementsByClassName('createBox')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text) {
    let div = document.createElement('div');
    let h2Question = document.createElement('h2');
    let h2Answer = document.createElement('h2');

    div.className = 'flashCart';

    h2Question.setAttribute('style', 'border-top:1px solid red; padding: 15px; margin-top:30px;');

    h2Question.innerHTML = text.question;

    h2Answer.setAttribute("style", 'text-align:center; display : none; color: red');
    h2Answer.innerHTML = text.answer;

    div.appendChild(h2Question);
    div.appendChild(h2Answer);

    div.addEventListener('click', function () {
        if (h2Answer.style.display == 'none') {
            h2Answer.style.display = 'block';
        }
        else {
            h2Answer.style.display = 'none';
        }
    });

    flashCarts.appendChild(div);
}

function addFlashCart() {
    let flashCartInfo = {
        'question': question.value,
        'answer': answer.value
    }

    contentArray.push(flashCartInfo);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function delCarts() {
    localStorage.clear();
    flashCarts.innerHTML = '';
    contentArray = [];
}

function showCreateCartBox() {
    createBox.style.display = 'block';
}

function hideCreateBox() {
    createBox.style.display = 'none';
}

