'use strict';
{
  const activity = document.querySelector('input[name="activity"]');
  const completion = document.querySelector('input[name="completion"]');


  function activityClick() {  // radio の作業中クリック時
    const comBtn = document.getElementsByClassName('completion_btn').parentNode;
    comBTn.style.display = 'none';
    return comBtn;
  }

  function completionClick() {  // radio の完了クリック時
    const actBtn = document.getElementsByClassName('activity_btn').parentNode;
    actBtn.style.display = 'none';
    return actBtn;
  }

  activity.addEventListener('click', () => {
    activityClick();
  });

  completion.addEventListener('click', () => {
    completionClick();
  });


  const tbodyElement = document.getElementById('tbody_element');
  const newText = document.querySelector('input[name="new_text"]');

  let count = 0;


  function btnNum() {  //連番作成
    return count++;
  }

  function createActivityBtn() {  //作業中・完了ボタン作成
    const stateActivity = document.createElement('input');
    stateActivity.classList.add('activity_btn');
    stateActivity.type = 'button';
    stateActivity.value = '作業中';
    return stateActivity;
  }
  
  function createDeleteBtn() {  //削除ボタン作成
    const stateDeletion = document.createElement('input');
    stateDeletion.classList.add('deletion_btn');
    stateDeletion.type = 'button';
    stateDeletion.value = '削除';
    return stateDeletion;
  }

  
  document.getElementById('addition').addEventListener('click', () => {
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

    a.addEventListener('click', () => {
      a.classList.replace('activity_btn', 'completion_btn');
      a.value = '完了';
    });

    const d = createDeleteBtn();
    trElement.appendChild(d);

    d.addEventListener('click', () => {
      trElement.parentNode.removeChild(trElement);
    });
  });
}