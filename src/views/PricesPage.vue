<template>
    <div class="page-tarifs">
        <section class="bgc-dark-blue title-prices">
            <h1>découvrez les différentes <span class="lavender-text">formules</span> d'iris</h1>
            <span class="prices_info_mobile">Retrouvez le symbole <img class="ai-icon-spoiler" src="../../public/AI-original-min.png" alt="">  pour les solutions intégrant de l'IA</span>    
        </section>
        <section class="prices" id="wd">
            <div class="prices_info bgc-dark-blue">Retrouvez le symbole <img class="ai-icon-spoiler" src="../../public/AI-original-min.png" alt="">  pour les solutions intégrant de l'IA</div>
            <h2>NOS TARIFS DE CONCEPTION DE SITE WEB</h2>
            <span id="IA">Sélectionnez l'une de nos <span class="lavender-text">3 formules</span></span>
            <Carousel>
                <Slide :key="slide">
                    <div class="formula">
                        <span class="lavender-text">à partir de <strong>1000 €</strong></span>
                        <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                        <h3>Développement CMS</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Wordpress</li>
                            <li>Prestashop</li>
                            <li>Joomia</li>
                            <li>Drupal</li>
                            <li>Magento</li>
                            <li>Autres cms et scripts</li>
                        </ul>
                    </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de <strong>1500 €</strong></span>
                        <h3>HTML / PHP</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Optimisé pour le CEO</li>
                            <li>Rapide et fluide</li>
                            <li>Compression du code / images</li>
                            <li>Protocole SSL</li>
                            <li>Analyse du trafic web</li>
                            <li>Responsive tablette / mobile</li>
                        </ul>
                    </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de 2000 €</span>
                        <h3>Développement spécifique</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Optimisé pour le CEO</li>
                            <li>Rapide et fluide</li>
                            <li>Compression du code / images</li>
                            <li>Protocole SSL</li>
                            <li>Analyse du trafic web</li>
                            <li>Responsive tablette / mobile</li>
                            <li>Géolocalisation</li>
                            <li>Notifications web</li>
                        </ul>
                    </div>
                </Slide>
                <template #addons>
                    <pagination />
                </template>
            </Carousel>
            <div class="formulas">
                <div class="formula">
                    <span class="lavender-text">à partir de <strong>1000 €</strong></span>
                    <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                    <h3>Développement CMS</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Wordpress</li>
                        <li>Prestashop</li>
                        <li>Joomia</li>
                        <li>Drupal</li>
                        <li>Magento</li>
                        <li>Autres cms et scripts</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>1500 €</strong></span>
                    <h3>HTML / PHP</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Optimisé pour le CEO</li>
                        <li>Rapide et fluide</li>
                        <li>Compression du code / images</li>
                        <li>Protocole SSL</li>
                        <li>Analyse du trafic web</li>
                        <li>Responsive tablette / mobile</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de 2000 €</span>
                    <h3>Développement spécifique</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Optimisé pour le CEO</li>
                        <li>Rapide et fluide</li>
                        <li>Compression du code / images</li>
                        <li>Protocole SSL</li>
                        <li>Analyse du trafic web</li>
                        <li>Responsive tablette / mobile</li>
                        <li>Géolocalisation</li>
                        <li>Notifications web</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="prices" id="seo">
            <h2>NOS TARIFS SEO</h2>
            <span>Sélectionnez l'une de nos <span class="lavender-text">3 formules</span></span>
            <Carousel>
                <Slide :key="slide">
                    <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>490 €</strong> / mois</span>
                    <h3>Campagne Social ADS</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Facebook ADS</li>
                        <li>Instagram ADS</li>
                        <li>Twitter ADS</li>
                        <li>Linkedin ADS</li>
                    </ul>
                </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de <strong>890 €</strong> / mois</span>
                        <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                        <h3>SEO</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Audit de site</li>
                            <li>Etude de mots-clés</li>
                            <li>Optimisation on-site</li>
                            <li>Intégration</li>
                            <li>Création de contenu</li>
                            <li>Stratégie de netlinking</li>
                            <li>Analysse de liens entrants</li>
                            <li>Surveillance de la concurrence</li>
                            <li>Rapport de positionnement en temps réel</li>
                        </ul>
                    </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de <strong>490 €</strong> / mois</span>
                        <h3>SEA</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Gestion des campagnes Google Adwords</li>
                            <li>Gestion des campagnes Bing</li>
                            <li>Publicité Display</li>
                            <li>Publicité sur mobile</li>
                            <li>Google shopping</li>
                            <li>Publicité Google My Business</li>
                            <li>Annonces vidéos</li>
                            <li>Google analytics IQ</li>
                            <li>Autres régies publicitaires</li>
                        </ul>
                    </div>
                </Slide>
                <template #addons>
                    <pagination />
                </template>
            </Carousel>
            <div class="formulas">
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>490 €</strong> / mois</span>
                    <h3>Campagne Social ADS</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Facebook ADS</li>
                        <li>Instagram ADS</li>
                        <li>Twitter ADS</li>
                        <li>Linkedin ADS</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>890 €</strong> / mois</span>
                    <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                    <h3>SEO</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Audit de site</li>
                        <li>Etude de mots-clés</li>
                        <li>Optimisation on-site</li>
                        <li>Intégration</li>
                        <li>Création de contenu</li>
                        <li>Stratégie de netlinking</li>
                        <li>Analysse de liens entrants</li>
                        <li>Surveillance de la concurrence</li>
                        <li>Rapport de positionnement en temps réel</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>490 €</strong> / mois</span>
                    <h3>SEA</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Gestion des campagnes Google Adwords</li>
                        <li>Gestion des campagnes Bing</li>
                        <li>Publicité Display</li>
                        <li>Publicité sur mobile</li>
                        <li>Google shopping</li>
                        <li>Publicité Google My Business</li>
                        <li>Annonces vidéos</li>
                        <li>Google analytics IQ</li>
                        <li>Autres régies publicitaires</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="prices" id="cm">
            <h2>NOS TARIFS DE COMMUNITY MANAGEMENT</h2>
            <span>Sélectionnez l'une de nos <span class="lavender-text">3 formules</span></span>
            <Carousel>
                <Slide :key="slide">
                    <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>199 €</strong> / mois</span>
                    <h3>Pack présence</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Création ou restructuration comptes / pages</li>
                        <li>1 post chaque semaine</li>
                    </ul>
                </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de <strong>499 €</strong> / mois</span>
                        <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                        <h3>Pack performance</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Création ou restructuration comptes / pages</li>
                            <li>4/5 posts chaque semaine</li>
                            <li>Stratégie social média et planning éditorial</li>
                            <li>Création de votre boutique en ligne</li>
                            <li>Création de contenus personnalisés</li>
                            <li>Gestion des commentaires</li>
                            <li>Modération de la page</li>
                            <li>Gestion E-réputation</li>
                        </ul>
                    </div>
                </Slide>
                <Slide :key="slide">
                    <div class="formula">
                        <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                        <span class="lavender-text">à partir de <strong>1499 €</strong> / mois</span>
                        <h3>Pack puissance</h3>
                        <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                        <ul>
                            <li>Création ou restructuration comptes / pages</li>
                            <li>2/4 posts chaque jour</li>
                            <li>Stratégie social média et planning éditorial</li>
                            <li>Création de votre boutique en ligne</li>
                            <li>Création de contenus personnalisés</li>
                            <li>Gestion des commentaires</li>
                            <li>Modération de la page</li>
                            <li>Gestion E-réputation</li>
                        </ul>
                    </div>
                </Slide>
                <template #addons>
                    <pagination />
                </template>
            </Carousel>
            <div class="formulas">
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>199 €</strong> / mois</span>
                    <h3>Pack présence</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Création ou restructuration comptes / pages</li>
                        <li>1 post chaque semaine</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>499 €</strong> / mois</span>
                    <div class="most-popular bgc-dark-blue">LE PLUS POPULAIRE</div>
                    <h3>Pack performance</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Création ou restructuration comptes / pages</li>
                        <li>4/5 posts chaque semaine</li>
                        <li>Stratégie social média et planning éditorial</li>
                        <li>Création de votre boutique en ligne</li>
                        <li>Création de contenus personnalisés</li>
                        <li>Gestion des commentaires</li>
                        <li>Modération de la page</li>
                    </ul>
                </div>
                <div class="formula">
                    <div class="ai-icon"><img class="ai-icon" src="../../public/AI-symbol-min.png" alt=""></div>
                    <span class="lavender-text">à partir de <strong>1499 €</strong> / mois</span>
                    <h3>Pack puissance</h3>
                    <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
                    <ul>
                        <li>Création ou restructuration comptes / pages</li>
                        <li>2/4 posts chaque jour</li>
                        <li>Stratégie social média et planning éditorial</li>
                        <li>Création de votre boutique en ligne</li>
                        <li>Création de contenus personnalisés</li>
                        <li>Gestion des commentaires</li>
                        <li>Modération de la page</li>
                        <li>Gestion E-réputation</li>
                        <li>Veille concurrentielle</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="prices" id="leads">
            <h2>NOS TARIFS LEADS</h2>
            <p>La génération de leads est prestation particulière car elle est <br>fortement dépendante de la demande du client, et varie trop fortement <br>pour établir un <strong>tarif généralisé</strong>.</p>
            <p>Dans ce contexte, nous vous encourageons à nous <strong>contacter</strong> via le <br>bouton de contact ci-dessous afin de trouver la formule qui vous<br> conviendra, selon les clients que vous visez, et le budget qui est le vôtre.</p>
            <button class="lavender-box prices_button"><router-link class="lavender-box-text" to="/Iris-front/contact">Demander un devis</router-link></button>
        </section>
    </div>
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
.title-prices {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
}
.prices {
    padding: 5% 10%;
    text-align: center;
    background-color: #F5F5F5;
}
.prices_info {
    padding: 2%;
    position: absolute;
    right: 0px;
    width: 20%;
    border-radius: 50px 0 0 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
}
.prices_info_mobile {
    display: none;
}
.ai-icon-spoiler {
   width: 10%;
   margin: -5% 0;
}
.prices h2 {
    margin-top: 13%;
    font-weight: 700;
    font-size: 38px;
    line-height: 57px;
}
.prices > span {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    display: inline-block;
    padding-bottom: 2%;
    margin-bottom: 7%;
}
.prices > span::after , .prices:last-child h2::after {
    content: "";
    display: block;
    border-bottom: 1px solid black;
    width: 7%;
    padding-top: .5%;
    position: absolute;
    right: 46.75%;
}
.formulas {
    display: flex;
    justify-content: space-between;
}
.formula {
    position: relative;
    background-color: white;
    flex-basis: 30%;
    padding: 5% 0;
    border-radius: 32px;
    height: 100%;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
}
.formula span{
    text-transform: capitalize;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-top: 5%;
}
.formula h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    margin: 0;
    padding-bottom: 5%;
}
.formula h3::after {
    content: "";
    display: block;
    border-bottom: 1px solid black;
    width: 85px;
    padding-top: 5%;
    margin: 0 34% 6%;
    align-self: center;
}
.prices_button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    padding: 0px;
    border-radius: 50px 50px 50px 50px ;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin: 0 auto 15%;
    width: 240px;
    height: 45px;
    border: 2px solid #9EAAFF;
}
.prices_button .lavender-box-text {
    z-index: 1;
    text-align: center;
    position: absolute;
}
.formula ul {
    text-align: left;
    padding: 0;
    margin: 0 10%;
    align-self: baseline;
    margin-bottom: 3%;
}
.formula ul li {
    padding: 3%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.formula ul li:nth-child(n+2) {
    border-top: 1px dashed grey;
}
.formula ul li::before {
    content: " •"; /*  */
    font-size: 20px;
    margin: 5%;  
}
.prices h2 {
    font-weight: 700;
    font-size: 38px;
    line-height: 57px;
}
.prices:last-child h2 {
    margin: 40% 0 5%;
}
.prices:last-child p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 2%;
}
.prices:last-child button {
    margin-top: 3%;
}
.formula .ai-icon {
    position: absolute;  
    right: 10px;
    top: 10px;
}
.formula .most-popular {
    position: absolute;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    left: -45px;
    top: 70px;
    border-radius: 50%;
    width: 85px;
    padding: 8.5% .25%;
}
@media (max-width: 1000px) {
    .title-prices {
        height: 750px;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .title-prices h1{
        width: 100%;
        font-size: 100%;
        text-align: center;
    }
    .prices_info {
        display: none;
    }
    .prices_info_mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        flex-wrap: wrap;
        line-height: 30px;
    }
    .ai-icon-spoiler {
        width: 50px;
        height: 70px;
    }
    .prices {
        padding: 10% 0px;
        height: 800px;
    }
    .prices h2 {
        font-size: 25px;
        line-height: 35px;
        margin: 5%;
    }
    .prices > span {
        font-weight: 500;
        font-size: 17px;
        line-height: 33px;
    }
    .prices > span::after, .prices:last-child h2::after {
        width: 100%;
        position: initial;
        padding-top: 10%;
    }
    .formulas {
        display: none;
    }
    .carousel__slide{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 75%;
    }
    .carousel__slide .formula {
        width: 300px;
    }
    .formula span, .lavender-box-text {
        font-size: 16px;
    }
    .formula span {
        margin-right: 25px;
    }
    .formula h3 {
        font-size: 24px;
        line-height: 35px;
        width: 80%;
        margin: 5% 10%;
    }
    .formula h3::after {
        width: 80%;
        margin: 0 10%;
    }
    .formula ul li, .formula .most-popular {
        font-size: 12px;
    }
    .most-popular {
        left: -45px;
        width: 90px;
    }
    .formula .ai-icon {
        width: 50px;
        height: 50px;
        right: 7px;
        top: 5px;
    }
    .carousel__pagination {
        margin: 10px 0 0;
    }
    .prices:last-child h2 {
        margin: 0 15% 5%;
    }
    .prices:last-child p {
        font-size: 14px;
        line-height: 18px;
        margin: 0px 0 10%;
    }
    .page-tarifs #cm {
        height: 950px;
    }
    .page-tarifs #leads {
        height: 400px;
        padding: 10% 5%;
    }   
}
@media (max-width: 430px) {
    .page-tarifs #cm {
        height: 1000px;
    }
    .prices {
        height: 850px;
    }
    .page-tarifs #leads {
        height: 500px;
    }
}

</style>
