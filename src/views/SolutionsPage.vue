<template>
    <section class="solution_intro bgc-grey">
        <h1 class="solution_intro-title">IRIS VOUS OFFRE UNE <br><span class="lavender-text">EXPERTISE</span> COMPLETE DANS LES DOMAINES DU MARKETING DIGITAL ET DE L'IA</h1>
        <div class="lavender-box solution_intro-button">
            <router-link to="/Iris-front/prices" class="lavender-box-text">NOS TARIFS</router-link>
        </div>        
    </section>
    <div class="bgc-dark-blue solutions">
        <section class="solutions_item" id="wd">
            <figure class="solutions_item_firstpart">
                <img src="SolutionImg1-min.png" alt="">
                <figcaption>
                    <blockquote>
                        <p>“Un site vitrine est un site Web qui présente en ligne les produits ou les services d'une organisation, dans le but de pouvoir attirer simplement l'attention et d'éveiller l'intérêt des internautes de passage, le plus souvent sans permettre d'acheter directement le produit ou le service proposé.” <cite> Wikipedia</cite></p> 
                    </blockquote>                    
                </figcaption>
            </figure>
            <div class="solutions_item_secondpart" >
                <h2>UI/IX DESIGN</h2>
                <div class="solutions_item_secondpart_textarea">
                    <p>Nous réalisons vos sites <strong>vitrines</strong> et <strong>e-commerces</strong> avec différentes technologies, en discutant avec vous pour trouver la réponse la plus adaptée à vos besoins et à votre budget.</p>
                    <p>Votre site sera <strong>optimisé</strong> pour un affichage sur ordinateur, mais également sur téléphone, tablette et autres supports.</p>
                    <p>Nous vous fournissons un site <strong>favorisé par l’algorithme</strong> de Google, afin que vos clients potentiels le trouvent facilement lors de leurs recherches.</p>
                    <router-link to="/Iris-front/prices"><font-awesome-icon icon="fa-solid fa-arrow-down" /> PLUS D'INFOS</router-link>
                </div>
            </div>
        </section>
        <section class="solutions_item" id="seo">
            <figure class="solutions_item_firstpart">
                <img src="SolutionImg2-min.png" alt="">
                <figcaption>
                    <blockquote>
                    <p>“L'optimisation pour les moteurs de recherche, aussi connue sous le sigle SEO (de l'anglais : search engine optimization), inclut l'ensemble des techniques qui visent à améliorer le positionnement d'une page, d'un site ou d'une application web dans la page de résultats d'un moteur de recherche. “ <cite> Wikipedia</cite></p></blockquote>
                </figcaption>
            </figure>
            <div class="solutions_item_secondpart">
                <h2>SEO</h2>
                <div class="solutions_item_secondpart_textarea">
                    <p>Nous nous occupons de faire ou de refaire votre <strong>référencement</strong> naturel , texte SEO, stratégie de netlinking… </p>
                    <p>Le but est plus simple que les technologies utilisées : faire apparaître votre site parmi les <strong>premiers liens</strong> proposés par les moteurs de recherche.  Cette prestation permet une augmentation drastique du trafic web.</p>
                    <router-link to="/Iris-front/prices"><font-awesome-icon icon="fa-solid fa-arrow-down" /> PLUS D'INFOS</router-link>
                </div>
            </div>
        </section>
        <section class="solutions_item" id="leads">
            <figure class="solutions_item_firstpart">
                <img src="SolutionImg3-min.png" alt="">
                <figcaption>
                    <blockquote>
                    <p>“Un lead représente une piste commerciale à explorer : par exemple, quand un prospect a manifesté son intérêt pour un produit proposé par une société. La plupart du temps, il s'agit d'un contact qualifié puisque le prospect a laissé ses coordonnées pour être rappelé.”  <cite> JDN</cite></p>
                </blockquote>
                </figcaption>
            </figure>
            <div class="solutions_item_secondpart">
                <h2>LEADS</h2>
                <div class="solutions_item_secondpart_textarea">
                    <p>Nous discutons avec vous afin de <strong>déterminer la cible</strong> de la campagne de génération de leads ainsi que la nature de votre offre. Les <strong>contacts</strong> vous sont rapidement transmis après leur génération afin de maximiser le taux de conversion.</p>
                    <p>Génération de <strong>prospects</strong> via les réseaux sociaux et les moteurs de recherches.</p>
                    <router-link to="/Iris-front/prices"><font-awesome-icon icon="fa-solid fa-arrow-down" /> PLUS D'INFOS</router-link>
                </div>
            </div>
        </section>
        <section class="solutions_item" id="cm">
            <figure class="solutions_item_firstpart">
                <img src="SolutionImg4-min.png" alt="">
                <figcaption>
                    <blockquote>
                    <p>“Le community management permet, entre autres, d'accroître <br>la notoriété de l'entreprise, de développer son portefeuille clients
                    en trouvant de nouveaux prospects, de fidéliser les clients.” <cite>JDN</cite></p></blockquote>
                </figcaption>
            </figure>
            <div class="solutions_item_secondpart">
                <h2>COMMUNITY MANAGEMENT</h2>
                <div class="solutions_item_secondpart_textarea">
                    <p>Votre présence sur les <strong>réseaux sociaux</strong> est une clé du succès de votre entreprise, jouant notamment sur votre relation au client. Fournir un contenu de qualité, agréable à recevoir par celui-ci, permet de le <strong>fidéliser</strong> et de créer un sentiment d’appartenance 
                    à une communauté que forme l’ensemble de vos clients.</p>
                    <p>Notre rôle sera alors d’assurer votre présence, votre visibilité, votre notoriété et votre image sur les réseaux. Il s’agit de faire <strong>grandir votre communauté</strong> et son intérêt pour vos produits et/ou services afin de booster vos ventes.</p>
                    <p>Ce contenu travaillé par nos soins pourra être envoyé à de 
                    nombreux clients potentiels afin de leur faire connaître votre activité et d’augmenter vos volumes de vente.</p>
                    <router-link to="/Iris-front/prices"><font-awesome-icon icon="fa-solid fa-arrow-down" /> PLUS D'INFOS</router-link>
                </div>
            </div>
            <div class="lavender-button">
                <router-link to="/Iris-front/prices" class="lavender-button-text">NOS TARIFS</router-link>
            </div>
            <!-- Problème de synchronisation des animations, parfois le texte change de couleur trop tard -->
        </section>
    </div> 
</template>

<style>
/* Première partie */
.solution_intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}
.solution_intro-title {
    letter-spacing: -2px;
    font-weight: 600;
    font-size: 33px;
    line-height: 57px;
    text-align: center;
    padding: 28% 0 0% 0%;
    margin: 0;
}
.solution_intro-button {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    border-radius: 40px;
    width: 235px;
    height: 58px;
}
/* Deuxième Partie */
.solutions_item {
    padding-bottom: 15%;
}
/* Image et texte */
.solutions_item_firstpart {
    display: flex;
    margin: 0;
    position: relative;
}
.solutions_item_firstpart figcaption, .solutions_item_firstpart img{
    position: absolute;
}
.solutions_item_firstpart figcaption{
    position: absolute;
    font-style: italic;
    background-color: #9EAAFF;
    width: 40%;
    padding: 2%;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;  
}
.solutions_item_firstpart figcaption blockquote, .solutions_item_firstpart figcaption p{
    margin: 0;
}
/* Description texte */
.solutions_item_secondpart {
    display: flex;
    gap: 60px;
}
.solutions_item_secondpart h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    font-size: 138%;
    flex-basis: 15%;
    margin: 0;
}
.solutions_item_secondpart h2::after {
    content: "";
    display: block;
    border-bottom: 1px white solid;
    margin: 0 -100% 0 80%
}
.solutions_item_secondpart_textarea {
    flex-basis: 38%;
}
.solutions_item_secondpart_textarea p {
    margin: 0 0 7%;
}
.solutions_item_secondpart_textarea strong {
    font-weight: 700;
}
.solutions_item_secondpart_textarea a{
    color: white;
    font-weight: 600;
    line-height: 24px;
    transition: color 700ms;
}
.solutions_item_secondpart_textarea a svg {
    width: 17px;
    height: 17px;
    transform-origin: 7px 11px;
    transform: rotate(-45deg);
    transition: transform 500ms 100ms;
}
.solutions_item_secondpart_textarea a:hover {
    color: #9EAAFF;
    transition: all 500ms 100ms;
}
.solutions_item_secondpart_textarea a:hover svg {
    transform: rotate(-90deg);
    transition: all 500ms 100ms;
} 
.solutions_item h2 {
    padding: 0 15% 0 10%;
    line-height: 60%;
}
/* 1° élément */
.solutions_item:nth-child(1) img {
    right: 0;
    width: 1115px;
    height: 484px;
}
.solutions_item:nth-child(1) figcaption {
    right: 70px;
    top: 395px;
    width: 375px;
    height: 170px;
}
.solutions_item:nth-child(1) .solutions_item_secondpart {
    margin-right: 15%;
    margin-top: 500px;
    padding-bottom: 500px;
}
/* 2° élément */
.solutions_item:nth-child(2) img {
    width: 790px;
    height: 670px;
}
.solutions_item:nth-child(2) figcaption {
    width: 358px;
    height: 200px;
    top: 505px;
    padding: 3%;
}
.solutions_item:nth-child(2n) .solutions_item_secondpart {
    margin-top: 700px;
    margin-left: 8%;
    flex-direction: row-reverse;
}
/* éléments  pairs */
.solutions_item:nth-child(2n) img {
    align-items: flex-end;
}
.solutions_item:nth-child(2n) h2 {
    padding: 0 0 0 20%; 
}
.solutions_item:nth-child(2n) h2::after {
    margin: 0 109% 0 -129%
}
.solutions_item:nth-child(2n) .solutions_item_secondpart_textarea {
    flex-basis: 30%;
}
/* Règles pour le 3° élément */
.solutions_item:nth-child(3n) img {
    right: 575px;
    width: 788px;
    height: 465px;
}
.solutions_item:nth-child(3n) figcaption {
    width: 343px;
    height: 180px;
    top: 125px;
    right: 285px;
    padding: 2.5%;
}
.solutions_item:nth-child(3n) .solutions_item_secondpart {
    margin-top: 500px;
    margin-left: 3%;
}
.solutions_item:nth-child(3n) h2 {
    padding:0 7% 0 10%;
}
.solutions_item:nth-child(3n) h2::after {
    margin: 0 -45% 0 38%;
}
.solutions_item:nth-child(3n) .solutions_item_secondpart_textarea {
    flex-basis: 24%;
}
/* Règles pour le 4° élément */
.solutions_item:nth-child(4n) {
    padding-bottom: 15%;
}
.solutions_item:nth-child(4n) img {
    width: 950px;
    height: 421px;
}
.solutions_item:nth-child(4n) figcaption {
    left: 162px;
    top: 365px;
    width: 295px;
    height: 150px;
    padding: 2% 2.5%;
}
.solutions_item:nth-child(4n) .solutions_item_secondpart {
    margin-top: 500px;
}
.solutions_item:nth-child(4n) .solutions_item_secondpart h2 {
    padding: 0 0 0 17%; 
    line-height: 35px;
}
.solutions_item:nth-child(4n) .solutions_item_secondpart h2::after {
    margin: -3% 107% 0 -112%
}
.solutions_item:nth-child(4n) .solutions_item_secondpart_textarea {
    flex-basis: 30%;
    padding: 2.5% 0 7%;
}
.solutions_item .lavender-button {
    margin: 9% auto 6%;
}
.solutions_item .lavender-button-text {
    top: 13px;
    left: 50px;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    background-color: #0000;
    border: 0;
}
@media (max-width: 1363px) {
    .solutions_item:nth-child(3n) img {
        right: 0px;
    }
}
@media (max-width: 1000px) {
    .solution_intro {
        height: 700px;
    }
    .solutions_item:nth-child(1) figcaption, .solutions_item:nth-child(2) figcaption, .solutions_item:nth-child(3) figcaption, .solutions_item:nth-child(4) figcaption{
        top: 50px;
    }
}
@media (max-width: 950px) {
    .solutions_item:nth-child(n) img{
        width: 100%;
    }
}
@media (min-width: 500px) and (max-width: 600px) {
    .solutions #cm {
        height: 1700px;
    }
}
@media (max-width: 790px) {
    .solutions #cm {
        height: 1600px;
    }
}
@media (max-width: 690px) {
    .solutions_item:nth-child(3n) figcaption {
        right: 50px;
    }
}
@media (max-width: 500px) {
    .solution_intro {
        height: 500px;
    }
    .solution_intro h1{
        font-size: 140%;
        line-height: 135%;
        font-weight: 500;
        padding: 150px 0% 0% 0%;
    }
    .solutions_item:nth-child(n) .solutions_item_secondpart {
        flex-direction: column;
        align-items: center;
        padding-bottom: 5px;
        gap: 15px;
    }
    .solutions_item_secondpart > *{
        width: 70%;
    }
    .solutions_item_secondpart h2 {
        text-align: center;
    }
    .solutions_item:nth-child(n) .solutions_item_secondpart h2 {
        padding: 0;
    }
    .solutions_item:nth-child(n) .solutions_item_secondpart h2::after {
        margin: 30px 0 30px 0;
    }
    .solutions_item:nth-child(2) .solutions_item_secondpart, .solutions_item:nth-child(3) .solutions_item_secondpart  {
        margin-left: 0;
    }
    .solutions_item:nth-child(1) .solutions_item_secondpart {
        margin-right: 0;
    }
    .solutions_item{
        height: 775px;
    }
    .solution_intro{
        height: 350px;
        gap: 50px;
    }
    .solution_intro h1 {
        padding: 100px 0 0;
    }
    .solution_intro-button {
        font-weight: 400;
        font-size: 16px;
        line-height: 15px;
        width: 50%;
        height: 50px;
    }
    
    .solutions #cm {
        height: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .solutions_item_firstpart {
        justify-content: center;
        align-items: center;
        position: relative;
        top:0px;

    }
    .solutions_item:nth-child(n) img {
        height: 270px;
        position: initial;
    }
    .solutions_item:nth-child(n) figcaption {
        display: none;
    }
    .solutions_item:nth-child(n) .solutions_item_secondpart {
        margin-top: 30px;
    }
    .solutions_item .lavender-button {
        margin: 10% 0 0;
        padding: 0;
        width: 40%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .solutions_item .lavender-button-text {
        position: initial;
        font-size: 17px;
        width: 100%;
    }

}

</style>
