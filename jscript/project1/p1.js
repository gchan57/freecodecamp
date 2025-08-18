const ui=document.getElementById('text-input');
const btn=document.getElementById('check-btn');
const res=document.getElementById('result');
const checkPlai=input=>{

const ogin=input;
if(input==''){
  alert('Please input a value');
  return;
}
res.replaceChildren();
const oglow=input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
let rm=`${ogin} ${
  oglow===[...oglow].reverse().join('')?'is' : 'is not'
} a palindrome`;

const pt=document.createElement('p');
pt.className='user-input'
pt.innerText=rm;
res.appendChild(pt);

res.classList.remove('hidden')
};
btn.addEventListener('click',()=>{
checkPlai(ui.value);
ui.value='';
});