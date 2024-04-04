document.addEventListener("DOMContentLoaded", function() {
   const composeBtn = document.querySelector('.compose-btn');
   const composePopup = document.getElementById('compose-popup');
   const closeBtn = document.querySelector('.close');
   
   composePopup.style.display = 'none';

   composeBtn.addEventListener('click', () => {
       composePopup.style.display = 'block';
   });

   closeBtn.addEventListener('click', () => {
       composePopup.style.display = 'none';
   });

   
   const sendBtn = document.querySelector('.send-btn');
   sendBtn.addEventListener('click', () => {
       
       composePopup.style.display = 'none';
   });
   const emails = [
       { from: 'example1@gmail.com', subject: 'Meeting Reminder', body: 'Don\'t forget about the meeting tomorrow.' },
       { from: 'example2@gmail.com', subject: 'Vacation Plans', body: 'Let\'s discuss our vacation plans for next month.' },
      
   ];

   const emailList = document.querySelector('.email-list');
   emails.forEach(email => {
       const emailItem = document.createElement('div');
       emailItem.classList.add('email');
       emailItem.innerHTML = `
           <div class="email-header">
               <div>${email.from}</div>
               <div>${email.subject}</div>
           </div>
           <div class="email-body">${email.body}</div>
       `;
       emailList.appendChild(emailItem);
   });
});