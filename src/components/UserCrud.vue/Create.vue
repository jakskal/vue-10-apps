<template>
    <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">
        Add User
    </button>

    <teleport to="body">
        <Modal v-if="isModalOpen" @close="isModalOpen = false">
            <template #title> Add New user </template>
            <template #body>
                <form @submit.prevent="submit">
                    <div class="p-2">
                        <label> Name</label>
                        <input
                            class="w-full p-2 rounded border"
                            placeholder="User Name"
                            v-model="state.form.name"
                        />
                    </div>
                    <div class="p-2">
                        <label> Email</label>
                        <input
                            class="w-full p-2 rounded border"
                            placeholder="User Email"
                            type="email"
                            v-model="state.form.email"
                        />
                    </div>
                    <div class="p-2">
                        <label> Avatar</label>
                        <input
                            class="w-full p-2 rounded border"
                            placeholder="Avatar url"
                            type="text"
                            v-model="state.form.avatar"
                        />
                    </div>
                    <div class="p-2">
                        <input
                            class="w-full p-2 rounded border hover:bg-gray-300"
                            placeholder="Avatar url"
                            type="submit"
                            value="Create"
                        />
                    </div>
                </form>
            </template>
        </Modal>
    </teleport>
</template>

<script>
import Modal from "../Modal.vue";
import { reactive, ref } from "vue";
import axios from "../../plugins/axios";
export default {
    components: { Modal },

    setup(_,{emit}) {
        const isModalOpen = ref(false);

        const state = reactive({
            users: [],
            form: {
                name: "",
                email: "",
                avatar: "",
            },
        });

        async function submit() {
            const { data } = await axios.post("/users", state.form);
            emit('new-user-added', data)
            state.form.email = "";
            state.form.name = "";
            state.form.avatar = "";
            isModalOpen.value = false;
        }

        return { state, isModalOpen, submit };
    },
};
</script>

<style>
</style>