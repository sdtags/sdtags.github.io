<template>
  <header class="header">
    <div class="container-max py-3 md:py-4">
      <div class="tabs">
        <button
          v-for="t in tabs"
          :key="t.id"
          class="tab"
          :class="active === t.id ? 'tab-active' : ''"
          @click="$emit('select', t.id)"
        >
          {{ t.label }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  active: { type: String, required: true },
});
defineEmits(["select"]);
</script>
