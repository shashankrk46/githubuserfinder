class Github{
    constructor(){
        this.client_id='834bf6e68b47e02fdcd3';
        this.client_secret='88c334dc90448754f155a13f62383f1c165ea611';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();

        return{
          profile
        }

    }
}