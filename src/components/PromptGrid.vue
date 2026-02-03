<template>
  <div class="prompt-grid">
    <PromptCard
      v-for="it in items"
      :key="it.id"
      :item="it"
      :showLabels="showLabels"
      @copy="$emit('copy', $event)"
    />
  </div>
</template>

<script setup>
import PromptCard from "./PromptCard.vue";

defineProps({
  items: { type: Array, default: () => [] },
  showLabels: { type: Boolean, default: true },
});
defineEmits(["copy"]);
</script>
