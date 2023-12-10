import { onMounted, onUnmounted } from "vue";

export default function useWindowEvent(event_name, handleEvent) {
    onMounted(() => window.addEventListener(event_name, handleEvent));

    onUnmounted(() => window.removeEventListener(event_name, handleEvent));
}
