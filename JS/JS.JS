{
    let taskNumber = 0;
    const addNewTask = (newTaskContent) => {
        taskNumber = 0;
        tasks.push({
            content: newTaskContent,
           
        });
        document.getElementById("myInput").value = "";
        render();
    }

    const tasks = [
        
    ];

    const render = () => {
        let htmlString = "";;
        for (const task of tasks){
           
            taskNumber++;
            htmlString += 
            `<div class="listBody__row">
            <div class="listBody__lp">
            ${taskNumber}
            </div>
            <div class=listBody__checkbox>
                <button class= "js-button ${task.done ? "listBody__checkboxGreen\"" : "listBody__checkboxRed\""}>
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
            taskNumber = 0;
            render();
            })
        })

        const toggleDoneButtons1 = document.querySelectorAll(".js-button");
        toggleDoneButtons1.forEach((toggleDoneButtons1, index) => {
            toggleDoneButtons1.addEventListener("click", () => {
            tasks[index].done =! tasks[index].done;
            taskNumber = 0;
            render();
            })
        })
        
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
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