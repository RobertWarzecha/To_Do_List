{

    const tasks = [
        {
            content: "nagrać odcinek na yt",
            done: true
        },
        {
            content: "nagnek na yt",
            done: false
        },
        {
            content: "nagnek na yt",
        },
    ];

    const render = () => {
        let htmlString = "";
        
        for (const task of tasks){
            htmlString += 
            `<div class="listBody__row">
            <div class="listBody__lp">
                1.
            </div>
            <div class=listBody__checkbox>
                <button class=${task.done ? "\"listBody__checkboxGreen\"" : "listBody__checkboxRed"}>
                    ${task.done ? "✔️" : "❌"}
                </button>
            </div>
            <div class="listBody__task">
                ${task.content}
            </div>
            <div class="listBody__remove">
                <button class="listBody__removeRed">
                    <img class="image" src="IMAGE/kosz.png" >
                </button>
            </div>
        </div>
            `;
        }
        document.querySelector(".listBody").innerHTML = htmlString;
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", () => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".addTask__input").value.trim();
            if (newTaskContent === "") {
                return;
            }
            tasks.push({
                content: newTaskContent,
            });
            render();
        })
    };

    init ();
}