class Github{
    constructor(){
        this.config = {
            headers: {
              Authorization: '399edc405afa9db0ababe6311ec3c5040607d308'
            }
        }
        this.repos_count=5;
        this.repos_sort='created:asc'
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}`,
        this.config );
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}`,
        this.config );

        const profile=await profileResponse.json();

        const repos=await repoResponse.json();

        return{
          profile,
          repos
        }

    }
}