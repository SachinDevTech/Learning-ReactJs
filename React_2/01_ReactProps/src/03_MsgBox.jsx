export default function MsgBox({username, textColor}) {
    let styles = {color : textColor};
    return(
        <h1 style={styles}>Hellow! {username}</h1> //Method-1
        // <h1 style={{color : textColor}}>Hellow! {username}</h1> //Method-2

    );
}
