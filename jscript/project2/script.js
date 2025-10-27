const val=document.getElementById('number');
const btn=document.getElementById('convert-btn');
const r=document.getElementById('output');
const conv=val=>{
  let re="";
  if(val.value==0){
    re="Please enter a valid number";
  }
  if(val.value<0){
    re="Please enter a number greater than or equal to 1";
  }
  if(val.value>=4000){
re="Please enter a number less than or equal to 3999";
  }
 else{
   let valu=val.value;
  const base=[1,4,5,9,10,40,50,90,100,400,500,900,1000];
  const cval=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let i=base.length-1;
  while(valu>0){
    let div=Math.floor(valu/base[i]);
    while(div){
      re+=cval[i];
      div--;
    }
    valu=valu%base[i];
    i--;
  }}
   r.replaceChildren();
const pt=document.createElement('p');
pt.className='user-input';
pt.innerText=re;
r.appendChild(pt);
r.classList.remove('hidden')};
btn.addEventListener('click',()=>{
conv(val);
val.value='';
});