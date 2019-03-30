//  date:2018-4-9
// author: xiehuanzhi;
$(function () {
    var $date = $('.time .date'),
        $day = $('.time .day'),
        $time = $('.time .hour');
    var dates = new Date(),
        y = dates.getFullYear(),
        m = dates.getMonth() + 1,
        d = dates.getDate(),
        h = dates.getHours(),
        ms = dates.getMinutes(),
        sd = dates.getSeconds(),
        wk = dates.getDay(),
        wkarry = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', ];
    $date.html(y + '-' + format(m) + '-' + format(d));
    $day.html(wkarry[wk]);
    $time.html(format(h) + ':' + format(ms) + ':' + format(sd));
    setInterval(function () {
        var dates = new Date(),
            y = dates.getFullYear(),
            m = dates.getMonth() + 1,
            d = dates.getDate(),
            h = dates.getHours(),
            ms = dates.getMinutes(),
            sd = dates.getSeconds();
        $date.html(y + '-' + format(m) + '-' + format(d));
        $day.html(wkarry[wk]);
        $time.html(format(h) + ':' + format(ms) + ':' + format(sd));
    }, 1000);

    function format(cur) {
        a = cur.toString();
        if (cur < 10) {
            return '0' + a
        } else {
            return a
        }
    };




    function eventList() {
        var $mainLi = $(".main li");
        for (i = 0; i < $mainLi.length; i++) {
            if (i % 4 == 0 || i % 4 == 1) {
                $mainLi.eq(i).addClass("deep");
            }
        };
        // 滚动
        $('#demo').scrollbox({
            linear: true,
            step: 1,
            delay: 0,
            speed: 10
        });

    }
    eventList();

}());