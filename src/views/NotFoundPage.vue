<template>
    <section id="notfoundsection">
        <h1>Erreur 404</h1>
        <p>Il semblerait que le lien que vous avez utilisé soit impraticable et que vous ne pouvez aller plus loin.</p>
        <p>vous pouvez toutefois <router-link to="/Iris-front/">revenir à la page d'acceuil</router-link> grâce à ce lien si vous le voulez.</p>
    </section>
</template>

<style>  
#notfoundsection {
    padding: 5% ;
    height: 700px;
    background: linear-gradient(135deg, gray, 20% , white 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#notfoundsection h1 {
    font-size: 40px;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 150px;
}
#notfoundsection p {
    font-size: 20px;
}
#notfoundsection a {
    color: #4793f4;
}
#notfoundsection a:hover {
    color: white;
    transition: all ease-out 1500ms;
}

</style>