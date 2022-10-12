<template>
    <section class="origin-section">
        <div>
            <p>IRIS met à votre service l’Intelligence Artificielle. boostez votre <span class="lavender-text">visibilité</span></p>
            <img src="" alt="défilement">
        </div>
    </section>
    <section class="bgc-grey home-solutions">
        <h1>Ce que IRIS vous propose</h1>
        <span>Toutes nos solutions sont dopées à <span class="lavender-text">l’Intelligence Artificielle</span></span>
        <div>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <h2>UI/UX Design</h2>
                    <p>Réalisation de vos sites vitrines et e-commerces.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <h2>SEO</h2>
                    <p>Vous faire apparaître parmi les premiers liens des moteurs de recherche.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <h2>Leads</h2>
                    <p>Génération de prospects via les réseaux sociaux et les moteurs de recherche.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="" alt="">
                <figcaption>
                    <h2>Community Management</h2>
                    <p>Assurer votre présence, votre visibilité, votre notoriété et votre image sur les réseaux.</p>
                </figcaption>
            </figure>
        </div>
        <a href="" class="lavender-box">Découvrir nos solutions</a>
    </section>
    <section class="home-realisations">
        <img src="" alt="">
        <div class="bgc-dark-blue">
            <h1>Pourquoi nous choisir ? </h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim uptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fuccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="" class="lavender-button">REALISATIONS</a>
        </div>
    </section>
    <section class="bgc-grey home-annonce">
        <p><span class="lavender-text">IRIS</span> permet aux entrepreneurs de se digitaliser et de maîtriser leur image sur le web.</p>
    </section>
    <section class="bgc-dark-blue home-contact">
        <div>
            <div>
                <h1>On discute ? </h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                <span>hello@irisdigital.fr</span>
            </div>
            <form action="">
                <input type="text" placeholder="Nom / Prénom">
                <input type="email" placeholder="Email">
                <textarea name="" id="" cols="30" rows="10" placeholder="Quelques mots ?"></textarea>
                <input type="submit" value="CONTACT" class="lavender-box">
            </form>
        </div>
    </section>
</template>

<style>
.origin-section {
    background-image: url("../assets/acceuil.svg");
    color: white;
}
.origin-section div{
    padding: 33% 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.origin-section div p{
    margin: 0;
    flex-basis: 65%;
    font-weight: 600;
    font-size: 58px;
    line-height: 87px;
    text-transform: uppercase;
}
.home-solutions {
    padding: 15% 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-solutions h1 {
    font-weight: 500;
    font-size: 38px;
    line-height: 57px;
    margin: 0;
}
.home-solutions>span {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 70px;
}
.home-solutions div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
}
.home-solutions div figure {
    flex-basis: 20%;
    text-align: center;
    padding: 2%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    border-radius: 34px;
}
.home-solutions a {
    padding: 1% 2%;
    border-radius: 40px;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
}
.home-realisations {
    display: flex;
}
.home-realisations>* {
    flex-basis: 50%;
}
.home-realisations div {
    display: flex;
    flex-direction: column;
    padding: 15% 32% 0% 7%;
}
.home-realisations div h1{
    font-weight: 900;
    font-size: 38px;
    line-height: 57px;
}
.home-realisations div p{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.home-realisations div a{
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
}   
.home-annonce {
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-annonce p {
    flex-basis: 40%;
    font-weight: 300;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
}
.home-contact>div {
    padding: 15% 30%;
    display: flex;
    column-gap: 70px;
}
.home-contact div h1 {
    margin: 0;
    font-weight: 900;
    font-size: 38px;
    line-height: 57px;
}
.home-contact div p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.home-contact div span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.home-contact div form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.home-contact div form :nth-child(-n+3){
    color: #9EAAFF;
    border: solid 3px #9EAAFF;
    background-color: #0000;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 40px;
    width: 367px;
    padding: 4% 8%;  
}
.home-contact div form :nth-child(-n+2) {
    flex-basis: 10%;
}
.home-contact div form :last-child {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    border-radius: 40px;
    padding: 4% 15%;
    align-self: center;
}

</style>
