// Global declaration
const clickedItem = document.getElementById('clicked');
const warningMessage = document.getElementById('warning');
const notFoundMessage = document.getElementById('not-found');

// display none 
clickedItem.style.display = 'none';
warningMessage.style.display = 'none';
notFoundMessage.style.display = 'none';



//search mobile function
const searchMobile = () =>{
    const searchText = document.getElementById('search-field');
    const searchTextValue = searchText.value;
    searchText.value = '';

    //for empty input field
        if(searchTextValue == ''){
            notFoundMessage.style.display = 'none';
            warningMessage.style.display = 'block';
            warningMessage.innerText = 'Please enter a value in search box!!';
            document.getElementById('search-result').textContent = '';
        }
        else{
            warningMessage.style.display = 'none';
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchTextValue}`;

            fetch(url)
            .then(res => res.json())
            .then(data => displayResult(data.data));
        }
}


// Result displaying function
const displayResult = mobiles => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
 
 //if no search result found   
     if(mobiles == ''){
        warningMessage.style.display = 'none';
        notFoundMessage.style.display = 'block';
        notFoundMessage.innerText = 'No search result found!!';
    }
    else{
        notFoundMessage.style.display = 'none';
        mobiles.forEach(mobile => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100 p-3">
                <img class="w-50 h-75 mx-auto" src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body mt-3">
                <h5 class="card-title">${mobile.phone_name}</h5>
                <div><span class="h6">Brand : </span><span>${mobile.brand}</span></div>
            </div>
            `;
            searchResult.appendChild(div);
            console.log(mobile);
        });
    } 
}