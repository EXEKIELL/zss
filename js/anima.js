function man(that) {
    var timer = null;
    var that = that;
    timer = setInterval(function () {
        that.manRun = !that.manRun;
    },200)
}