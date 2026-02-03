<template>
  <section class="group">
    <div class="group-head" :class="open ? 'border-b border-white/10' : ''">
      <div class="group-title">
        <div class="min-w-0">
          <h2>{{ title }}</h2>
        </div>
      </div>

      <button
        class="chev"
        @click="open = !open"
        :title="open ? 'collapse' : 'expand'"
      >
        <svg v-if="open" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 15l6-6 6 6"
            stroke="rgba(255,255,255,.8)"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="rgba(255,255,255,.8)"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <div v-if="open" class="gridwrap">
      <PromptGrid
        :items="items"
        :showLabels="showLabels"
        @copy="$emit('copy', $event)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import PromptGrid from "./PromptGrid.vue";

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, default: () => [] },
  showLabels: { type: Boolean, default: true },
  forceOpen: { type: Boolean, default: false },
  forceClose: { type: Boolean, default: false },
});

defineEmits(["copy"]);

const open = ref(true);

watchEffect(() => {
  if (props.forceOpen) open.value = true;
  if (props.forceClose) open.value = false;
});
</script>
