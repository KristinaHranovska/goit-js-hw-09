import"./assets/common-b0796c78.js";const e=document.querySelector(".feedback-form");m();e.addEventListener("input",l);e.addEventListener("submit",n);function l(){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}function n(t){t.preventDefault();const s=e.elements.email.value.trim(),a=e.elements.message.value.trim();if(!s||!a){alert("Please, fill in all fields before sending!");return}console.log({email:s,message:a}),e.reset(),localStorage.clear()}function m(){const t=JSON.parse(localStorage.getItem("feedback-form-state"))??{};e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}
//# sourceMappingURL=commonHelpers2.js.map
