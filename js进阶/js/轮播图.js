window.addEventListener('load', function() {
    let pre = document.querySelector('.pre');
    let next = document.querySelector('.next');
    let div = document.querySelector('.imgs');
    let ul = document.querySelector('ul');
    div.addEventListener('mouseover', function() {
        pre.style.display = 'block';
        next.style.display = 'block';
    })
    div.addEventListener('mouseout', function() {
        pre.style.display = 'none';
        next.style.display = 'none';
    })
    let lis = div.querySelector('.ul1');
    let ol = div.querySelector('ol');
    for (let i = 0; i < lis.children.length; i++) {
        let li = document.createElement('li');
        //给小圆点设置自定义属性index
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (let j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index');
            animate(ul, -index * 300, function() {});


        })
    }
    //把ol第一个li的class设置为current
    ol.children[0].className = 'current';
    //定义num记录当前图片的下标
    let num = 0;
    //pre按钮事件
    pre.addEventListener('click', function() {
        if (num == 0) {
            num = 0;
            alert('这已经是第一张了~');
        } else {
            num--;
        }
        //同步当前小圆点位置
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[num].className = 'current';
        animate(ul, -num * 300, function() {});
    })

    //next按钮事件
    next.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            num = ul.children.length - 1;
            alert('这已经是最后一张了~');
        } else {
            num++;
        }
        //同步当前小圆点位置
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[num].className = 'current';
        animate(ul, -num * 300, function() {});
    })

})