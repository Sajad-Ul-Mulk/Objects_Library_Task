//javascript

const title= document.querySelector('#title');
const author_name=document.querySelector('#author_name');
const status=document.querySelector('#status');
const addButton=document.querySelector('#addBook');
const pages=document.querySelector('#pages');
const bookArray=[]

function resetFields(){
    title.value='';
    author_name.value='';
    pages.value='';
}
function fetchBookInfo() {

    let bookName=title.value;
    let authorName=author_name.value;
    let total_pages=pages.value;
    let status_text=status.options[status.selectedIndex].text;
   
    if(bookName===''||authorName==='') {
        alert('Please enter Valid Book Data')
    return
    }
    
    
    let info=[];
    
    info.push(bookName);
    info.push(authorName);
    info.push(status_text);
    info.push(total_pages);
    
    // for (const infoKey in info) {
    //     console.log(info[infoKey]);
    // }
    makeBookObject(info)
    
    // location.reload()
}

function Book(name,author,status,t_pages) {
    this.book_name=name;
    this.author_name=author;
    this.status=status;
    this.total_pages=t_pages;
}


function displayBooks() {
    console.table(bookArray);
    resetFields()
}

function makeBookObject(info) {
    bookArray.unshift(new Book(info[0],info[1],info[2],info[3]));
    displayBooks()
}

addButton.addEventListener('click',fetchBookInfo)
console.log(title);
console.log(author_name);
console.log(status);