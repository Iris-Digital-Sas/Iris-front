<template>
    <section class="origin-section">
        <div>
            <p>IRIS met à votre service l’Intelligence Artificielle. boostez votre <span class="lavender-text">visibilité</span></p>
            <a href="#home">./.</a>
        </div>
    </section>
    <section id="home" class="bgc-grey home-solutions">
        <h1>Ce que IRIS vous propose</h1>
        <span>Toutes nos solutions sont dopées à <span class="lavender-text">l’Intelligence Artificielle</span></span>
        <div>
            <figure>
                <img src="../assets/pencil.png" alt="">
                <figcaption>
                    <h2>UI/UX Design</h2>
                    <p>Réalisation de vos sites vitrines et e-commerces.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="../assets/computer.png" alt="">
                <figcaption>
                    <h2>SEO</h2>
                    <p>Vous faire apparaître parmi les premiers liens des moteurs de recherche.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="../assets/handshake.png" alt="">
                <figcaption>
                    <h2>Leads</h2>
                    <p>Génération de prospects via les réseaux sociaux et les moteurs de recherche.</p>
                </figcaption>
            </figure>
            <figure>
                <img src="../assets/discuss.png" alt="">
                <figcaption>
                    <h2>Community Management</h2>
                    <p>Assurer votre présence, votre visibilité, votre notoriété et votre image sur les réseaux.</p>
                </figcaption>
            </figure>
        </div>
        <a href="" class="lavender-box">Découvrir nos solutions</a>
    </section>
    <section class="home-realisations">
        <img src="../assets/home-img.png" alt="">
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
        <div class="home-contact-bloc">
            <div class="home-contact-bloc-text">
                <h1>On discute ?</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                <span>hello@irisdigital.fr</span>
            </div>
            <form action="">
                <input type="text" placeholder="Nom / Prénom">
                <input type="email" placeholder="Email">
                <textarea name="" id="" cols="30" rows="6" placeholder="Quelques mots ?"></textarea>
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
    padding: 15% 3% 0 13%;
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
    gap: 45px;
    margin-bottom: 100px;
}
.home-solutions figure {
    margin: 0;
    height: 275px;
    flex-basis: 20%;
    text-align: center;
    padding: 3% .75%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    border-radius: 34px;
}
.home-solutions figure img{
    width: 92px;
    height: 91px;
    margin-top: 10%;
}
.home-solutions figcaption h2{
    margin: 8% 0;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
}
.home-solutions figcaption p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
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
    padding: 15% 10% 0% 8%;
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
    margin-bottom: 100px;
}
.home-realisations div a{
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    align-self: flex-start;
    padding: 2% 7%;
    margin-left: 2%;
}   
.home-annonce {
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-annonce p {
    flex-basis: 40%;
    font-style: italic;
    font-weight: 300;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
}
.home-contact-bloc {
    padding: 15% 29.5% 0 29.5%;
    display: flex;
    column-gap: 65px;
    position: relative;
}
.home-contact-bloc h1 {
    margin: 0;
    font-weight: 900;
    font-size: 38px;
    line-height: 57px;
}
.home-contact-bloc p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 17%;
}
.home-contact-bloc span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.home-contact-bloc form {
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
}
.home-contact-bloc form :nth-child(-n+3){
    color: #9EAAFF;
    border: solid 3px #9EAAFF;
    background-color: #0000;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 40px;
    width: 317px;
    padding: 3% 8%;  
}
.home-contact-bloc form :nth-child(-n+2) {
    flex-basis: 10%;
}
.home-contact form textarea {
    flex-basis: 10%;
}
.home-contact-bloc form :last-child {
    position: absolute;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    border-radius: 40px;
    padding: 1% 3%;
    bottom: -150px;
    right: 790px;
}

</style>
