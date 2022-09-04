function fetchData(){
    fetch("https://reqres.in/api/users").then(response=>{
        if(!response.ok){
            throw Error("ERROR");
            }
        return response.json();
        })
.then (data=>{
     console.log(data.data);
     const html=data.data
.map(user=>{
return `
<div class="user">
<table>
<th>Name</th>
    <th>Date</th>
    <th>email</th>
    <th>Income</th>
    <th>IP address</th>

<tr>
<td>${user.first_name}</td>
<td>2/05/2022</td>
<td>${user.email}</td>
<td>20000</td>
<td>170.258.25460</td>
<td><img src="https://www.mysalonsuite.com/wp-content/uploads/2021/07/21cb2a21-2276-4b6f-9172-8c398380bac5.jpg" alt="$deleteIcon"/></td>
</tr>
<table>
</div>`;
}).join("");
console.log(html);
     document.querySelector("#app")
     .insertAdjacentHTML("afterbegin",html);  
})
.catch(error=>{
    console.log(error);
    });

}
fetchData(); 
//--------------------------------------------

