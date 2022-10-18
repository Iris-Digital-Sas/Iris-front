<template>
    <section class="bgc-dark-blue introducing">
        <p class="introducing_text"><span class="introducing_text-iris">IRIS</span> c'est l'histoire de 4 passionées du Web qui ont décidé d'en faire leur <br>métier. C'est ainsi que Geoffrey, Amaury, Hugo et Sofian se sont associés<br> au cours de l'été 2021 afin de donner vie à un objectif commun :<strong class="introducing_text-strong">Permettre<br> aux entrepreneurs de se digitaliser et de maitriser leur image sur le web.</strong>
        </p>
    </section>
    <section class="team">
        <h2 class="team-title">l'équipe d'iris</h2>
        <div class="team_members">
            <figure>
                <img src="" alt="">
                <figcaption>
                    <strong>Geoffrey</strong>
                    <span>Architecte Logiciel</span>
                </figcaption>                
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <strong>Amaury</strong>
                    <span>Marketing Digital</span>
                </figcaption>                
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <strong>Hugo</strong>
                    <span>Ingénieur Intelligence Artificielle et Ingénierie logiciel</span>
                </figcaption>                
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <strong>Sofian</strong>
                    <span>Marketing Digital</span>
                </figcaption>                
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <strong>Marie</strong>
                    <span>Graphiste</span>
                </figcaption>                
            </figure>
        </div>
    </section>
</template>

<style>
.introducing {
    display: flex;
    justify-content: center;
    align-items: center;
}
.introducing_text{
    margin: 0;
    text-align: center;
    width: 50%;
    font-size: 22px;
    font-weight: 300;
    line-height: 33px;
}
.introducing_text::after {
    padding-top: 6%;
    content: "";
    display: block;
    border-bottom: 1px white solid;
    width: 50%;
    margin: 0 25%;
}
.introducing_text-iris{
    color: #9EAAFF;
}
.introducing_text-strong, .introducing_text-iris {
    font-weight: 600;
}
.team {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
}
.team-title {
    margin: 0;
    text-transform: uppercase;
    font-size: 42px;
    line-height: 63px;
    text-align: center;
    font-weight: 700;
}
.team_members {
    display: flex;
    justify-content: space-around;
}
.team_members figure  {
    margin: 0;
    flex-basis: 20%;
}
.team_members figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}
.team_members figcaption {
    font-weight: 300;
    font-size: 22px;
    line-height: 33px;
}

</style>
