<template>
    <section class="flex w-full flex-wrap">
        <div class="m-auto">
            <h1 class="text-2xl my-5 text-center">Re-usable Modal</h1>
                <Modal v-if="isModalOpen" @close="isModalOpen = false">
                    <template #title>
                        <div>
                            <h1 class="text-red-500">Red Modal</h1>
                        </div>
                    </template>
                    <template #body>
                        <div>
                            <p>This id the body Slot</p>
                        </div>
                    </template>
                </Modal>
                <button
                    class="border rounded px-2 mx-4 bg-red-500 text-white"
                    @click="isModalOpen = true"
                >
                    Red Modal
                </button>

                <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
                    <template #title>
                        <div>
                            <h1 class="text-blue-500">Blue Modal</h1>
                        </div>
                    </template>
                    <template #body>
                        <div>
                            <p>This id the body Slot blue</p>
                        </div>
                    </template>
                </Modal>
                <button
                    class="border rounded px-2 mx-4 bg-blue-500 text-white"
                    @click="isBlueModalOpen = true"
                >
                    Blue Modal
                </button>

                <Modal
                    v-if="isGreenModalOpen"
                    @close="isGreenModalOpen = false"
                >
                </Modal>
                <button
                    class="border rounded px-2 mx-4 bg-green-500 text-white"
                    @click="isGreenModalOpen = true"
                >
                    Green Modal
                </button>
            </div>
    </section>
</template>

<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
export default {
    components: { Modal },
    setup() {
        const isModalOpen = ref(true);
        const isGreenModalOpen = ref(false);
        const isBlueModalOpen = ref(false);

        return { isModalOpen, isGreenModalOpen, isBlueModalOpen };
    },
};
</script>

<style>
</style>