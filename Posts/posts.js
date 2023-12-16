let row = document.querySelector(".row");

async function userPrompt(){
  let userInput = prompt('Lütfen 1 ile 10 arasında bir sayı yazınız');
  try {
    let userId = parseInt(userInput);
    if (userId <= 0 || userId > 10 || isNaN(userId) ) {
      throw new Error('Geçersiz userId. Lütfen 1 ile 10 arasında bir sayı girin.');

  }
  
  const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('userId', userId);
    window.history.replaceState(null, null, `?${urlParams.toString()}`);

    await getUsers(userId);
  
  } catch (error) {
    alert(error)
  }
}

async function getUsers(userId) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = await response.json();
    data.forEach(post => {
      createCard(post);
  })}
  catch(error){
    console.error(error);
  }
  }

function createCard(post) {
  row.innerHTML += ` <div class="parent card2">
  <div class="card">
      <div class="content-box">
          <h1 class="card-title">${post.title}</h1>
          <p class="card-content">
          ${post.body}
          </p>
         
      </div>
      <div class="date-box">
          <span class="month">${post.id}</span>
          <span class="date">${post.userId}</span>
      </div>
  </div>
</div>`;
}



userPrompt()