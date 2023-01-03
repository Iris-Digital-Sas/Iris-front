<template>
    <section class="origin-section">
        <div>
            <p>IRIS met à votre service l’Intelligence Artificielle. boostez votre <span class="lavender-text">visibilité</span></p>
            <a href="#begining"><font-awesome-icon icon="fa-solid fa-arrow-down" /></a>
        </div>
    </section>
    <section id="begining" class="bgc-grey home-solutions">
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
        <div class="lavender-box">
            <router-link to="/Iris-front/solutions" class="lavender-box-text">Découvrir nos solutions</router-link>
        </div>               
    </section>
    <section class="home-realisations">
        <img src="../assets/home-img.png" alt="">
        <div class="bgc-dark-blue">
            <h1>Pourquoi nous choisir ? </h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim uptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fuccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            <div class="lavender-button">
                <!--<router-link to="/achievements" class="lavender-button-text">REALISATIONS</router-link>-->
                <a to="#" class="lavender-button-text">REALISATIONS</a>
            </div>
        </div>
    </section>
    <section class="bgc-grey home-annonce">
        <div>
            <p><span class="lavender-text">IRIS</span> permet aux entrepreneurs de se digitaliser et de maîtriser leur image sur le web.</p>
        </div>        
    </section>
    <section class="bgc-dark-blue home-contact">
        <div class="home-contact-bloc">
            <div class="home-contact-bloc-text">
                <h1>On discute ?</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                <div class="home-contact-bloc-text_email">
                    <img src="../assets/email.png" alt="email"><span>hello@irisdigital.fr</span>
                </div>
            </div>
            <form action="">
                <input type="text" placeholder="Nom / Prénom">
                <input type="email" placeholder="Email">
                <textarea name="" id="" cols="30" rows="6" placeholder="Quelques mots ?"></textarea>
                <div class="lavender-box">
                    <input type="submit" value="CONTACT" class="lavender-box-text">
                </div>                
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
    padding: 36% 4.5% 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.origin-section a svg {
    color:  white;
    margin-bottom: 25px;
    width: 30px;
    height: 30px;
    padding: 20%;
    border: white 3px solid;
    border-radius: 50%;
}
.origin-section div p{
    margin: 0;
    flex-basis: 65%;
    font-weight: 600;
    font-size: 50px;
    line-height: 87px;
    text-transform: uppercase;
}
.home-solutions {
    padding: 15% 0 13%;
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
    justify-content: center;
    gap: 45px;
    margin-bottom: 100px;
}
.home-solutions figure {
    margin: 0;
    height: 275px;
    flex-basis: 15%;
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
    padding: 5% 10%;
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
.home-realisations .bgc-dark-blue {
    display: flex;
    flex-direction: column;
    padding: 300px 0 0 150px;
}
.home-realisations div h1{
    width: 499px;
    height: 52px;
    font-weight: 900;
    font-size: 35px;
    line-height: 57px;
}
.home-realisations div p{
    width: 560px;
    height: 282px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
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
.home-annonce div {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-annonce div p { 
    font-style: italic;
    width: 80%;
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
.home-contact-bloc-text_email {
    display: flex;
    align-items: center;
    gap: 10px;
}
.home-contact-bloc-text_email img {
    width: 35px;
    height: 35px;
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
.home-contact-bloc form > :nth-child(-n+3){
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
.home-contact-bloc form > :nth-child(-n+2) {
    flex-basis: 10%;
}
.home-contact form textarea {
    flex-basis: 10%;
}
.home-contact-bloc form > :last-child {
    position: absolute;
    border-radius: 40px;
    padding: 1% 3%;
    bottom: -150px;
    right: 790px;
}
.home-contact-bloc .lavender-box {
    height: 25px;
    width: 100px;
    color: white;
}
.home-contact-bloc .lavender-box .lavender-box-text {
    position: absolute;
    top: 13px;
    left: 47px;
    color: white;
    background-color: #0000;
    border: 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
}
.home-contact-bloc .lavender-box:hover .lavender-box-text {
    color: #9EAAFF;
}
@media screen and ( max-width: 600px) { 
    .origin-section {
        height: 600px;
        background-size: cover;
        background-position: center;
    }
    .origin-section div {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 20px;
        height: 80%;
        gap: 80px;
    }
    .origin-section div p {
        text-align: center;
        flex-basis: 20%;
        font-size: 25px;
        line-height: 40px;
    }
    .origin-section div a {
        display: none;
    }
    #begining {
        height: 1700px;
    }
    .home-solutions h1, .home-solutions span {
        text-align: center;
        margin-bottom: 50px;
    }
    .home-solutions div {
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
    }
    .home-solutions figure {
        margin: 0 7.5%;
        width: 85%;
        flex-basis: 20%;
        justify-content: flex-start;
    }
    .home-solutions figure img {
        margin-top: 5%;
        width: 50px;
        height: 50px;
    }
    .home-solutions figcaption>* {
        margin: 0;
    }
    .home-solutions figure:nth-child(-n+3)  figcaption p {
        margin-top: 45px;
    }
    .home-solutions .lavender-box {
        width: 60%;
        height: 60px;
    }
    .home-solutions .lavender-box a {
        padding: 15px 5px;
        font-size: 20px;
        line-height: 30px;
    }
    .home-realisations {
        flex-direction: column;
    }
    .home-realisations img {
        flex-basis: 30%;
    }
    .home-realisations .bgc-dark-blue {
        padding: 5%;
        flex-basis: 70%;
        justify-content: space-around;
    }
    .home-realisations div h1, .home-realisations div p {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .home-realisations div .lavender-button {
        align-self: center;
        margin: 40px 0;
    }
    .home-annonce {
        height: 500px;
    }
    .home-contact-bloc {
        flex-direction: column;
        height: 90%;
        padding: 8% 10%;
        justify-content: center;
        gap: 50px;
    }
    .home-contact-bloc form {
        align-items: center;
        align-self: center;
    }
    .home-contact-bloc form > :nth-child(-n+3) {
        width: 100%;
    }
    .home-contact-bloc form > :last-child {
        position: relative;
        bottom: 0;
        right: 0;
        padding: 20px 50px
    }
}
@media (max-width: 420px) {
    .home-solutions .lavender-box {
        width: 75%;
    }
    .home-solutions .lavender-box a {
        padding: 15px 0;
    }
}
</style>
