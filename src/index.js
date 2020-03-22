module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        let checkStr = bracketsConfig[i].join("");

        if (str.includes(checkStr)) {
            str = str.replace(checkStr, "");
            i = -1;
        }
    }
    return str ? false : true;
};
