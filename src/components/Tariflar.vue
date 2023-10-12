<script setup>
import { onMounted } from "vue";
import Modal from "./Modal.vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="tariflar-main">
        <h2 data-aos="fade-up" data-aos-duration="1500">Tariflar</h2>

        <div class="cards">
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif standart">
                <h3>Silver-online</h3>
                <div class="kursi">
                    <ul>
                        <li>Qayta aloqa yo'q darslarni ko'radi,mustaqil o'zlashtiradi</li>
                        <li>7 ta qonuniyatga oid dars.</li>
                        <li>2 ta jonli amaliyot(4-darsda onaga hafagarchilik bilan amaliyot, 5-darsda otaga hafagarchilik bilan amaliyot guruhi)</li>
                        <li>Kurs tinglanganligi haqida web versiyada sertifikat</li>
                        
                    </ul>
                    <h4 class="skidka"> 4.000.000</h4>
                    <h4 class="narxi">2.500.000</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p style="font-size: 20px;">30% CHEGIRMA</p>
                </div>

            </div>
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif premium">
                <h3>GOLD-online</h3>
                <div class="kursi">
                    <ul>
                        <li>7 ta qonuniyatga oid darslar</li>
                        <li>6 ta Amaliy darslarda</li>
                        <li>Master Shohista Adhamjonovna bilan</li>
                        <li>Birga ishlash jonli tarzda</li>
                        <li>Xar bir ishtirokchi uchun </li>
                        <li>Kvantoviy Diagnostika qilib beradi</li>
                        <li>Kuratorlar nazorati .</li>
                        <li>Kurs órganilganligi haqida jismoniy sertifikat</li>
                        <li>Pullik bitiruv oqshomida ishtirok etish</li>

                        <li>Amaliyot 1 Irarxiya joylashuv,Oila Irarxiyasida o’z o’rniga joylashuv.</li>
                        <li>Amaliyot 2 Munosabatlarda Aybdorlikdan chiqish </li>
                        <li>Amaliyot 3 Pullardagi
                            Aybdorlikdan chiqish </li>
                        <li>Amaliyot 4 Tanani qabul qilish, his qilish amaliyoti.</li>
                        <li>Amaliyot 5 Shartsiz Sevgi o’zini sevishga o’rganish amaliyoti</li>
                        <li>Amaliyot 6 Fokisirovka qilish real hayotni yaratish uchun amaliyoti</li>
                        <li>Amaliyot 7 Eng baxtli hayotim
                            Regressiya yo’li orqali ong ostida yangi Neyron hosil qilish amaliyoti</li>
                        
                    </ul>
                    <h4 class="skidka"> 5.500.000</h4>
                    <h4 class="narxi">3.800.000</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p style="font-size: 20px;">30% CHEGIRMA</p>
                </div>

            </div>
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif vip">
                <h3>VIP-offline</h3>
                <div class="kursi">
                    <ul>
                        <li>7 ta qonuniyatga oid darslar</li>
                        <li>6 ta Amaliy darslarda</li>
                        <li>Master Shohista Adhamjonovna bilan</li>
                        <li>Birga ishlash jonli tarzda</li>
                        <li>Xar bir ishtirokchi uchun </li>
                        <li>Kvantoviy Diagnostika qilib beradi</li>
                        <li>Kuratorlar nazorati .</li>
                        <li>Kurs órganilganligi haqida jismoniy sertifikat</li>
                        <li>Pullik bitiruv oqshomida ishtirok etish</li>

                        <li>Amaliyot 1 Irarxiya joylashuv,Oila Irarxiyasida o’z o’rniga joylashuv.</li>
                        <li>Amaliyot 2 Munosabatlarda Aybdorlikdan chiqish </li>
                        <li>Amaliyot 3 Pullardagi
                            Aybdorlikdan chiqish </li>
                        <li>Amaliyot 4 Tanani qabul qilish, his qilish amaliyoti.</li>
                        <li>Amaliyot 5 Shartsiz Sevgi o’zini sevishga o’rganish amaliyoti</li>
                        <li>Amaliyot 6 Fokisirovka qilish real hayotni yaratish uchun amaliyoti</li>
                        <li>Amaliyot 7 Eng baxtli hayotim
                            Regressiya yo’li orqali ong ostida yangi Neyron hosil qilish amaliyoti</li>
                       
                    </ul>
                    <h4 class="skidka"> 8.300.000</h4>
                    <h4 class="narxi">5.800.000</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p style="font-size: 20px;">30% CHEGIRMA</p>
                  
                </div>

            </div>
            <modal/>
        </div>
    </div>
</template>

<style scoped>
.tariflar-main {
    margin-top: 15vh;
}

.tariflar-main h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 50px;
}
.skidka{
    font-size: 30px;
    color: gray;
    text-decoration: line-through;
}
.narxi{
 font-size: 30px;
 
}
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 12vh;
    gap: 50px;
    margin-bottom: 12vh;
}

.kursi {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

}

.cards .tarif {
    box-shadow: 2px 2px 20px rgb(217, 215, 215), -2px -2px 20px rgb(217, 215, 215);
    padding: 50px;
    width: 450px;
    height: fit-content;
    border-radius: 30px;
}

.cards .tarif button {
    padding: 18px 50px;
    font-size: 20px;
    font-weight: 600;
    background-color: var(--redColor);
    color: white;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 5px 10px rgb(174, 174, 174);
    transition: .3s;
    cursor: pointer;
}

.cards .tarif button:hover {
    background-color: rgb(193, 93, 93);
}

.cards .tarif h3 {
    text-align: center;
    font-size: 2rem;
    border: 3px solid;
    padding: 10px 30px;
    border-radius: 15px;
    margin-top: -86px;
    margin-bottom: 50px;
}

.cards .tarif li {
    line-height: 2rem;
    font-size: 18px;

}

.standart li {
    color: green;
}

.standart h3 {
    color: green;
}

.premium li {
    color: var(--redColor);
}

.premium h3 {
    color: var(--redColor);
}

.vip li {
    color: goldenrod;

}

.vip h3 {
    color: goldenrod;
}

@media only screen and (max-width: 550px) {
    .tariflar-main{
        margin-top: 6vh;
    }
    .tariflar-main h2 {
        font-size: 3rem;
        

    }
    .cards{
        gap: 70px;
    }

    .cards .tarif {
        width: 100%;
        margin: 5px;
        padding: 20px;
    }
}
</style>