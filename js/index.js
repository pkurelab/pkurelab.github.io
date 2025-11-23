window.addEventListener('load', function() {
    // 获取元素
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var focus = document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var ol = document.querySelector('.circle')
    
    if (!focus || !ul || !ol) {
        console.error('轮播元素未找到')
        return
    }
    
    var focuswidth = focus.offsetWidth
    var imageCount = ul.children.length // 原始图片数量
    
    // 设置每个li的宽度
    var lis = ul.querySelectorAll('li')
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.width = focuswidth + 'px'
    }
    
    // 鼠标经过显示箭头，离开隐藏
    focus.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block'
        arrowr.style.display = 'block'
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    })
    
    focus.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none'
        arrowr.style.display = 'none'
        startAutoPlay()
    })
    
    // 动态生成小圆圈
    for (var i = 0; i < imageCount; i++) {
        var li = document.createElement('li')
        li.setAttribute('data-index', i)
        ol.appendChild(li)
        
        // 小圆圈点击事件
        li.addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'))
            goToSlide(index, false)
        })
    }
    
    // 设置第一个小圆圈为当前
    ol.children[0].className = 'current'
    
    // 克隆第一张图片到最后，实现无缝循环
    var firstClone = ul.children[0].cloneNode(true)
    firstClone.style.width = focuswidth + 'px'
    ul.appendChild(firstClone)
    
    // 设置ul宽度（原始图片 + 1个克隆）
    ul.style.width = (imageCount + 1) * focuswidth + 'px'
    ul.style.left = '0px'
    
    // 当前显示的图片索引（0 到 imageCount-1）
    var currentIndex = 0
    var isAnimating = false
    
    // 更新小圆圈
    function updateCircles() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        var circleIndex = currentIndex
        // 处理索引超出范围的情况
        if (circleIndex >= imageCount) {
            circleIndex = 0
        } else if (circleIndex < 0) {
            circleIndex = imageCount - 1
        }
        if (circleIndex >= 0 && circleIndex < ol.children.length) {
            ol.children[circleIndex].className = 'current'
        }
    }
    
    // 跳转到指定幻灯片
    function goToSlide(index, isLoop) {
        if (isAnimating) return
        
        isAnimating = true
        currentIndex = index
        
        // 计算目标位置
        var targetPosition = -currentIndex * focuswidth
        
        animate(ul, targetPosition, function() {
            isAnimating = false
            
            // 无缝循环处理
            if (currentIndex >= imageCount) {
                // 如果到了克隆的第一张，快速跳转到真实的第一张
                currentIndex = 0
                ul.style.left = '0px'
            } else if (currentIndex < 0) {
                // 如果向前超出，跳转到最后一张
                currentIndex = imageCount - 1
                ul.style.left = -currentIndex * focuswidth + 'px'
            }
            
            updateCircles()
        })
        
        updateCircles()
    }
    
    // 下一张
    function nextSlide() {
        if (isAnimating) return
        var nextIndex = currentIndex + 1
        goToSlide(nextIndex, true)
    }
    
    // 上一张
    function prevSlide() {
        if (isAnimating) return
        var prevIndex = currentIndex - 1
        goToSlide(prevIndex, true)
    }
    
    // 箭头按钮事件
    arrowr.addEventListener('click', function(e) {
        e.preventDefault()
        nextSlide()
    })
    
    arrowl.addEventListener('click', function(e) {
        e.preventDefault()
        prevSlide()
    })
    
    // 自动播放
    var timer = null
    function startAutoPlay() {
        if (timer) clearInterval(timer)
        timer = setInterval(function() {
            nextSlide()
        }, 3000)
    }
    
    // 启动自动播放
    startAutoPlay()
})
