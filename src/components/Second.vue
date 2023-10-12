<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";

const items = ref([{
    id: 1,
    title: 'Turmushga chiqish uchun',
    info: 'Turmushga chiqishi kechikib o`z juftini topa olmayotganlar, ajrashib ikkinchi xotin bo`lishni xoxlamasdan sog`lom oila qurishni xoxlovchilar,  munosabatlar garmoniyasi va oilani yaratishni o`rganamiz. '
},
{
    id: 2,
    title: 'Katta daromadga chiqish uchun',
    info: 'Bir necha yillardan beri ishlab kredit to`lashdan charchaganlar, ko`p ishlasayam pulida barakasi yo`q insonlar, o`zini yuqori daromadini oshirishdagi qo`rquvini yenga olmayotganlar uchun pullar enegiyasiga ochilib katta daromadga bosqichma bosqich chiqishni balnas qonuniga ko`ra o`rganamiz'
},
{
    id: 3,
    title: 'Qarzdorlikdan chiqish uchun',
    info: ' Bu ko`proq ajdodiy programma: "men hamma uchun majburman, o`z hayotimda yashashga haqqim yoq", deb hisoblaydiganlar va doimiy pullardagi qaramalikdan chiqa olmayotgan insonlar uchun pullardagi erkinlikni , barakani birgalikda yaratamiz! Balans qonuniga ko`ra'
},
{
    id: 4,
    title: 'Ortiqcha tana vaznidan sog`lom halos bolish uchun',
    info: 'Ortiqcha vazn bu kuchli himoya, tanadagi to`planib qolgan hafagarchiliklar, tanani his qila olmaslik, hayotdagi himoyani his qila olmaslik, dietalardan ozish marafonlari ta`sir qilmasdan charchaganlar uchun tanani his qilishni himoya tana emasligini o`rganib sog`lom qomadni yaratamiz'
},
{
    id: 5,
    title: 'Asl qobiliyatini ochish uchun',
    info: 'Ish joyini tinmasdan almashtirib, ishxonaga erergiyasizlikda pul uchun majburan boradiganlar, o`ziga yoqmasada  oilani boqish uchun majbur ishlaydiganlar,erkin mazza qilib qobiliyatini ko`rsatib asl qalb kasbini birgalikda topamiz.'
}
    , {
    id: 6,
    title: 'Farzandlari bilan konfliktda charchagan insonlar uchun',
    info: ' Abort qildirib o`zini aybdorlikdan chiqara olmayotganlar, abortdan keyin turmush o`rtog`i va farzandlari mehrini his qila olmayotganlar uchun kuchli aybdorlik hissini birgalikda qayta ishlab garmoniyaga aylantiramiz.'
}

])
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="main-second">
        <div class="info-top">
            <h2 data-aos="fade-up" data-aos-duration="1500" class="kurs">BU KURS <span>KIMLAR</span> UCHUN</h2>
            <p data-aos="fade-up" data-aos-duration="1500" class="title">Hayotida energiyasizlikdan munosabatlarda tinmay
                konfliktdan,<br> tinmay o'zini aybdor his qiladigan,qo'rquvlardan va pulsizlikdan <br>qiynalayotgan insonlar
                uchun </p>
        </div>


        <div class="cards">
            <div data-aos="flip-left" data-aos-duration="1500" class="card1" v-for="item in items" :key="item.id">
                <img class="circle" src="/images/circle.png" alt="">
                <p class="card-title">{{ item.title }}</p>
                <p class="card-info">{{ item.info }}</p>
                <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" type="button" class="card-btn">Bog'lanish</button>
                
            </div>
     <Modal/>
        </div>
    </div>
</template>

<style scoped>
.main-second {
    margin: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-top h2 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
}

.info-top span {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.info-top p {
    text-align: center;
    font-size: 20px;
}

.cards {
    width: 85%;
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 40px;
}

.card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 3px solid var(--redColor);
    width: 350px;
    padding: 20px;
    height: 565px;
    border-radius: 10px;
    margin-bottom: 30px;
    transition: .3s;

}

.card:hover {
    box-shadow: 4px 4px 10px var(--redColor);
}

.card:hover img {
    box-shadow: 4px 4px 10px var(--redColor);
}

.card-title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}

.circle {
    width: 80px;
    border-radius: 50%;
    margin-top: -60px;
    transition: .3s;
}

.card-info {
    font-size: 20px;
    text-align: left;

}

.card-btn {
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--redColor);
    color: white;
    font-weight: 600;
    border: 3px solid;
    transition: .3s;
}

.card-btn:hover {
    background-color: rgb(185, 71, 71);
    border: 3px solid;
    transition: .3s;
}

@media only screen and (max-width: 550px) {
    .main-second {
        margin: 0;
        padding: 5px;
    }

    .info-top h2 {
        font-size: 3rem;
    }

    .info-top span {
        font-size: 3rem;
    }

    .info-top p {
        text-align: center;
        font-size: 18px;
    }
}</style>