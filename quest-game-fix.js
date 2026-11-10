(()=>{
  const message=document.querySelector('#questMessage');
  const roll=document.querySelector('#questRoll');
  if(!message||!roll)return;

  const continueEvents=['Портал ашылды','Ғарыш бонусы','Күн батареясы','Қара құрдым','Ғылыми жаңалық','Уақыт тұзағы','Жаңа айналым'];
  let timer;

  const unlockNextTurn=()=>{
    const title=message.querySelector('h3')?.textContent||'';
    const matched=continueEvents.some(name=>title.includes(name));
    if(!matched)return;
    clearTimeout(timer);
    const delay=title.includes('Портал')?800:250;
    timer=setTimeout(()=>{
      roll.disabled=false;
      roll.textContent='КЕЛЕСІ ЖҮРІС →';
    },delay);
  };

  new MutationObserver(unlockNextTurn).observe(message,{childList:true,subtree:true});
})();
