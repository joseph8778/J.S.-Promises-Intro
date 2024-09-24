
//Sets variable for span in HTML
const statusRef = (document.querySelector(".status"))

const videoRef = (document.querySelector(".video"))

// Creates promise and defines subscription status as VIP
function getSubscriptionStatus () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("")
        }, 2000)
    })
}

//Creates function getVideo with parameter subStatus
//creates new promise with if else conditions.
//checks parameter subStatus's value and conditionally assigns getVideo value with resolve or reject

function getVideo (subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show Video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("Show Trailer")
        }
        else {
            reject("No Video")   
        }
    })
}

//calls getsubstatus promise for value, awaits for value, then assigns value to status
//Sets connected span in HTML to status value
//prints the getVideo value with status as the assigned argument/parameter for function
async function main() {
    const status = await getSubscriptionStatus();
   statusRef.innerHTML = status;
   try {
    console.log(await getVideo(status))
    videoRef.innerHTML = await getVideo(status)
   }
catch (e) {
    console.log(e)
    videoRef.innerHTML = e
}
    
}

main();