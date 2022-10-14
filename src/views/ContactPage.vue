<template>
    <section id="bgc-darker-blue">
        <div class="section-contact">
            <img src="../assets/Iris-logo.gif" alt="Iris-logo-gif" class="section-contact_img">
            <div class="section-contact-form-bloc">
                <h1 class="section-contact-form_title">Un projet ? Contactez-nous</h1>
                <form action="" class="section-contact-form">
                    <input type="text" placeholder="Nom*" required>
                    <input type="text" placeholder="Prénom*" required>
                    <input type="email" placeholder="Email*" required>
                    <input type="tel" placeholder="Téléphone">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Quelques mots ?"></textarea>
                    <input type="submit" value="ENVOYER">
                </form>
            </div>            
        </div>
    </section>
</template>

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
    left: 115px;
    bottom: 150px;
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
.section-contact-form :last-child {
    color: white;
    background-color: #9EAAFF;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding: 13px 63px;
    border-radius: 40px;
    margin: 0 auto;
}

</style>
