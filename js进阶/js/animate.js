function animate(obj, target, callback) {
    //为了只开启一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //设置步长，实现缓慢动画 步长公式 =（目标位置 - 现在位置）/10
        let step = (target - obj.offsetLeft) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 30)
}