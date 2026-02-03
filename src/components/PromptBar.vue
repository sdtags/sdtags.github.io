<template>
  <div class="promptbar">
    <div class="promptbar-inner" :class="containerClass">
      <div class="promptbar-row">
        <div class="promptbar-title">
          <div class="text-sm font-semibold tracking-tight">Prompt builder</div>
          <div class="text-xs text-zinc-400">
            Click cards to add tags. Click a chip to remove.
          </div>
        </div>

        <div class="promptbar-actions">
          <button
            class="btn btn-copy"
            :class="copiedFlash ? 'btn-copied' : ''"
            @click="$emit('copyAll')"
            :disabled="!tags.length"
          >
            <span class="btn-copy-layer" :class="copiedFlash ? 'is-hidden' : ''"
              >Copy</span
            >
            <span class="btn-copy-layer" :class="copiedFlash ? '' : 'is-hidden'"
              >Copied</span
            >
          </button>

          <button
            class="btn btn-ghost"
            @click="$emit('clear')"
            :disabled="!tags.length"
          >
            Clear
          </button>
        </div>
      </div>

      <div v-if="tags.length" class="chips">
        <button
          v-for="t in tags"
          :key="t"
          class="chip"
          @click="$emit('remove', t)"
          :title="'Remove: ' + t"
        >
          <span class="truncate">{{ t }}</span>
          <span class="chip-x">×</span>
        </button>
      </div>

      <div v-else class="emptyline">Nothing selected yet.</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  tags: { type: Array, default: () => [] },
  containerClass: { type: String, default: "container-max" },

  // увеличивается в App.vue каждый раз, когда копирование прошло успешно
  copiedTick: { type: Number, default: 0 },
});

defineEmits(["remove", "clear", "copyAll"]);

const copiedFlash = ref(false);
let timer = null;

watch(
  () => props.copiedTick,
  () => {
    copiedFlash.value = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      copiedFlash.value = false;
      timer = null;
    }, 850);
  },
);
</script>
