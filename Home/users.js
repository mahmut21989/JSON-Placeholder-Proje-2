let row = document.querySelector(".row");

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  data.forEach(user => {
    createCard(user);
  });
}

function createCard(user) {
  row.innerHTML += ` <div class="parent">
  <div class="card">
      <div class="content-box">
     
          <h1 class="card-title"><i class="fa-solid fa-user" ></i>&nbsp ${user.name} </h1>
          <h3 class='fw-bold'>${user.username}</h3>
          <p class="card-content">
          <i class="fa-solid fa-phone ps-2 pt-1"></i>&nbsp &nbsp
          ${user.phone}
          </p>
          <p> Address: <br/>
           <i class="fa-solid fa-location-dot pe-2"></i>&nbsp${user.address.street}
           ${user.address.suite} ${user.address.city} ${user.address.geo.lat}
           </p>
          
         
      </div>
   
      <div class="date-box">
          <span class="month"></span>
          <span class="date"> <p>${user.id}</p></span>
      </div>
     
  </div>
</div>`;
}



getUsers();




