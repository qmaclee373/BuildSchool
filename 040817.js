ffunction $g(value) {
    //判斷是否為id selector
    if (value.includes('#')) {
    //回傳Element
    return document.querySelector(value);
    }
    //回傳NodeList集合
    var nodelist = document.querySelectorAll(value);
    return nodelist.length == 1 ? nodelist[0] :
    nodelist;
   }
   export { $g, displayName, $title, $ex, $log };