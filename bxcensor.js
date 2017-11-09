// bxCensor 9/11/2017
// กด F12 เปิด console แล้วแปะ กด Enter
// พิมพ์ start() เริ่มใช้ พิมพ์ stop() หยุดใช้
// แก้คำในรายการนี้

var censorList =
    [
        "sample",
        "12345",
        "ฟหกด"
    ];

var replaceWith = "หมาเห่า 555";

// ----------------

var chatbox = document.getElementById('chatmsg')

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach((chat) => {
            if (censorList.some(
                (element) => {
                    return chat.textContent.includes(element)
                }
            ))
            {
                //console.log("caught : " + chat.textContent)
                chat.textContent = replaceWith
            }
        });
    });
});
var config = { attributes: true, childList: true, characterData: true };

var start = () => {
    observer.observe(chatbox, config);
}
var stop = () => {
    observer.disconnect();
}