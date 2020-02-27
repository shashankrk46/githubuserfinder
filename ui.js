class UI{
    constructor(){
        this.profile=document.getElementById('profile')
    }
    showProfile(user){
        // console.log(user);
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
        view profile</a>

        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info ">Following: ${user.following}</span>
         <br><br>
         <ul class="list-group">
         <li class="list-group item">Company: ${user.company} </li>
         <li class="list-group item">Website/blog: ${user.blog} </li>
         <li class="list-group item">Location: ${user.location} </li>
         <li class="list-group item">Member since: ${user.created_at} </li>
         </ul>

        </div>
        </div>
        </div>
        <h3 class="page-haeding mb-3">latest repo</h3>
        <div id="repos"></div>

        `
    }

    // show alert
    showAlert(message,className){
        // create div
        const div=document.createElement('div');
        // add classes
        div.className=className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container=document.querySelector('.searchContainer');
        // search box
        const search=document.querySelector('.search');
        // insert alert
        container.insertBefore(div,search);
    }

    // clearprofile
    clearProfile(){
        this.profile.innerHTML='';
    }

    
}