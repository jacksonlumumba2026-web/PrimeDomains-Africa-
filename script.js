const domains = [
{
name:"TechAfricaHub.com",
price:"$450"
},
{
name:"KenyaStartup.co.ke",
price:"$200"
}
];

const list = document.getElementById("domainList");

domains.forEach(domain => {
list.innerHTML += `
<div class="card">
<h3>${domain.name}</h3>
<p>${domain.price}</p>
<button>Buy</button>
</div>
`;
});
