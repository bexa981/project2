<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="main7">
        <h2 data-aos="fade-up" data-aos-duration="1500">Kursni hoziroq <br>
            olishingiz uchun <span> 6 sabab</span></h2>
        <div  class="cards">
            <div data-aos="fade-up" data-aos-duration="1500" class="sabablar">
                <div>
                    <h3>01</h3>
                    <p>Darslar davomida bosqichma bosqich hayotingizdagi muammolarga yechim topasiz</p>
                </div>
                <div>
                    <h3>02</h3>
                    <p>Har qanday qiyinchilik hayotingizda yuzaga kelganda ham sizda muammoni yechish uchun doimiy texnikalar
                        mavjud boladi </p>
                </div>
                <div>
                    <h3>03</h3>
                    <p>Hayotingizdagi o'z juftingizni topganingizda, u bilan sog'lom munosabat qurish uchun qonuniyatlar
                        asosida, hayotiy ko'nikmalar va instrumentlaringiz bo'ladi.</p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500" class="sabablar">
                <div>
                    <h3>04</h3>
                    <p>Shohista Djurabayevaning halqaro ekspertlik tizimidagi bilimlarga ega bo'lasiz</p>
                </div>
                <div>
                    <h3>05</h3>
                    <p>Siz uchun hayotingizdagi konflikt va muammo degan tushuncha yakunlanadi</p>
                </div>
                <div>
                    <h3>06</h3>
                    <p>Ichki va tashqi dunyoingizda o'zingizga bo'lgan ishonchinigz maksimal oshadi va o'zingizni sevishni
                        boshlaysiz, shuni unutmang o'zini seva olmagan inson o'zgalarni ham seva olmaydi</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main7 {
    margin: 10vh 7vw 10vh 7vw;
    text-align: center;
    background-color: black;
    color: black;
    padding: 70px 20px;
    border-radius: 60px;
    background-image: url('https://wallpapers.com/images/hd/red-and-white-x-shape-white-background-b4c63dbl6i2xtz9o.jpg');
    background-size: cover;
    background-position: center;
}

.main7 h2 {
    text-align: center;
    font-size: 5rem;
    font-family: 'Oswald', sans-serif;
}

.main7 span {
    text-align: center;
    font-size: 5rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.sabablar {
    display: flex;
    justify-content: center;
    gap: 20px;


}

.sabablar h3 {
    font-size: 65px;
    font-weight: 600;
    color: var(--redColor);
}
.sabablar p{
    font-size: 18px;
}
.sabablar div {
    text-align: left;
    
    width: 300px;
}

.cards {
    margin-top: 10vh;
}
@media only screen and (max-width: 1400px) {
 .main7{
    width: 100%;
    margin: 25px 0;

    padding: 10px 10px;
 }
 .main7 h2 {
        text-align: center;
        font-size: 3rem;
        font-family: 'Oswald', sans-serif;
    }
    .main7 span {
        text-align: center;
        font-size: 3rem;
        font-family: 'Oswald', sans-serif;
        color: var(--redColor);
    }
    .sabablar h3{
        font-size: 25px;
    }
    .sabablar p{
        font-size: 18px;
    }
    .cards{
        margin-top: 35px;
    }

}

@media only screen and (max-width: 550px) {

   

   

    .main7 {
        margin: 5vh 1vw 5vh 1vw;
        text-align: center;
        background-color: black;
        color: black;
        padding: 70px 20px;
        border-radius: 60px;
        background-image: url('https://wallpapers.com/images/hd/red-and-white-x-shape-white-background-b4c63dbl6i2xtz9o.jpg');
        background-size: cover;
        background-position: center;
    }

    .sabablar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;


    }

    .sabablar h3 {
        font-size: 65px;
        text-align: center;
        font-weight: 600;
        color: var(--redColor);
    }
}</style>