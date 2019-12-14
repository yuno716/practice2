'use strict';
{
  function radioChange() {
    const checks = document.getElementsByName('checkList');  // name 取得

    for(let i = 0; i < checks.length; i++){
      if (checks[1].checked) {  // name の2番目チェック時
        const comBtn = document.getElementsByClassName('completion_btn').parentNode;
        comBtn.style.display = 'none';
      } else if (checks[2].checked) {  // name の3番目チェック時
        const actBtn = document.getElementsByClassName('activity_btn').parentNode;
        actBtn.style.display = 'none';
      }
    }
  }

  radioChange();


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

    const act = createActivityBtn();
    trElement.appendChild(act);

    act.addEventListener('click', () => {
      act.classList.replace('activity_btn', 'completion_btn');
      act.value = '完了';
    });

    const del = createDeleteBtn();
    trElement.appendChild(del);

    del.addEventListener('click', () => {
      trElement.parentNode.removeChild(trElement);
    });
  });
}