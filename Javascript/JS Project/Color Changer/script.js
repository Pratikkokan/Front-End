const button=document.querySelectorAll('.button');


const body= document.querySelector("body");

button.forEach( function (btn) {
    console.log(btn);

  btn.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'skyblue')
    {
        body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'pink') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
      }
      
      if (e.target.id === 'purple') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'cyan') {
        body.style.backgroundColor = e.target.id;
      }

      if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
      }

     
  })

});


