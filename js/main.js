'use strict'
{
  const table_element = document.getElementById('table_element');
  let count = 0;

  function btnNum() {
    return count++;
  }
  

  document.getElementById('addition').addEventListener('click',() => {
    const newtext = document.querySelector('input[name="newtext"]');

    const tr_element = document.createElement('tr');
    table_element.appendChild(tr_element);

    const id = document.createElement('td');
    id.textContent = btnNum();
    tr_element.appendChild(id);

    const com = document.createElement('td');
    com.textContent = newtext.value;
    tr_element.appendChild(com);

    const state_activity = document.createElement('input');
    state_activity.classList.add('activity');
    state_activity.type = 'button';
    state_activity.value = '作業中';
    tr_element.appendChild(state_activity);

    const state_deletion = document.createElement('input');
    state_deletion.classList.add('deletion');
    state_deletion.type = 'button';
    state_deletion.value = '削除';
    tr_element.appendChild(state_deletion);
  });
}