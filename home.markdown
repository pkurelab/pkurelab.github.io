---
layout: page
permalink: /home/
---

<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 721px;
            height: 455px
        }
        
        .focus {
            position: relative;
            width: 721px;
            height: 455px;
            background-color: black;
            padding-left: 0px;
            overflow: hidden;
        }
        /* 父盒子宽度比较小，而liimg里面加起来宽度很大，不能一行显示，就会竖着显示 */
        /* 解决：把ul的宽度设置的大一点 */
        
        .focus ul li {
            float: left;
            list-style: none;
        }
        
        .focus ul {
            width: 400%;
            position: absolute;
            left: 0px;
            top: 0px;
            margin: 0px;
            padding: 0px
        }
        
        .arrow-l,
        .arrow-r {
            /* display: none; */
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 50%;
            margin-top: -20px;
            width: 24px;
            height: 24px;
            text-decoration: none;
            z-index: 7;
            color: white;
            text-align: center;
            line-height: 24px;
        }
        
        .arrow-l {
            left: 0px;
        }
        
        .arrow-r {
            right: 0px
        }
        
        .circle {
            width: 90px;
            height: 40px;
            position: absolute;
            bottom: 0px;
            left: 245px;
            /* margin: 0px;
            padding: 0px; */
            z-index: 1;
            text-align: center;
            line-height: 40px;
        }
        
        .circle li {
            width: 30px;
            height: 30px;
            float: left;
            list-style: circle;
            color: white;
        }
        
        .circle .current {
            list-style: disc
        }
    </style>
    <script src="{{site.url}}/js/animate.js"></script>
    <!-- 注意顺序 -->
    <script src="{{site.url}}/js/index.js"></script>
</head>
 
<body>
    <div class="focus">
        <a href="javascript:;" class="arrow-l">←</a>
        <a href="javascript:;" class="arrow-r">→</a>
        <!-- 核心滚动区域 -->
        <!-- 要让所有图片排在一行显示，不要什么都用div解决 -->
        <ul>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/home1.png" alt=""></a>
				</li>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/home2.png" alt=""></a>
				</li>
        </ul>
        <ol class="circle">
 
        </ol>
    </div>
</body>
 
</html>
<br>
<br>
We are the Remote Sensing of Ecology Lab in the Institute of Ecology, College of Urban and Environmental Sciences at Peking University (PKU-RE). Our lab focuses on developing and applying remote sensing techniques— including LiDAR, Radar, and optical imagery — to understand and investigate ecological systems. To date, we have developed a variety of algorithms and datasets to support ecological research and have utilized these tools to address a broad range of fundamental ecological questions. This work has been published in high-impact journals such as Science, Nature Climate Change, Proceedings of the National Academy of Sciences (PNAS), National Science Review, and Ecology. If you are interested in our scientific research, you can follow our lab’s official account, as shown below.

<br>
<img src="{{site.url}}/imgs/research_images/home3.png" alt="">
<br>

We are also always looking for highly motivated students and postdocs to join our lab. We have interesting research data and topics to help strengthen your academic profile and career development! Candidates with strong interests are welcomed to contact PI Shengli Tao.

<br>
<br>
<br>
