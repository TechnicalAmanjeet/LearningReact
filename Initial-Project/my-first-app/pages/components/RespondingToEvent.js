import { useState } from "react";

let buttonCount = [1,2,3,4,5]

function ButtonEvent() {
    const [clickCount, setClickCount] = useState(0);

    function updateClickCount() {
        setClickCount(clickCount + 1)
    }

    return (
        <>
            <button
                 onClick={updateClickCount}
            >
                {`Clicked ${clickCount} times.`}
            </button>
            <p></p>
            <br />
        </>
    );
}

export default function RespondingToEvent() {

    let buttonList = buttonCount.map(button =>
        <ButtonEvent />
    )

    let btnCnt = [];
    let countItem = 5;

    while (countItem--) {
        console.log(countItem)
        btnCnt.fill(
            <ButtonEvent />
        )
    }


    console.log(`buttonList: ${buttonList}`)

    return (
        <>
            <h1>Counters that update seperately</h1>
            {buttonList}
            <ButtonEvent />
            {btnCnt}
        </>
    );
}
