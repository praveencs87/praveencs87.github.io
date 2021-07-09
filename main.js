var body = document.getElementsByTagName('body');
const Widget = Object.create({
    create(chatId) {
		alert(1);
        const wdg = document.createElement("div")
        wdg.classList.add("chat-box");
        wdg.innerHTML = `<h1>Chat: ${ chatId }</h1>`;
        // Load your chat data into UI
        return wdg;
    }
});
const myWidgetInstance = Widget.create("chat-12345");
body.appendChild(myWidgetInstance);
