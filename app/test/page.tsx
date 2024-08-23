"use client";

const TestPage = () => {
    const onClick = () => {
        console.log("Something");
    }
    return (
        <div onClick={onClick}>
            Hello Test Page
        </div>
    );
}

export default TestPage;