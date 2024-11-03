// login user

let username= document.querySelector('#username')
let password = document.querySelector('#password')
let loginBtn = document.querySelector('#sign_in')

// from localstorage
let getUser = localStorage.getItem('username')
let getBassword = localStorage.getItem('password')

loginBtn.addEventListener('click' , login)

function login(e){
        e.preventDefault()
        if(username.value === "" || password.value === ""){
            alert("please fill data");
        }else{
           if((getUser.trim() &&  getUser === username.value.trim()) && (getBassword && getBassword === password.value.trim())){
    setTimeout(()=>{
        window.location ='index.html'
    
    },1500)        
           }else{
           alert('pass or username is wrong');
            
           }
        
    
    }
}