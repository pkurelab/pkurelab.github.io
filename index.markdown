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
            height: 100vh; 
            position: fixed; 
            top: 0; 
            left: 0; 
            z-index: -1; /* 最底层 */
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
            position: relative;
            z-index: 2;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            font-size: 24px;
            line-height: 1.5;
            padding: 20px;
        }
        .button {
            position: relative;
            z-index: 2;
            text-align: center;
            margin-top: 20px;
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
            z-index: 10; /* 确保 header 在背景之上 */
        }
        .site-footer {
            position: relative;
            z-index: 10; /* 确保 footer 在背景之上 */
        }
    </style>
</head>

<body>
    <div class="box">
        <img src="/imgs/index.png" />
    </div>
    <div class="content">
        <div>
            We are the Remote Sensing For Ecology Lab in Peking University, focusing on the development and application of remote sensing techniques — including LiDAR, Radar, and optical imagery — to understand and investigate the 3D structures and functions of ecosystems.
            <div class="button">
                <a href="/home/">Learn more</a>
            </div>
        </div>
    </div>
</body>

</html>

