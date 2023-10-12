<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ref } from "vue";
const form = ref(null);
onMounted(() => {
    AOS.init();
})
function sendMessage() {
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    if (name && phone && message) {
        form.value.reset();

        fetch(`https://api.telegram.org/bot6559478190:AAHJqWrZvRtw7-D_j2aJo3V7caSB_X6FkAI/sendMessage?chat_id=-1001811333330&text=Foydalanuvchi ismi : ${name}%0AFoydalanuvchi nomeri:${phone}%0AFoydalanuvchidan kelgan xabar: ${message}&parse_mode=html`)
        .then((r) => r.json())
        .then(() => Swal.fire({
            icon: 'success',
            title: 'Jo`natildi',
            text: 'Xabaringiz jo`natildi',

        }))
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Xato..',
            text: 'Qatorlarni to`liq to`ldiring',

        })
    }



}


</script>

<template>
    <div class="contact-main">
        <div>
            <h2 data-aos="" data-aos-duration="1500">Hali ham <span class="span">Savolaringiz </span>bormi?</h2>
            <p data-aos="" data-aos-duration="1500" class="title">Ma’lumotlaringizni qoldiring, <br>
                bizning mutaxassislar sizning <br>
                muammoingizga yechim berishadi</p>

            <form ref="form" id="form" data-aos="" data-aos-duration="1500">
                <div>
                    <input id="name" type="text" placeholder="Ismingiz" required>
                    <input type="tel" id="phone" v-mask="'+998 (##)-###-##-##'" placeholder="+998" required>
                </div>
                <textarea id="message" placeholder="Xabar yozing..." name="" cols="30" rows="10" required></textarea>

                <button type="button" @click="sendMessage()">Savol bering</button>
            </form>
        </div>


        <div class="contact-info">
            <div>


                <div class="manzil">
                    <h3 data-aos="fade-right" data-aos-duration="1500">Djurabayeva</h3>
                    <div>
                        <p data-aos="fade-right" data-aos-duration="1500"> Manzil: <span>Toshkent shahri,Chilonzor tumani, <br> Nafosat MFY, 8-mavzesi,57-uy , 7-honadon</span> </p>

                    </div>
                </div>


                <div class="malumot">
                    <p data-aos="fade-right" data-aos-duration="1500">Malumot uchun: <span>+998 97 017 73 71, +998 97 017 73 72</span></p>
                    <p data-aos="fade-right" data-aos-duration="1500">shohistadjurabayeva.uz@gmail.com</p>
                </div>
                <div data-aos="" data-aos-duration="1500" class="links">
                    <a target="_blank" href="https://www.instagram.com/ekspert_shohistabonu/"><img
                            src="/images/instagram.png" alt=""></a>
                    <a target="_blank" href="https://t.me/energywomensacademy"><img src="/images/telegram.png"
                            alt=""></a>
                    <a target="_blank" href="https://www.youtube.com/@djurabayeva_shohistabonu "><img
                            src="/images/youtube.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-main {
    margin: 5vh 7vw;
    background-color: red;
    padding: 50px;
    background-image: url('/images/contact.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    border-radius: 40px;
    color: black;
    display: flex;
    gap: 50px;
    box-shadow: 3px 3px 10px gray;
}

.contact-main h2 {
    font-size: 3rem;
    margin-bottom: 20px;

}

.contact-main span {
    color: var(--redColor);
}

.contact-main .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
}

.contact-main input {
    padding: 15px;
    font-size: 17px;
    margin: 5px;
    border-radius: 15px;
    background-color: transparent;
    outline: none;
}

form {

    align-items: center;
    display: flex;
    flex-direction: column;
}

.contact-main textarea {
    margin: 5px;
    width: 70%;
    border-radius: 15px;
    font-size: 17px;
    padding: 5px;
    background-color: transparent;
    outline: none;
}

.contact-main button {
    padding: 15px 50px;
    margin: 5px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 15px;
    background-color: var(--redColor);
    color: white;
    border: none;
    cursor: pointer;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contact-info h3 {
    font-size: 3rem;
    margin: 5px;
    font-family: 'Dancing Script', cursive;
}

.contact-info p {
    font-size: 20px;
    margin: 5px;
}

.contact-info a {
    margin: 5px;
}

.links {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.links img {
    width: 50px;
}

.links a {
    transition: .3s;
}

.links a:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 550px) {
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .contact-main h2 {
        font-size: 2rem;
        text-align: center;
    }

    .contact-main textarea {
        width: 100%;
    }

    .contact-main {
        margin: 1px;
        padding: 20px 10px;
        align-items: baseline;
    }

    .contact-main input {
        width: 100%;
        margin: 5px 0px;
    }
    .contact-info{
        width: 100%;
       
    }
    .links{
        justify-content: space-around;
    }
}
</style>