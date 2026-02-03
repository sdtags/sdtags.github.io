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

      <div v-else class="card-img grid place-items-center bg-zinc-900/60">
        <div class="text-center px-3">
          <div class="text-xs text-zinc-300/80">no image</div>
        </div>
      </div>

      <div v-if="showLabels" class="tagbar">
        <transition name="tagfade" mode="out-in">
          <span v-if="!flash" key="tag" class="tagpill">{{ item.tag }}</span>
          <span v-else key="flash" class="tagpill">{{ flashText }}</span>
        </transition>
      </div>
    </div>
  </button>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  item: { type: Object, required: true },
  showLabels: { type: Boolean, default: true },
  mode: { type: String, default: "copy" }, // "copy" | "build"
});

const emit = defineEmits(["pick"]);

const flash = ref(false);
const imgError = ref(false);

let timer = null;

const flashText = computed(() => (props.mode === "build" ? "Added" : "Copied"));

function handleClick() {
  emit("pick", props.item.tag);

  flash.value = true;
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    flash.value = false;
    timer = null;
  }, 850);
}
</script>
