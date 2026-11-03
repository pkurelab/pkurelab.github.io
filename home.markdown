---
layout: page
title: Home
permalink: /home/
---

<style>
  .home-carousel {
    position: relative;
    width: min(100%, 721px);
    margin: 0 auto 2rem;
    overflow: hidden;
    border-radius: 8px;
    background: #111;
  }

  .home-carousel .carousel-track {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    transition: transform 0.45s ease;
  }

  .home-carousel .carousel-slide {
    flex: 0 0 100%;
  }

  .home-carousel .carousel-slide img {
    display: block;
    width: 100%;
    aspect-ratio: 721 / 455;
    object-fit: cover;
  }

  .home-carousel .carousel-arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgb(0 0 0 / 55%);
    color: #fff;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    transform: translateY(-50%);
  }

  .home-carousel .carousel-arrow:hover,
  .home-carousel .carousel-arrow:focus-visible {
    background: rgb(0 0 0 / 80%);
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  .home-carousel .arrow-l { left: 0.75rem; }
  .home-carousel .arrow-r { right: 0.75rem; }

  .home-carousel .carousel-dots {
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    z-index: 2;
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateX(-50%);
  }

  .home-carousel .carousel-dot {
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    padding: 0;
    border: 2px solid #fff;
    border-radius: 50%;
    background: rgb(0 0 0 / 35%);
    cursor: pointer;
  }

  .home-carousel .carousel-dot[aria-current="true"] {
    background: #fff;
  }

  .home-introduction {
    line-height: 1.7;
  }

  .home-qr-code {
    display: block;
    width: min(50%, 360px);
    height: auto;
    margin: 1.5rem auto;
  }

  @media (max-width: 600px) {
    .home-carousel .carousel-arrow {
      width: 2.25rem;
      height: 2.25rem;
    }

    .home-qr-code {
      width: min(80%, 320px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .home-carousel .carousel-track { transition: none; }
  }
</style>

<div class="home-carousel" role="region" aria-label="Lab highlights" aria-roledescription="carousel">
  <button class="carousel-arrow arrow-l" type="button" aria-label="Previous image">&#8249;</button>
  <ul class="carousel-track">
    <li class="carousel-slide">
      <img src="{{ '/imgs/group_photos/Teamgroup.png' | relative_url }}" alt="Members of the Remote Sensing for Ecology Lab" loading="lazy">
    </li>
    <li class="carousel-slide">
      <img src="{{ '/imgs/research_images/home1.png' | relative_url }}" alt="Remote sensing research highlight">
    </li>
    <li class="carousel-slide">
      <img src="{{ '/imgs/research_images/home2.png' | relative_url }}" alt="Ecological remote sensing research highlight" loading="lazy">
    </li>

  </ul>
  <button class="carousel-arrow arrow-r" type="button" aria-label="Next image">&#8250;</button>
  <ol class="carousel-dots" aria-label="Choose an image"></ol>
</div>

<div class="home-introduction">
  <p>
    We are the Remote Sensing for Ecology Lab at the Institute of Ecology, College of Urban and Environmental Sciences, Peking University (PKU-RE). Our lab focuses on the development and application of remote sensing techniques—including LiDAR, radar, and optical imagery—to understand and investigate the three-dimensional structures and functions of natural and urban ecosystems, with a primary focus on vegetation. We have developed a variety of algorithms and datasets to support ecological research and have used these tools to address a broad range of fundamental ecological questions. This work has been published in leading journals including <em>Science</em>, <em>Nature Climate Change</em>, <em>Proceedings of the National Academy of Sciences</em> (PNAS), <em>National Science Review</em>, and <em>Ecology</em>. Follow our lab’s official account using the QR code below.
  </p>

  <img class="home-qr-code" src="{{ '/imgs/research_images/home3.png' | relative_url }}" alt="QR code for the lab's official account" loading="lazy">

  <p>
    We are always looking for highly motivated students and postdoctoral researchers to join our lab. We offer engaging research data and topics that can strengthen your academic profile and career development. Interested candidates are welcome to contact Principal Investigator Shengli Tao.
  </p>
</div>

<script src="{{ '/js/index.js' | relative_url }}" defer></script>
