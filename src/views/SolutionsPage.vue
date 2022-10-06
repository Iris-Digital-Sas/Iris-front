<template>
    <section class="solution_intro bgc-grey">
        <h1 class="solution_intro-title">IRIS VOUS OFFRE UNE <br><span class="lavender-text">EXPERTISE</span> COMPLETE TRUC REMPLACER</h1>
        <a href="" class="solution_intro-button lavender-box">NOS TARIFS</a>
        <!-- Le bouton devrait se siter plus bas, chercher solution -->
    </section>
    <div class="bgc-dark-blue solutions">
        <section class="solutions_item">
            <figure class="solutions_item_firstpart">
                <img src="" alt="">
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
                <img src="" alt="">
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
                <img src="" alt="">
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
                <img src="" alt="">
                <figcaption>
                    <blockquote>
                    <p>“Le community management permet, entre autres, d'accroître la notoriété de l'entreprise, de développer son portefeuille clients
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
            <button class="lavender-button">NOS TARIFS</button>
        </section>
    </div> 
</template>

<style>
/* Première partie */
.solution_intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:220px;
}
.solution_intro-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    text-align: center;
}
.solution_intro-button {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding: 1.125% 4.2%;
    border-radius: 40px;
}
/* Deuxième Partie */
/* Image et texte */
.solutions_item_firstpart figcaption{
    font-style: italic;
    background-color: #9EAAFF;
    width: 40%;
    padding: 2% 1%;
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
    margin: 0 -90% 0 67%
}
.solutions_item_secondpart_textarea {
    flex-basis: 33%;
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
}
.solutions_item h2 {
    padding:0 14% 0 10%;
    line-height: 60%;
}
.solutions_item button {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    margin: 5% 40%;
}
/* éléments  pairs */
.solutions_item:nth-child(2n) h2 {
    padding: 0 0 0 19%; 
}
.solutions_item:nth-child(2n) h2::after {
    margin: 0 110% 0 -120%
}
.solutions_item:nth-child(2n) .solutions_item_secondpart {
    flex-direction: row-reverse;
}
.solutions_item:nth-child(2n) .solutions_item_secondpart_textarea {
    flex-basis: 28%;
}
/* Règles pour le 3° élément */
.solutions_item:nth-child(3n) h2 {
    padding:0 6% 0 10%;
}
.solutions_item:nth-child(3n) h2::after {
    margin: 0 -38% 0 38%;
}
.solutions_item:nth-child(3n) .solutions_item_secondpart_textarea {
    flex-basis: 24%;
}
/* Règles pour le 4° élément */
.solutions_item:nth-child(4n) .solutions_item_secondpart_textarea {
    flex-basis: 24%;
}
</style>