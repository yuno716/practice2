'use strict';
{
  const btn1 = document.querySelector('input[name="btn1"]');
  const btn2 = document.querySelector('input[name="btn2"]');
  const btn3 = document.querySelector('input[name="btn3"]');

  function btn1Click() {  //checkbox のすべてクリック時
    btn1.checked = true;
    btn2.checked = false;
    btn3.checked = false;
  }
  function btn2Click() {  //checkbox の作業中クリック時
    btn1.checked = false;
    btn2.checked = true;
    btn3.checked = false;
  }
  function btn3Click() {  //checkbox の完了クリック時
    btn1.checked = false;
    btn2.checked = false;
    btn3.checked = true;
  }

  btn1.addEventListener('click', () => {
    btn1Click();
  });

  btn2.addEventListener('click', () => {
    btn2Click();
  });
  btn3.addEventListener('click', () => {
    btn3Click();
  });


  const tbodyElement = document.getElementById('tbody_element');
  const newText = document.querySelector('input[name="new_text"]');

  let count = 0;

  function btnNum() {  //連番作成
    return count++;
  }

  function createActivityBtn() {  //作業中・完了ボタン作成
    const stateActivity = document.createElement('input');
    stateActivity.classList.add('activity');
    stateActivity.type = 'button';
    stateActivity.value = '作業中';
    return stateActivity;
  }
  
  function createDeleteBtn() {  //削除ボタン作成
    const stateDeletion = document.createElement('input');
    stateDeletion.classList.add('deletion');
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
      a.value = '完了';
    });

    const d = createDeleteBtn();
    trElement.appendChild(d);

    d.addEventListener('click', () => {
      trElement.parentNode.removeChild(trElement);
    });
  });
}