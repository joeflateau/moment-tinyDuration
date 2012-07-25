define(['moment'], function(moment) {
    function absfloor(num) {
        return Math.floor(Math.abs(num));
    }
    moment.duration.fn.tinyDuration = function(){
        var s = absfloor(this.asSeconds()),
            m = absfloor(this.asMinutes()),
            h = absfloor(this.asHours()),
            d = absfloor(this.asDays()),
            w = absfloor(this.asWeeks()),
            mo = absfloor(this.asMonths()),
            y = absfloor(this.asYears());

        if (m < 1) return s + "S";
        if (h < 2) return m + "M";
        if (d < 2) return h + "H";
        if (w < 2) return d + "D";
        if (mo < 3) return w + "W";
        if (y < 2) return mo + "Mo";
        return y + "Y";
    }
});