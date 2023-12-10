<template>
    <div class="flex flex-wrap w-full">
        <div
            class="absolute w-full"
            v-for="(color, index) in sliders"
            :key="color"
        >
            <transition name="fade">
                <div
                    :class="color"
                    style="height: 350px"
                    v-if="currentSlide == index"
                ></div>
            </transition>
        </div>
        <div class="absolute w-full" style="height: 340px">
            <div class="absolute w-full bottom-0 flex justify-center">
                <div
                    v-for="(item, index) in sliders"
                    :key="item"
                    class="w-4 h-4 rounded-full bg-black mx-2 cursor-pointer shadow-md"
                    @click="makeActive(index)"
                    :class="
                        currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'
                    "
                ></div>
            </div>
        </div>
        <!-- <div class="m-4 flex w-full">
            <div class="m-auto">
                <transition name="fade">
                    <h1 v-if="isTitleShowing">Slider Carousel</h1>
                </transition>
                <button
                    class="px-2 rounded border"
                    @click="isTitleShowing = !isTitleShowing"
                >
                    Toggle text
                </button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            sliders: ["bg-green-600", "bg-blue-600", "bg-yellow-600"],
            interval: "",
            isTitleShowing: true,
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide =
                this.currentSlide == 2 ? 0 : this.currentSlide + 1;
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        makeActive(index){
            this.currentSlide = index
        }
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>