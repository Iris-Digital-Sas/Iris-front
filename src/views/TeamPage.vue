<template>
    <section class="bgc-dark-blue introducing">
        <p class="introducing_text"><span class="introducing_text-iris">IRIS</span> est composée de 5 jeunes collaborateurs aux domaines d'expertises complémentaires qui nous permet de d'aborder une vaste partie des solutions à proposer aux entreprises pour les accompagner dans leurs projets web.
        </p>
    </section>
    <section class="team">
        <h2 class="team-title">l'équipe d'iris</h2>
        <Carousel id="team_carousel">
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Geoffrey</strong>
                        <span>Architecte Logiciel</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Amaury</strong>
                        <span>Marketing Digital</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Hugo</strong>
                        <span>Ingénieur Intelligence Artificielle et Ingénierie logiciel</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Sofian</strong>
                        <span>Marketing Digital</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Marie</strong>
                        <span>Graphiste</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Enzo</strong>
                        <span>Web designer et Expert SEO</span>
                    </figcaption>                
                </figure>
            </slide>
            <slide :key="slide">
                <figure>
                    <img src="../assets/persona.jpg" alt="">
                    <figcaption>
                        <strong>Bastian</strong>
                        <span>Dévellopeur Full-Stack</span>
                    </figcaption>                
                </figure>
            </slide>            
            <template #addons>
                <pagination />
            </template>
        </Carousel>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination
  },
}
</script>
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
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
}
.team-title {
    margin: 0;
    text-transform: uppercase;
    font-size: 38px;
    line-height: 63px;
    text-align: center;
    font-weight: 700;
}
#team_carousel {
    width: 100%;
    height: 350px;
    align-self: center;
}
.carousel__viewport, .carousel__track{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 4%;
}
.carousel__track li {
    height: 100%;
    flex-basis: 30%;
    padding: 0;
    margin: 0;
}
.carousel__track figure, .carousel__track img { 
    width: 100%;
    padding: 0;
    margin: 0;
}
.carousel__track img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}
.carousel__track figure:hover figcaption{
   opacity: 1;
   background-color: rgba(33, 33, 50, 0.76);
   transition:  all 500ms ease;
}
.carousel__track figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-weight: 300;
    font-size: 22px;
    line-height: 33px;
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 350px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    transition:  opacity 500ms ease, background-color 500ms ease;
}
@media (max-width: 1000px) {
    .team {
        height: 700px;
    }
    #team_carousel {
        width: 300px;
    }
    .carousel__viewport, .carousel__track{
        gap: 0px;
    }
    .carousel__track li {
        flex-basis: 100%;
    }
    .carousel {
        display: initial;
        width: 100%;
        height: 450px;
        align-self: center;
    }
    .carousel__pagination {
        padding: 0;
    }
}
@media( max-width: 599px) {
    .introducing_text{  
        width: 80%;
    }
    .introducing_text::after {
        width: 90%;
        margin: 5%;
    }
}
</style>
