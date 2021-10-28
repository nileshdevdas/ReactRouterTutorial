import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json')
            .then(res => res.json())
            .then(json => console.log(json.public_repos));
        console.log("Hello!");
    })
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1550330562-b055aa030d73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
    )
}
