<template>
    <div class="title-achievements">
        <h1>IRIS est à l'écoute de <span class="lavender-text">vos idées</span> afin des les réaliser</h1>
    </div>
    <div class="achievements">
        <figure class="achievements_img">
            <img src="" alt="">
            <div class="date">2022</div>
            <figcaption>
                <span>ARTISANAT VAN</span>
                <span>CONCEPTION SITE INTERNET</span>
            </figcaption>
        </figure>
        <figure class="achievements_img">
            <img src="" alt="">
            <div class="date">2022</div>
            <figcaption>
                <span>MONSIEUR CLIENT</span>
                <span>COMMUNITY MANAGEMENT</span>
            </figcaption>
        </figure>
        <figure class="achievements_img">
            <img src="" alt="">
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
    padding: 15% 8% 15% 8% ;
    text-align: right;
}
.title h1{
    font-weight: 400;
    font-size: 38px;
    line-height: 57px;
}
.achievements_img{
    margin: 0;
    height: 1080px;
}
.achievements_img:nth-child(3n+1) {
    margin-right: 50%;
}
.achievements_img:nth-child(3n+1) .date, .achievements_img:nth-child(2n) .date {
    padding: 3.75% 2.25%;
}
.achievements_img:nth-child(2n) {
    margin-left: 50%;
}
.achievements_img:nth-child(3n) {
    margin-left: 10%;
}
.date {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    background-color: #14142C;
    color: #9EAAFF;
    width: 7%;
    padding: 2.75% .25%;
    border-radius: 50%;
    text-align: center;
}
.achievements_img figcaption {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
}

</style>