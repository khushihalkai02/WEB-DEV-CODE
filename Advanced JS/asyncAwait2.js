function fetchPostData (){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Post data fetched")
    }, 2000);

    })
}

function fetchCommentData (){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched")
        }, 3000);
    })
}

async function getBlogData(){
    try {
        console.log("fetching blog data");
        //const postData = await fetchPostData()
        //const commentData = await fetchCommentData()

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log("post data fetched");
        console.log("comment data fetched");
        console.log("data fetching completed");
        
        
        
        
    } catch (error) {
        console.log("error fetching blog data", error);
        
    }
}

getBlogData();