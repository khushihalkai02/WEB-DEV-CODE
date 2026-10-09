function fetchUserData (){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    let success = true;
    if (success == true){
        resolve({name: "Dudubudu World", URL: "https://dudubuduhappyplace.com"})

    } 
    else {
        reject("file crashed");
    }

    },3000);
    
    })
}

async function getUserData() {
    try {
        console.log(`Fetching user data...`);
        const userData = await fetchUserData()
        console.log("User data: ", userData);
        
    } catch (error) {
        console.log("error fetching data", error);
        
    }
}

getUserData();