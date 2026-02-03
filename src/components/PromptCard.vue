<template>
  <button class="card text-left" @click="handleClick" :title="item.tag">
    <div class="relative">
      <img
        v-if="!imgError"
        class="card-img"
        :src="item.thumb"
        :alt="item.tag"
        loading="lazy"
        @error="imgError = true"
      />

      <!-- placeholder если картинки нет -->
      <div v-else class="card-img grid place-items-center bg-zinc-900/60">
        <div class="text-center px-3">
          <div class="text-xs text-zinc-300/80">no image</div>
        </div>
      </div>

      <div v-if="showLabels" class="tagbar">
        <transition name="tagfade" mode="out-in">
          <span v-if="!copied" key="tag" class="tagpill">{{ item.tag }}</span>
          <span v-else key="copied" class="tagpill">Copied to clipboard</span>
        </transition>
      </div>
    </div>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  item: { type: Object, required: true },
  showLabels: { type: Boolean, default: true },
});

const emit = defineEmits(["copy"]);

const copied = ref(false);
const imgError = ref(false);

let timer = null;

function handleClick() {
  emit("copy", props.item.tag);

  copied.value = true;
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    copied.value = false;
    timer = null;
  }, 850);
}
</script>
