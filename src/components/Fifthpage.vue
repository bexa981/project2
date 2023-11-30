<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="modullar">
        <h2 data-aos="fade-up" data-aos-duration="1500"><span>Shohista Djurabayevaning </span> kursining 
            darslik <br> mavzulari</h2>

        <div class="all-cards">
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        INTRODUCTION
                    </p>
                    <div class="card">
                        <h3>
                            Kurs haqida umumiy
                            <br>
                            malumotlar
                        </h3>
                        <ul>
                            <li>Kursni davomiyligi 1.5 oy</li>
                            <li>Nazariy dars: 7 ta</li>
                            <li>Amaliy dars: 6 ta</li>
                            <li>Bir xaftada 1 ta nazariy 1 ta amaliy dars</li>
                            <li>Nazariy darsda o'tilgan mavzuni amaliy darsda ishlanadi</li>
                            <li>4 va 5 dars nazariy va amaliy darslari bir vaqtda bo'ladi</li>
                            <li>Shunda 4 ta alohida amaliy dars qoladi</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        1-dars
                    </p>
                    <div class="card">
                        <h3>
                            Irarxiya qonuni. 
                            <br>
                            Inson DNK si qanday tuzilgan, DNK inson psixologiyasi orqali nimaga javob beradi.
                        </h3>
                        <ul>
                            <li>Men hozir yashayotgan hayot o'zimni xis-tuyg'ularimga hohishlarimga qarab qurilganmi</li>
                            <li>Yoki ajdodlarimga qarab qurilganmi</li>
                            <li>Yoki ajdodlarim xislarida yashab hayotimni o'zgartira olmayapmanmi</li>
                            <li>Irarxiya qonuni</li>
                            <li>Oila Irarxiyasida mani joyim qayerda?</li>
                            <li>Sizning hayotingizda ajdodlarning va takrorlanuvchi ssenariylarning ahamiyati</li>
                            <li>Genetik takrorlanuvchi ssenariylardan chiqish</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        2-dars
                    </p>
                    <div class="card">
                        <h3>
                            Munosabatlar
                            <br>
        
                        </h3>
                        <ul>
                           
                          
                            <li>Ajdodlar energiyasi bilan ulanish</li>
                            <li>Ajdodlardagi tug'ilmagan bolalar abortlar va bola tushishi</li>
                            <li>Kuchli aybdorlik xissi </li>
                            <li>Kuchli qo'rquv</li>
                            <li>Kuchli ishonchsizlik</li>
                            <li>Kuchli vayronkor-barbod qiluvchi xislar. Insonni qiynovchi o'lim hissi</li>

                        </ul>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        3-dars
                    </p>
                    <div class="card">
                        <h3>
                            Balans-Sistemadagi balans qonuni.



                        </h3>
                        <ul>
                            <li>Hayotga berish va olish</li>
                            <li>Agar mening biron hohishlarim amalga oshmayotgan bo'lsa demak men
                                qayerdadir balansni buzayapman</li>
                            <li>Turmushga chiqa olmayapman</li>
                            <li>Qarzlardan chiqa olmayapman</li>
                            <li>Pullarga ochila olmayapman yoki pullarimda baraka yo'q</li>
                            <li>Sog'ligimda muammo bor, xech undan qutila olmayapman</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        4-dars
                    </p>
                    <div class="card">
                        <h3>
                            Ona sizdagi ona
                            <br>
                            Ona bilan munosabatlar
                        </h3>
                        <ul>
                            <li>Turmush o'rtoq bilan chiqisha omaslik</li>
                            <li>Inson o'zini qabul qila olmasligi</li>
                            <li>Inson o'zini ko'p narsalarga loyiq ko'ra olmasligi</li>
                            <li>Butunlay hafagarchiliklar va shikoyatlar</li>
                            <li>Ichki dunyodagi depressiyya va agressiyalar</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="cards">
                <div>
                    <p class="left">
                        5-dars
                    </p>
                    <div class="card">
                        <h3>
                            Otangiz siz uchun kim
                            <br>
                            Ona va ota bu sani otang
                            <br>
                            Ota bu himoya
                        </h3>
                        <ul>
                            <li>Masshtab yani pulda o'sish</li>
                            <li>Himoyani his qilish</li>
                            <li>O'ziga bo'lgan ishonchni ishlash</li>
                            <li>Otaga bo'lgan xafagarchiliklarni ishlash</li>

                        </ul>
                    </div>
                </div>

            </div>

           
        </div>

    </div>
</template>
<style scoped>
.modullar {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modullar h2 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
}

.modullar span {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.all-cards {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0px;

}

.cards {

    margin: 10px;

    width: 500px;
}

.cards .left {

    background-color: var(--redColor);
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 70px;
    border-radius: 13px;
     margin-bottom: 0px;
 

    z-index: -1;

}

.cards .card {
    padding: 50px;
    border-radius: 15px;
    line-height: 2rem;
    font-size: 18px;
    z-index: 5;
    height: 600px;
    box-shadow: 5px 5px 20px rgb(191, 190, 190), -5px -5px 20px rgb(193, 192, 192);
}

.cards .card h3 {
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 20px;
    color: var(--redColor);
}
@media only screen and (max-width: 1316px) {
 .all-cards{
    width: 100%;
 }
 .modullar h2 {
        text-align: center;
        font-size: 3rem;
        font-family: 'Oswald', sans-serif;
    }

    .modullar span {
        text-align: center;
        font-size: 3rem;
        font-family: 'Oswald', sans-serif;
    }
 
}

@media only screen and (max-width: 550px) {
 .all-cards{
    width: 100%;
 }
    .cards {

        margin-top: 40px;
        width: 100%;
    }
    .cards .card{
        padding: 20px;
        height: auto;
    }

  

}
</style>