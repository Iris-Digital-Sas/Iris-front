<template>
    <section class="solution_intro bgc-grey">
        <h1 class="solution_intro-title">IRIS VOUS OFFRE UNE <br><span class="lavender-text">EXPERTISE</span> COMPLETE TRUC REMPLACER</h1>
        <div class="lavender-box solution_intro-button">
            <a href="" class="lavender-box-text">NOS TARIFS</a>
        </div>        
    </section>
    <div class="bgc-dark-blue solutions">
        <section class="solutions_item">
            <figure class="solutions_item_firstpart">
                <img src="../assets/SolutionImg1.png" alt="">
                <figcaption>
                    <blockquote>
                        <p>“Un site vitrine est un site Web qui présente en ligne les produits ou les services d'une organisation, dans le but de pouvoir attirer simplement l'attention et d'éveiller l'intérêt des internautes de passage, le plus souvent sans permettre d'acheter directement le produit ou le service proposé.” <cite> Wikipedia</cite></p> 
                    </blockquote>                    
                </figcaption>
            </figure>
            <div class="solutions_item_secondpart">
                <h2>UI/IX DESIGN</h2>
                <div class="solutions_item_secondpart_textarea">
                    <p>Nous réalisons vos sites <strong>vitrines</strong> et <strong>e-commerces</strong> avec différentes technologies, en discutant avec vous pour trouver la réponse la plus adaptée à vos besoins et à votre budget.</p>
                    <p>Votre site sera <strong>optimisé</strong> pour un affichage sur ordinateur, mais également sur téléphone, tablette et autres supports.</p>
                    <p>Nous vous fournissons un site <strong>favorisé par l’algorithme</strong> de Google, afin que vos clients potentiels le trouvent facilement lors de leurs recherches.</p>
                    <a href=""><font-awesome-icon :icon="['fas', 'arrow-down-right']" />PLUS D'INFOS</a>
                </div>
            </div>
        </section>
        <section class="solutions_item">
            <figure class="solutions_item_firstpart">
                <img src="../assets/SolutionImg2.png" alt="">
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
                    <a href=""><font-awesome-icon :icon="['fas', 'arrow-down-right']" />PLUS D'INFOS</a>
                </div>
            </div>
        </section>
        <section class="solutions_item">
            <figure class="solutions_item_firstpart">
                <img src="../assets/SolutionImg3.png" alt="">
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
                    <a href=""><font-awesome-icon :icon="['fas', 'arrow-down-right']" />PLUS D'INFOS</a>
                </div>
            </div>
        </section>
        <section class="solutions_item">
            <figure class="solutions_item_firstpart">
                <img src="../assets/SolutionImg4.png" alt="">
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
                    <a href=""><font-awesome-icon :icon="['fas', 'arrow-down-right']" />PLUS D'INFOS</a>
                </div>
            </div>
            <div class="lavender-button">
                <a href="" class="lavender-button-text">NOS TARIFS</a>
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
    gap:220px;
    padding-left: 70px;
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
.solutions_item_secondpart_textarea a::before {
    content: " V ";
    display: inline-block;
    padding-right: 10px;
    transform: rotate(0deg);
    transition: transform 700ms;
}
.solutions_item_secondpart_textarea a:hover {
    color: #9EAAFF;
    transition: all 700ms ease;
}
.solutions_item_secondpart_textarea a:hover:before {
    transform-origin: 7px 11px;
    transform: rotate(-90deg);
    transition: all 700ms;
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
    margin: 31% 15% 0 0;
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
.solutions_item:nth-child(2) .solutions_item_secondpart {
    margin: 41% 0 0 8%;
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
.solutions_item:nth-child(2n) .solutions_item_secondpart {
    flex-direction: row-reverse;
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
    margin: 31.5% 0% 0 3%;
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
    margin: 23.5% 0% 0 0%;
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

</style>
