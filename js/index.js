window.addEventListener('load', function() {
    //1、获取元素
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var focus = document.querySelector('.focus')
    var focuswidth = focus.offsetWidth
    
    //2、鼠标经过轮播图，左右箭头显示
    focus.addEventListener('mouseover', function() {
        arrowl.style.display = 'block'
        arrowr.style.display = 'block'
        clearInterval(timer)
        timer = null //清除定时器变量
    })
    //鼠标离开，就隐藏左右按钮
    focus.addEventListener('mouseout', function() {
        arrowl.style.display = 'none'
        arrowr.style.display = 'none'
        timer = setInterval(function() {
            //手动调用点击事件
            arrowr.click()
        }, 2000)
    })

    //3、动态生成小圆圈
    var ol = document.querySelector('.circle')
    var ul = focus.querySelector('ul') //只选focus下面的ul
    var imageCount = ul.children.length // 获取原始图片数量
    
    //得到li的个数（在克隆之前）
    for (var i = 0; i < imageCount; i++) {
        //创建li
        var li = document.createElement('li')
        //记录当前小圆圈的索引号，通过自定义属性
        li.setAttribute('index', i)
        //放入ol
        ol.appendChild(li)
        //4、小圆圈的排他思想
        li.addEventListener('click', function() {
            //把所有li清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            //当前的li设置current类名
            this.className = 'current'
            //点击小圆圈，实现图片滑动的效果
            var b = parseInt(this.getAttribute('index'))
            num = b // 更新全局num变量
            animate(ul, -b * focuswidth)
        })
    }

    //把ol里面的第一个li设置为current类;默认第一张图选中
    ol.children[0].className = 'current'
    
    //克隆第一张图片，放到ul最后面（实现无缝循环）
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    
    // 当前显示的图片索引（0 到 imageCount-1）
    var num = 0
    var flag = true // 节流阀，防止快速点击
    
    // 更新小圆圈显示
    function updateCircle() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        if (num >= 0 && num < ol.children.length) {
            ol.children[num].className = 'current'
        }
    }
    
    //右侧按钮点击事件
    arrowr.addEventListener('click', function() {
        if (flag) {
            flag = false //关闭节流阀
            num++
            
            // 如果超过最后一张，跳转到第一张（无缝循环）
            if (num >= imageCount) {
                // 先快速跳转到克隆的第一张
                ul.style.left = -imageCount * focuswidth + 'px'
                num = 0
                // 然后动画到第一张
                animate(ul, -num * focuswidth, function() {
                    flag = true //动画执行完毕，打开节流阀
                    updateCircle()
                })
            } else {
                animate(ul, -num * focuswidth, function() {
                    flag = true //动画执行完毕，打开节流阀
                })
                updateCircle()
            }
        }
    })
    
    //左侧按钮点击事件
    arrowl.addEventListener('click', function() {
        if (flag) {
            flag = false //关闭节流阀
            num--
            
            // 如果小于第一张，跳转到最后一张（无缝循环）
            if (num < 0) {
                num = imageCount - 1
                // 先快速跳转到克隆的最后一张（实际是倒数第二张）
                ul.style.left = -(imageCount - 1) * focuswidth + 'px'
                // 然后动画到最后一张
                animate(ul, -num * focuswidth, function() {
                    flag = true //动画执行完毕，打开节流阀
                    updateCircle()
                })
            } else {
                animate(ul, -num * focuswidth, function() {
                    flag = true //动画执行完毕，打开节流阀
                })
                updateCircle()
            }
        }
    })

    //自动播放功能,定时器
    var timer = setInterval(function() {
        //手动调用点击事件
        arrowr.click()
    }, 2000)
})
