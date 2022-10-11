<template>
    <section class="bgc-dark-blue">
        <div class="section-contact">
            <img src="" alt="Iris-logo-gif" class="section-contact_img">
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
.section-contact {
    padding: 17% 15%;
    width: 65%;
    display: flex;
    justify-content: center;
}
.section-contact-form_title {
    flex-basis: 100%;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    padding-left: 10%;
}
.section-contact_img, .section-contact-form {
    height: 270px;
}
.section-contact_img {
    flex-basis: 20%;
    align-self: flex-end;
}
.section-contact-form-bloc {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    gap: 30px;
}
.section-contact-form {
    border-left: solid 2px #9EAAFF;
    padding-left: 10%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 45px;
}
.section-contact-form :nth-child(-n+5){
    color: #9EAAFF;
    border: solid 2px #9EAAFF;
    background-color: #0000;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 40px;
    width: 300px;
}
.section-contact-form :nth-child(-n+4){
    flex-basis: 11%;
    padding: 1.25% 3.5%;
}
.section-contact-form textarea {
    width: 367px;
    height: 160px;
    padding: 1.5% 3.5%;
}
.section-contact-form :last-child {
    color: white;
    background-color: #9EAAFF;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding: 1.5% 7%;
    border-radius: 40px;
}

</style>