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
        html, body { height: 100%; }
        .box { 
            width: 100%; 
            height: calc(100vh - 200px); /* 为 footer 留出空间 */
            position: relative; 
            top: 0; 
            left: 0; 
            z-index: 1;
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
        .site-footer {
            position: relative;
            z-index: 10; /* 确保 footer 在背景之上 */
        }
    </style>
</head>

<body>
    <div class="box" style="width:100vw;overflow:hidden;margin:0;">
        <img src="/imgs/index.png" style="width:100%;height:100%;object-fit:cover;display:block;" />
    </div>
    <div class="content">
       We are the Remote Sensing For Ecology Lab in Peking University, focusing on the development and application of remote sensing techniques — including LiDAR, Radar, and optical imagery — to understand and investigate the 3D structures and functions of ecosystems.
    </div>
    <div class="button">
        <a href="/home/">Learn more</a>
    </div>
</body>

</html>

