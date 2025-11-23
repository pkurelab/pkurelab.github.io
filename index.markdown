---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; }
        html, body { 
            height: 100%; 
            position: relative;
        }
        .box { 
            width: 100vw; 
            position: fixed; 
            top: 0; 
            left: 0; 
            z-index: -1;
            overflow: hidden;
        }
        .box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        video { 
            min-width: 100%; 
            min-height: 100%; 
            position: absolute; 
            top: 0; 
            left: 0; 
        }
        .content {
            position: absolute;
            z-index: 3;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            font-size: 24px;
            line-height: 1.5;
        }
        .button {
            position: absolute;
            z-index: 3;
            top: 80%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
        }
        .button a {
            text-decoration: none;
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
        }
        .site-header {
            position: relative;
            z-index: 10;
        }
        .site-footer {
            position: relative;
            z-index: 10;
        }
    </style>
    <script>
        function adjustBackgroundHeight() {
            const box = document.querySelector('.box');
            const header = document.querySelector('.site-header');
            const footer = document.querySelector('.site-footer');
            
            if (box && header && footer) {
                const headerHeight = header.offsetHeight || 0;
                const footerHeight = footer.offsetHeight || 0;
                const windowHeight = window.innerHeight;
                const availableHeight = windowHeight - headerHeight - footerHeight;
                
                // 设置背景图片高度，确保不遮挡 footer
                box.style.height = availableHeight + 'px';
                box.style.top = headerHeight + 'px';
            } else {
                // 如果找不到 header 或 footer，使用视口高度减去估算的 footer 高度
                const estimatedFooterHeight = 150; // 估算的 footer 高度
                box.style.height = (window.innerHeight - estimatedFooterHeight) + 'px';
            }
        }
        
        // 页面加载时调整
        window.addEventListener('load', adjustBackgroundHeight);
        // 窗口大小改变时调整
        window.addEventListener('resize', adjustBackgroundHeight);
        // DOM 内容加载完成后调整
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(adjustBackgroundHeight, 100);
        });
    </script>
</head>

<body>
    <div class="box">
        <img src="/imgs/index.png" />
    </div>
    <div class="content">
       We are the Remote Sensing For Ecology Lab in Peking University, focusing on the development and application of remote sensing techniques — including LiDAR, Radar, and optical imagery — to understand and investigate the 3D structures and functions of ecosystems.
    </div>
    <div class="button">
        <a href="/home/">Learn more</a>
    </div>
</body>

</html>

