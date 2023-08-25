{

    const tasks = [
        {
            content: "nagrać odcinek na yt",
        },
        {
            content: "nagnek na yt",
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
            <div class="listBody__checkbox">
                <button class="listBody__checkboxGreen">
                    ✔️
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
    };

    init ();
}