import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l=document.querySelector(".feedback-form");let o={email:"",message:""};const s=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;o=e;for(const t in e)l.elements[t]&&(l.elements[t].value=e[t])}catch(e){console.log(e)}};s();const m=e=>{const t=e.target,r=t.value,a=t.name;o[a]=r,localStorage.setItem("feedback-form-state",JSON.stringify(o))},n=e=>{e.preventDefault();let t=!0;for(const r in o)if(o[r].trim()===""){t=!1;break}if(!t){alert("Fill please all fields");return}console.log(o),l.reset(),localStorage.removeItem("feedback-form-state"),o={email:"",message:""}};l.addEventListener("submit",n);l.addEventListener("input",m);
//# sourceMappingURL=2-form.js.map
