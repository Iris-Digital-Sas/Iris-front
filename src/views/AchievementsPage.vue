<template>
    <div class="title-achievements">
        <h1>IRIS est à l'écoute de <span class="lavender-text">vos idées</span> afin des les réaliser</h1>
    </div>
    <div class="achievements">
        <figure class="achievements_img">
            <div class="achievements_img-cadre">
                <img src="../assets/Achievement1.jpeg" alt="">
            </div>            
            <div class="date">2022</div>
            <figcaption>
                <span>ARTISANAT VAN</span>
                <span>CONCEPTION SITE INTERNET</span>
            </figcaption>
        </figure>
        <figure class="achievements_img">
            <div class="achievements_img-cadre">
                <img src="../assets/Achievement2.jpeg" alt="">
            </div>
            <div class="date">2022</div>
            <figcaption>
                <span>MONSIEUR CLIENT</span>
                <span>COMMUNITY MANAGEMENT</span>
            </figcaption>
        </figure>
        <figure class="achievements_img">
            <div class="achievements_img-cadre">
                <img src="../assets/Achievement3.jpeg" alt="">
            </div>
            <div class="date">2021</div>
            <figcaption>
                <span>MONSIEUR CLIENT</span>
                <span>ANALYSE SEO</span>
            </figcaption>
        </figure>
    </div>
</template>
<style>
.title-achievements {
    margin-left: 50%;
    padding: 18% 12.5% 8% 4.5% ;
    text-align: right;
}
.title-achievements h1{
    font-weight: 400;
    font-size: 38px;
    line-height: 58px;
}
.achievements_img{
    margin: 0;
    height: 1080px;
    position: relative;
}
.achievements_img img {
    object-fit: cover;
    transition: 500ms;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}
.achievements_img-cadre { 
    position: absolute;
    overflow: hidden;
}
.achievements_img img:hover {
    transform: scale(115%, 115%);
    transition: all 500ms;
}
.achievements_img:nth-child(3n+1) {
    margin-right: 50%;
}
.achievements_img:nth-child(3n+1) .achievements_img-cadre {
    width: 865px;
    height: 956px;
}
.achievements_img:nth-child(3n+1) .date {
    top: -50px;
    right: 140px;
}
.achievements_img:nth-child(2n) {
    margin-left: 50%;
}
.achievements_img:nth-child(2n) .achievements_img-cadre {
    width: 796px;
    height: 630px;
    right: 0px;
    bottom: 220px;
}
.achievements_img:nth-child(2n) .date {
    top: 305px;
    left: 70px;
}
.achievements_img:nth-child(3n) {
    margin-left: 9%;
}
.achievements_img:nth-child(3n) .achievements_img-cadre {
    width: 788px;
    height: 772px;
    left: 0px;
    bottom: 315px;
}
.achievements_img:nth-child(3n) .date {
    top: -60px;
    left: 185px;
}
.date {
    position: absolute;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    background-color: #14142C;
    color: #9EAAFF;
    width: 105px;
    line-height: 105px;
    border-radius: 50%;
    text-align: center;
    letter-spacing: -0.1rem;
}
.achievements_img figcaption {
    position: absolute;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
}
.achievements_img:nth-child(1) figcaption {
    bottom: 0px;
    left: 150px;
}
.achievements_img:nth-child(2) figcaption {
    bottom: 120px;
    left: 120px;
}
.achievements_img:nth-child(3) figcaption {
    bottom: 220px;
    left: 0px;
}

</style>
