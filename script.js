let text = [
    "Initialized reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Deleting all your files",
    "Deleting all your passwords",
    "corupting your system",
];

const addItem = async (item) => {
    // Remove trailing ellipses from the last item and mark it as done
    const divs = document.body.getElementsByTagName("div");
    if (divs.length > 0) {
        const last = divs[divs.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, -3);
        } else if (last.innerHTML.endsWith("..")) {
            last.innerHTML = last.innerHTML.slice(0, -2);
        } else if (last.innerHTML.endsWith(".")) {
            last.innerHTML = last.innerHTML.slice(0, -1);
        }
        last.innerHTML += " ...! done";
    }

    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
    await randomDelay();
};

const randomDelay = () => {
    return new Promise((resolve) => {
        const timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

async function main() {
    const t = setInterval(() => {
        const divs = document.body.getElementsByTagName("div");
        if (divs.length > 0) {
            const last = divs[divs.length - 1];
            if (last.innerHTML.endsWith("...")) {
                last.innerHTML = last.innerHTML.slice(0, -3);
            } else {
                last.innerHTML += ".";
            }
        }
    }, 100);

    for (const item of text) {
        await addItem(item);
    }

   
    const divs = document.body.getElementsByTagName("div");
    if (divs.length > 0) {
        const last = divs[divs.length - 1];
        if (last.innerHTML.endsWith(".")) {
            last.innerHTML = last.innerHTML.slice(0, -1);
        }
        last.innerHTML += " ...! done";
    }

    clearInterval(t);


    let finalMessage = document.createElement("div");
    finalMessage.innerHTML = "Bro, You are Cooked....!";
    finalMessage.style.fontSize = "2.4em";
    finalMessage.style.marginTop = "30px";
    finalMessage.style.fontWeight = "bold";
    finalMessage.style.color = "rgb(223, 21, 21)";
    document.body.append(finalMessage);
}

main();
