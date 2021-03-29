class KeyboardEvent {
    keyDown = (callback) => {
        window.addEventListener('keydown', callback(event));
    }
    keyUp = (callback) => {
        window.addEventListener('keyup', callback(event));
    }
}

export default KeyboardEvent;