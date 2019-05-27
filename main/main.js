module.exports = function main(num) {
    var arr = num.split('');
    var led = {
        top :   ["._.","...","._.","._.","...","._.","._.","._.","._.","._."],
        mid :  ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],
        down : ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
    }
    var l = arr.length;
    let t="";
    let m="";
    let d="";

    for (var i=0; i<l; i++){
        if (i<l-1){
            t += led.top[arr[i]]+" ";
            m += led.mid[arr[i]]+" ";
            d += led.down[arr[i]]+" ";
        }
        else{
            t += led.top[arr[i]]+"\n";
            m += led.mid[arr[i]]+"\n";
            d += led.down[arr[i]]+"\n";
        }
    }
    let out=t+m+d;
    return out;

};