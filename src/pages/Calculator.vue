<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl text-center">calculator</h1>
            <p
                class="h-10 text-3xl text-right mt-4 mb-2 w-40 overflow-x-scroll"
                style="direction: rtl"
            >
                {{ currentNum }}
            </p>
            <div class="h-10">
                <small v-if="selectedOperation"
                    >{{ prevNum }} {{ selectedOperation }}
                    {{ currentNum }}</small
                >
            </div>
            <div class="grid grid-cols-4 gap-2">
                <button
                    @click="pressed('1')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    1
                </button>
                <button
                    @click="pressed('2')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    2
                </button>
                <button
                    @click="pressed('3')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    3
                </button>
                <button
                    @click="pressed('+')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    +
                </button>
                <button
                    @click="pressed('4')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    4
                </button>
                <button
                    @click="pressed('5')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    5
                </button>
                <button
                    @click="pressed('6')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    6
                </button>
                <button
                    @click="pressed('-')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    -
                </button>
                <button
                    @click="pressed('7')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    7
                </button>
                <button
                    @click="pressed('8')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    8
                </button>
                <button
                    @click="pressed('9')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    9
                </button>
                <button
                    @click="pressed('*')"
                    class="p-2 w-10 h-10 border rounded shadow"
                >
                    *
                </button>
                <button
                    @click="pressed('c')"
                    class="p-2 h-10 border rounded shadow"
                >
                    c
                </button>
                <button
                    @click="pressed('0')"
                    class="p-2 h-10 border rounded shadow"
                >
                    0
                </button>
                <button
                    @click="pressed('=')"
                    class="p-2 h-10 border rounded shadow"
                >
                    =
                </button>
                <button
                    @click="pressed('/')"
                    class="p-2 h-10 border rounded shadow"
                >
                    /
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";
export default {
    setup() {
        const operations = ["+", "-", "/", "*"];
        const currentNum = ref("");
        const prevNum = ref("");
        const selectedOperation = ref("");
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        function pressed(value) {
            if (value == "=" || value == "Enter") {
                calculate(value);
            } else if (value == "c") {
                clear();
            } else if (operations.includes(value)) {
                applyOperations(value);
            } else if (numbers.includes(value)) {
                appendNumber(value);
            }
        }

        function applyOperations(params) {
            calculate();
            prevNum.value = currentNum.value;
            currentNum.value = "";
            selectedOperation.value = params;
        }

        function calculate() {
            if (selectedOperation.value == "*") multiply();
            else if (selectedOperation.value == "/") divide();
            else if (selectedOperation.value == "-") substract();
            else if (selectedOperation.value == "+") sum();

            prevNum.value = "";
            selectedOperation.value = "";
        }

        function appendNumber(value) {
            currentNum.value = currentNum.value + value;
        }

        function clear() {
            currentNum.value = "";
            prevNum.value = "";
            selectedOperation.value = "";
        }

        function multiply() {
            currentNum.value = currentNum.value * prevNum.value;
        }

        function divide() {
            currentNum.value = prevNum.value / currentNum.value;
        }

        function substract() {
            currentNum.value = prevNum.value - currentNum.value;
        }

        function sum() {
            currentNum.value = +currentNum.value + +prevNum.value;
        }

        const handleKeyDown = (e) => pressed(e.key);

        useWindowEvent('keydown',handleKeyDown)

        return { pressed, currentNum, prevNum, selectedOperation };
    },
};
</script>

<style>
</style>