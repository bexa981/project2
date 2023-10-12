<script>
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';
import fakeData from './fakeDate.json';
import { onMounted } from "vue";
import AOS from "aos";


export default {
    name: 'Accordion',
    components: { Collapse },
    setup() {
        onMounted(() => {
            AOS.init();
        })
        const questions = reactive(
            fakeData.map(({ title, answer }, index) => ({
                title,
                answer,
                isExpanded: null,
            }))
        );

        function handleAccordion(selectedIndex) {
            questions.forEach((_, index) => {
                questions[index].isExpanded =
                    index === selectedIndex ? !questions[index].isExpanded : false;
            });
        }

        return {
            questions,
            handleAccordion,
        };
    },
};

</script>

<template>
    <div class="savollar-main">
        <h2 data-aos="zoom-in" data-aos-duration="1500">Ko'p beriladigan <span class="span">savollar</span></h2>

        <div data-aos="zoom-out" data-aos-duration="1500" class="collapse-main">
            <article class="Wrapper">
                <div v-for="(question, index) in questions" :key="question.title" class="Section">
                    <button :class="[
                        'Panel',
                        {
                            Active: question.isExpanded,
                        },
                    ]" @click="() => handleAccordion(index)">
                        {{ question.title }} <span>+</span>
                    </button>
                    <Collapse as="section" :when="question.isExpanded">
                        <p class="CollapseContent">
                            {{ question.answer }}
                        </p>
                    </Collapse>
                </div>
            </article>

        </div>
    </div>
</template>

<style>
.savollar-main h2 {
    text-align: center;
    font-size: 3rem;
    font-family: 'Oswald', sans-serif;
}

.savollar-main .span {
    font-size: 3rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.savollar-main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.collapse-main {
    margin-top: 70px;
}

.Panel {
    width: 700px !important;
    font-size: 1.2rem !important;
    color: var(--ForegroundColor);
    text-align: left;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Panel span {
    font-size: 30px !important;
    font-weight: 500;
    transition: .2s;
}

.Panel:hover {
    color: var(--AccentColor);
}


.Active {
    color: var(--AccentColor);
}

.Active span {
    transform: rotate(45deg);
}

.Wrapper {
    margin-bottom: 80px;
}

.Section {
    background: var(--BackgroundAlternateColor);
    width: 100%;
    max-width: 700px;
    border-top: 2px solid var(--redColor);
    margin: 0;
}

.Section:last-of-type {
    border-bottom: 1px solid var(--ForegroundColorLight);
}

.Section button {
    width: 100%;
    padding: 20px 10px;
    border: none;
    background: none;
    cursor: pointer;
}

.CollapseContent {
    padding: 0 10px 10px;
    margin: 0;
    color: var(--ForegroundColorLight);
    font-size: 1.1em;
    font-weight: 500;
}

@media only screen and (max-width: 550px) {
    .savollar-main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
       
    }

    .Panel {
        font-size: 1rem !important;
        width: 350px !important;
    }

    .Section button {
        padding: 20px 10px;
    }

    .Section {
        min-width: 350px !important;
    }

    .Collapse p {
        padding: 0 20px 20px;
        margin: 0;
        color: var(--ForegroundColorLight);
    }
}</style>