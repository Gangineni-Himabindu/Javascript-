function fetchPosts() {
    return new Promise((resolve, reject) => {  // Corrected "promises" to "Promise"
        setTimeout(() => {
            const posts = ["post1", "post2"];
            if (posts.length > 0) {
                resolve(posts);
            } else {
                reject("No posts available");  // Added error message for rejection
            }
        }, 2000);
    });
}
function fetchLikes(posts){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(posts.length>0){
            const likes=[1,2,3]
            if(likes.length>0){
                resolve(likes)
            }
            else{
                reject("unable to fetch llikes,try again")
            }
        }
     },2000)   
    })
}

async function asyncOperation(){
    try{
        const posts=await fetchPosts()
    console.log(posts)
    const likes=await fetchLikes(posts)
    console.log(likes)
    }catch(err){
        console.log(err)
    }
    
}
asyncOperation()
