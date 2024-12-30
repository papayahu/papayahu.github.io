if (window.console) {
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
  };
  let string = function () {
    /*
                                      _             _           ____  _             
  _ __   __ _ _ __   __ _ _   _  __ _| |__  _   _  ( )  ___    | __ )| | ___   __ _ 
 | '_ \ / _` | '_ \ / _` | | | |/ _` | '_ \| | | | |/  / __|   |  _ \| |/ _ \ / _` |
 | |_) | (_| | |_) | (_| | |_| | (_| | | | | |_| |     \__ \   | |_) | | (_) | (_| |
 | .__/ \__,_| .__/ \__,_|\__, |\__,_|_| |_|\__,_|     |___/   |____/|_|\___/ \__, |
 |_|         |_|          |___/                                               |___/ 
   
    */
  };
  console.log(string.makeMulti());
  console.log("歡迎訪問%cpapayahu's Blog", "color:#1fc7b6;font-weight:bold");
}