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