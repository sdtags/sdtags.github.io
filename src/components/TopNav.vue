<template>
  <header class="header">
    <div :class="containerClass" class="py-3 md:py-4 space-y-3">
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

      <div class="controls">
        <div class="ctrl-left">
          <div class="searchwrap">
            <svg
              class="search-ico"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="rgba(255,255,255,.65)"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="rgba(255,255,255,.65)"
                stroke-width="1.8"
              />
            </svg>
            <input
              class="search"
              type="search"
              placeholder="Search tags…"
              :value="query"
              @input="$emit('update:query', $event.target.value)"
            />
            <button
              v-if="query"
              class="clearbtn"
              @click="$emit('update:query', '')"
              title="Clear"
            >
              ×
            </button>
          </div>
        </div>

        <div class="ctrl-right">
          <div class="slider hidden md:flex">
            <div class="slider-label">Card</div>
            <input
              class="slider-input"
              type="range"
              min="160"
              max="340"
              step="10"
              :value="cardSize"
              @input="$emit('update:cardSize', Number($event.target.value))"
            />
          </div>

          <button
            class="btn btn-ghost"
            @click="$emit('toggle:labels')"
            :title="showLabels ? 'Hide labels' : 'Show labels'"
          >
            {{ showLabels ? "Labels: on" : "Labels: off" }}
          </button>

          <button
            class="btn"
            @click="$emit('toggle:mode')"
            :title="
              mode === 'build' ? 'Switch to copy mode' : 'Switch to build mode'
            "
          >
            {{ mode === "build" ? "Mode: build" : "Mode: copy" }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  active: { type: String, required: true },
  query: { type: String, default: "" },
  cardSize: { type: Number, default: 210 },
  showLabels: { type: Boolean, default: true },
  mode: { type: String, default: "copy" },

  containerClass: { type: String, default: "container-max" },
});

defineEmits([
  "select",
  "update:query",
  "update:cardSize",
  "toggle:labels",
  "toggle:mode",
]);
</script>
