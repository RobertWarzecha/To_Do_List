{
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }

    const tasks = [
        
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
        </div> `;
        }
        document.querySelector(".listBody").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".listBody__removeRed");
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
            tasks.splice(index, 1);
            render();
            })
        })
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
            addNewTask(newTaskContent);
        })
    };

    init ();
}