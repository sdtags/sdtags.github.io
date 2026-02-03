<template>
  <div class="prompt-grid" :style="gridStyle">
    <PromptCard
      v-for="it in items"
      :key="it.id"
      :item="it"
      :showLabels="showLabels"
      :mode="mode"
      @pick="$emit('pick', $event)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import PromptCard from "./PromptCard.vue";

const props = defineProps({
  items: { type: Array, default: () => [] },
  showLabels: { type: Boolean, default: true },
  cardSize: { type: Number, default: 210 }, // px
  mode: { type: String, default: "copy" }, // "copy" | "build"
});

defineEmits(["pick"]);

const gridStyle = computed(() => ({
  "--cardW": `${Math.max(150, Math.min(360, props.cardSize))}px`,
}));
</script>
