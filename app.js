const statusRef = (document.querySelector(".status"))

function getSubscriptionStatus () {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve("VIP")
        }, 2000)
 
    })
}

// getSubscriptionStatus().then(response => console.log(response))

async function main() {
   const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
}

main();
