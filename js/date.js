
//退款倒计时 refundDetail

window.onload =function () {
    let spans = document.getElementsByTagName("span");


    function fn() {
        let arr = [];
        let date =new Date();
        let dw=new Date(2019,5,7,0,0,0);

        let time =Math.floor((dw.getTime()-date.getTime())/1000);
        let day =Math.floor(time/60/60/24);
        arr.push(day);
        time%=(60*60*24);
        let hours=Math.floor(time/(60*60));
        arr.push(hours);
        time%=(60*60);
        let min = Math.floor(time/60);
        let sec =time %60;
        arr.push(min,sec);
        arr.forEach(function (value,index) {
            spans[index].innerHTML = value
        })
    }
}
