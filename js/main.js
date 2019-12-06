'use strict';
{
  const tbodyElement = document.getElementById('tbody_element');
  const newText = document.querySelector('input[name="new_text"]');

  let count = 0;

  function btnNum() {
    return count++;
  }

  function createActivityBtn() {  //作業中ボタン作成
    const stateActivity = document.createElement('input');
    stateActivity.classList.add('activity');
    stateActivity.type = 'button';
    stateActivity.value = '作業中';
    return stateActivity;
  }

  function createCompletionBtn() {  //完了ボタン作成
    const stateCompletion = document.createElement('input');
    stateCompletion.classList.add('completion');
    stateCompletion.type = 'button';
    stateCompletion.value = '完了';
    return stateCompletion;
  }
  
  function createDeleteBtn() {  //削除ボタン作成
    const stateDeletion = document.createElement('input');
    stateDeletion.classList.add('deletion');
    stateDeletion.type = 'button';
    stateDeletion.value = '削除';
    return stateDeletion;
  }

  
  document.getElementById('addition').addEventListener('click',() => {
    const trElement = document.createElement('tr');
    tbodyElement.appendChild(trElement);

    const id = document.createElement('td');
    id.textContent = btnNum();
    trElement.appendChild(id);

    const com = document.createElement('td');
    com.textContent = newText.value;
    trElement.appendChild(com);

    const a = createActivityBtn();
    trElement.appendChild(a);

    const d = createDeleteBtn();
    trElement.appendChild(d);
  });
}