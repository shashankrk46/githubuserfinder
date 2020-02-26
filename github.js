class Github{
    constructor(){
        this.config = {
            headers: {
              Authorization: '399edc405afa9db0ababe6311ec3c5040607d308 '
            }
        }
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}`,
        this.config );

        const profile=await profileResponse.json();

        return{
          profile
        }

    }
}