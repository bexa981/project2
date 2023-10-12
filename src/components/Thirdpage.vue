<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Modal from "./Modal.vue";
onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="bio">
        <div class="bio-image">
            <img class="photo" src="/images/rasm3.png" alt="">
            <div data-aos="fade-up" data-aos-duration="1500" class="jobs">
                <div class="bio-card">
                    <img src="https://static.tildacdn.com/tild3563-3361-4632-b861-353864663334/Logo.png" alt="">
                    <div>
                        <h4><a style="color: white; text-decoration: none;" target="_blank"
                                href="https://energywomensacademy.uz/">Energy womens academy</a></h4>
                        <p></p>
                    </div>
                </div>
                <div class="bio-card">
                    <img src="https://static.tildacdn.com/tild3563-3361-4632-b861-353864663334/Logo.png" alt="">
                    <div>
                        <h4>Shogirtlik maktabi</h4>
                        <p></p>
                    </div>

                </div>
            </div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                class="btn2">Ariza qoldirish</button>
            <Modal />
        </div>

        <div class="bio-info">
            <h2 data-aos="zoom-in" data-aos-duration="1500">Shohista <br> Djurabayeva</h2>
            <p data-aos="fade-up" data-aos-duration="1500">OLIY MA'LUMOTLI O'ZBEKISTONDA 1-CHI RAQAMLI GENETIK KVANT
                TAHLILI YETUK MUTAHASISI OLIY MALUMOTLI VRACH, PSIXOTERAPEVT,REGRESSIOLOG MASTER, ENERGY WOMENS ACADEMIYASI
                ASOSCHISI PROFESSIONAL EKSPERT.</p>

            <ul>
                <li data-aos="fade-right" data-aos-duration="1500">29-Yoshida bizneslari bankrotga uchrab 35.000$
                    qarzdorlikdan kvant tahlili orqali chiqqan.</li>
                <li data-aos="fade-right" data-aos-duration="1500">29-Yoshida munosabatlardagi garmoniyaga erishib qayta
                    turmush quradi. Energy womens academiyasiga tasis soladi, shahsiy ofisini ochadi va asl qalb kasbida har
                    oyda erkin grafik asosida 15 kun ishlab o'rtacha 5000$ - 8000$ gacha daromadga 6 oy ichida chiqqan.</li>
            </ul>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                class="btn1">Ariza qoldirish</button>
        </div>

    </div>
</template>

<style scoped>
.bio {
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    background-image: url('https://e0.pxfuel.com/wallpapers/528/842/desktop-wallpaper-assemblies-of-the-national-syndicalist-offensive-misc-hq-assemblies-of-the-national-syndicalist-offensive-2019-half-black-half-red.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    margin: 10px 60px 10px 60px;
    flex-wrap: wrap;
    border-radius: 70px;
    height: fit-content;
}

.bio-image {
    width: 36%;
    height: fit-content;


}

.bio-image .photo {
    width: 100%;
}

.jobs {
    display: flex;
    gap: 10px;
    margin-left: 20%;
}

.jobs .bio-card {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 20px;
    background-color: #fdffff54;

    background-size: cover;
    margin-top: 1px;
    margin-bottom: 40px;
    color: white;
}

.bio-card h4 {
    font-size: 18px;
}

.bio-card img {
    width: 50px;

}

.bio-info {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 10px;
}

.bio-info h2 {
    font-size: 4.5rem;
    line-height: 1;
    margin-bottom: 20px;
}

.bio-info p {
    font-size: 18px;
}

li {
    margin-top: 40px;
    font-size: 18px;
}

.bio-info .btn1 {
    margin-top: 30px;
    padding: 20px 50px 20px 50px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    box-shadow: 0 9px rgb(180, 128, 128);
    background-color: var(--redColor);
    color: white;
    transition: .2s;
    margin-bottom: 40px;
}

.bio-info .btn1:active {
    box-shadow: 0 5px rgb(180, 128, 128);
    transform: translateY(4px);
}

.bio-info .btn1:hover {
    background-color: rgb(191, 52, 52);
}

.btn2 {
    display: none;
    width: 80%;
    margin-top: 30px;
    padding: 20px 50px 20px 50px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    box-shadow: 0 9px rgb(180, 128, 128);
    background-color: var(--redColor);
    color: white;
    transition: .2s;
    margin-bottom: 40px;
}

.btn2:active {
    box-shadow: 0 5px rgb(180, 128, 128);
    transform: translateY(4px);
}

.btn2:hover {
    background-color: rgb(191, 52, 52);
}

@media only screen and (max-width: 550px) {
    .bio {
        flex-direction: column-reverse;
        width:100%;
        margin: 0;
    }

    .bio-info {
        width: fit-content;
        gap: 0px;
        padding: 10px;
    }

    .bio-info h2 {
        font-size: 3rem;
    }

    .bio-info p {
        font-size: 17px;
    }

    .bio-info li {
        font-size: 17px;
    }

    .btn1 {
        display: none;
    }

    .btn2 {
        display: block;


    }

    .jobs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;

    }

    .jobs .bio-card {
        margin-bottom: 0;
        width: 100%;

    }

    .bio-image {
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

    }

    .bio-image .photo {
        width: 350px;
    }

}</style>