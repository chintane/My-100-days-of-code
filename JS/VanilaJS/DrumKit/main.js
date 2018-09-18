const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend' , endSound ) );	
 keys.forEach( key => key.addEventListener('click',playSoundByClick));
  window.addEventListener('keydown',playSound);   
 function playSound(e){
    // get audio element that matches key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;   
    // make sure playing from the start
   audio.currentTime = 0;
    // play sound
   audio.play();
   // add playing class
  key.classList.add('playing'); // includes 'transform' css property  
  }
  
  function playSoundByClick(e){
  
   const keyCode = this.getAttribute('data-key');    
   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   if(!audio) return;   
    // make sure playing from the start
   audio.currentTime = 0;
    // play sound
   audio.play();
   const key = document.querySelector(`.key[data-key="${keyCode}"]`);
   key.classList.add('playing'); // includes 'transform' css property  
  }

  function endSound(e){
    if(e.propertyName !== 'transform') return; // only listen for transform changes
    this.classList.remove('playing');
  }