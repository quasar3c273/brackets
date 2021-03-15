module.exports = function check(str, bracketsConfig) {
    let el = bracketsConfig.map(function(element) {
        return element.join("")
    });
    for (let i = 0; i < el.length; i++) {
        if (str.includes(el[i])) {
            str = str.replace(el[i], "");
            i = -1;
        }
    }
    return str == '';
}
