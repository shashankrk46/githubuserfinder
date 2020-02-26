
// initiate github
const github=new Github;

// init UI
const ui=new UI;

// search input

const searchUser=document.getElementById('searchUser');


// search input event listener
searchUser.addEventListener('keyup',(e)=>{
//   get input text
const userText=e.target.value;

if(userText !==''){
//   make http call
github.getUser(userText)
.then(data=>{
    if(data.profile.message==='not found'){
        // show alert

    }else{
        // show profile
        ui.showProfile(data.profile);

    }
})
}else{
    // clear profile
}
});