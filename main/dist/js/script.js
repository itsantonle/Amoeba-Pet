var buttonsTab = document.querySelector('#buttonstab');
var promptButtons = buttonsTab.childNodes;
var textdisplay = document.querySelector('#textdisplay');
var healthbar = document.querySelector('#healthbar');
var EXPbar = document.querySelector('#EXPbar');
console.log(promptButtons);
promptButtons.forEach(function (button) {
    if (button instanceof Element) {
        button.addEventListener('click', function (e) {
            switch (button.id) {
                case 'feed':
                    textdisplay.textContent = 'Pet is being fed';
                    console.log('Pet is being fed');
                    actions('feed');
                    break;
                case 'play':
                    textdisplay.textContent = 'Pet is playing';
                    console.log('Pet is playing');
                    break;
                case 'talk':
                    //add unique dialog per stages
                    textdisplay.innerText = 'Uh...';
                    break;
                case 'train':
                    textdisplay.innerText = 'Pet is training';
                    actions('train');
                    break;
                case 'healthgroup':
                    textdisplay.textContent = "Health is at ".concat(healthbar.style.width);
                    break;
                case 'EXPgroup':
                    textdisplay.textContent = "EXP is at ".concat(EXPbar.style.width);
                    break;
                default:
                    console.log('no such action');
            }
        });
    }
});
function actions(action) {
    var parsedE = Number(EXPbar.style.width.split('%')[0]);
    var parsedH = Number(healthbar.style.width.split('%')[0]);
    if (action == 'train')
        if (parsedH > 0) {
            EXPbar.style.width = "".concat(parsedE + 30, "%");
            healthbar.style.width = "".concat(parsedH - 20, "%");
        }
        else {
            textdisplay.innerText = 'Pet is exhausted';
        }
    if (action == 'feed')
        if (parsedH != 100) {
            healthbar.style.width = "".concat(parsedH + 10, "%");
        }
        else {
            textdisplay.innerText = 'Pet is full!';
        }
}
