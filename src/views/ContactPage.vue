<template>
    <section id="bgc-darker-blue">
        <div class="section-contact">
            <img src="../../public/Iris-logo-min.gif" alt="Iris-logo-gif" class="section-contact_img">
            <div class="section-contact-form-bloc">
                <h1 class="section-contact-form_title">Un projet ? Contactez-nous</h1>
                <form ref="contactForm" id="form" class="section-contact-form" @submit.prevent="sendEmailContact" method="post">
                    <input type="text" placeholder="Nom*" id="nom" v-model="nom" name="nom" required>
                    <input type="text" placeholder="Prénom*" id="prenom" v-model="prenom" name="prenom" required>
                    <input type="email" placeholder="Email*" id="mail" v-model="mail" name="mail" required>
                    <input type="tel" placeholder="Téléphone" id="tel" v-model="tel" name="tel" >
                    <textarea name="comment" id="comment" v-model="comment" cols="30" rows="10" placeholder="Quelques mots ?*" required></textarea>
                    <div id="fa-button">
                        <input id="contact-button" type="submit" value="ENVOYER">
                        <font-awesome-icon id="contact-icon" icon="fa-solid fa-arrow-down" />
                        <div id="mailsent">
                            <span>Votre message a bien été envoyé ! vous pouvez </span>
                            <router-link to="/">Retourner à la page d'acceuil </router-link> 
                            <span>si vous voulez</span> 
                        </div>
                    </div>                             
                </form>
            </div>            
        </div>
    </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmailContact() {
            let submitBox = document.getElementById('fa-button');
            let submitButton = document.getElementById('contact-button');
            let submitIcon = document.getElementById('contact-icon');
            let mailsent = document.getElementById('mailsent');

            emailjs.sendForm('service_1py3dir', 'template_lm1gp99', this.$refs.contactForm, 'BAjJ10s_sN_Fo5WEB')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    submitButton.style.display = 'none';
                    submitIcon.style.display = 'none';
                    submitBox.style.width = '100%'
                    mailsent.style.display = 'block';
                }, (error) => {
                    console.log('FAILED...', error.text);
            });
        }
    }
}
</script>

<style>
#bgc-darker-blue {
    background-color: #13132B;
    color: white;
}
.section-contact {
    padding: 17% 0 0 23%;
    width: 66%;
    display: flex;
    justify-content: flex-end;
}
.section-contact-form_title {
    margin: 0;
    padding: 0 0 55px 83px;
    font-weight: 600;
    font-size: 35px;
}
.section-contact_img {
    flex-basis: 20%;
    position: absolute;
    height: 420px;
    width: 40%;
    background-color: #1F1F30;
    left: 110px;
    bottom: 270px;
}
.section-contact-form-bloc {
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-basis: 81%;
    /* gap: 30px;  */
}
.section-contact-form {
    width: 40%;
    height: 290px;
    border-left: solid 2px #9EAAFF;
    padding-left: 85px; 
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: left;
    column-gap: 50px;
}
.section-contact-form :nth-child(-n+5){
    fill: solid;
    padding-left: 8%;
    color: #9EAAFF;
    border: solid 2px #9EAAFF;
    background-color: #0000;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 40px;
    width: 330px; 
}
.section-contact-form :nth-child(-n+4){
    flex-basis: 16%;
}
.section-contact-form textarea {
    width: 250px; 
    height: 175px;
    padding-top: 14px;
}
.section-contact-form #contact-button {
    position: relative;
    color: white;
    background-color: #9EAAFF;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding: 13px 63px;
    border-radius: 40px;
    margin: 0 auto;
    border: 0;
}
#fa-button {
    width: 230px;
    height: 59px;
    display: block;
    position: relative;
    color: white;
    border: 0;
    display: flex;
    align-items: center;
    padding-left: 15px;
}
#fa-button svg {
    position: absolute;
    left: 25px;
    width: 20px;
    border: 0;
    font-size: 25px;
    transform-origin: 30px 10px;
    transform: rotate(-45deg);
    transition: transform 500ms 150ms;
}
#fa-button svg path {
    fill: white;
}
#fa-button:hover svg {
    
    transform: rotate(-90deg);
    transition: transform 500ms 150ms;
}
#mailsent {
    display: none;
    background-color: #69df69;
    text-align: center;
    margin-top: 100px;
    border: 0px;
    border-radius: 15px;
    padding: 10px 5px;
    flex-basis: 100%;
    height: 100px;
}
#mailsent > * {
    padding: 0;
}
#mailsent span {
    border: none;
    color: black;
}
#mailsent a {
    color: #0d4d91;
    border: none;
}
#mailsent a:hover {
    color: white;
    transition: all 500ms;
}
@media screen and (max-width: 1500px) {
    .section-contact_img {
        bottom: 370px;
    }
}
@media (max-width: 1350px) {
    .section-contact {
        padding: 15% 12%;
    }
    .section-contact_img {
        left: -100px;
        bottom: 460px;
        height: 325px;
    }
}
@media (max-width: 1200px) {
    .section-contact-form :nth-child(-n+5) {
        width: 100%;
    }
}
@media (max-width: 500px) {
    .section-contact{
        width: 100%;
        padding: 17% 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section-contact-form_title {
        padding: 40px;
        text-align: center;
        font-size: 165%;
    }
    .section-contact_img{
        left: 16%;
        bottom: 32%;
        width: 300px;
        height: 200px;
    }
    .section-contact-form {
        width: 100%;
        height: 700px;
        padding-left: 0;
        border-left: 0;
        flex-wrap: nowrap;
        gap: 40px;
    }
    .section-contact-form :nth-child(-n+5) {
        width: 90%;
        line-height: 40px;
    }
    .section-contact-form textarea {
        margin-top: 150px;
        height: 200px;
    }
    #fa-button {
        align-self: center;
    }
}
@media (max-width: 400px) {
    .section-contact_img{
        left: 12%;
    }
}
</style>
