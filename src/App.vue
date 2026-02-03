<template>
  <div>
    <TopNav
      :tabs="nav"
      :active="activeTab"
      :query="query"
      :cardSize="cardSize"
      :fullWidth="fullWidth"
      :showLabels="showLabels"
      :mode="mode"
      :containerClass="containerClass"
      @select="selectTab"
      @update:query="query = $event"
      @update:cardSize="cardSize = $event"
      @toggle:fullWidth="fullWidth = !fullWidth"
      @toggle:labels="showLabels = !showLabels"
      @toggle:mode="toggleMode"
    />

    <main :class="[containerClass, 'py-6 md:py-8 space-y-4']">
      <div v-if="query" class="resultline">
        Showing <span class="font-semibold">{{ totalShown }}</span> of
        <span class="font-semibold">{{ totalAll }}</span> tags for
        <span class="resultchip">“{{ query }}”</span>
      </div>

      <GroupSection
        v-for="g in filteredGroups"
        :key="g.id"
        :title="g.title"
        :items="g.items"
        :showLabels="showLabels"
        :cardSize="cardSize"
        :mode="mode"
        @pick="handlePick"
      />

      <div v-if="filteredGroups.length === 0" class="empty">
        No matches. Try another search.
      </div>
    </main>

    <PromptBar
      v-if="mode === 'build'"
      :tags="selectedTags"
      :containerClass="containerClass"
      :copiedTick="builderCopiedTick"
      @remove="removeTag"
      @clear="clearTags"
      @copyAll="copyAll"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { NAV, CATALOG } from "./data/catalog";

import TopNav from "./components/TopNav.vue";
import GroupSection from "./components/GroupSection.vue";
import PromptBar from "./components/PromptBar.vue";

const nav = NAV;
const activeTab = ref(NAV[0]?.id || "heads");
const builderCopiedTick = ref(0);
const query = ref("");
const cardSize = ref(210);
const showLabels = ref(true);
const mode = ref("copy"); // "copy" | "build"

const selectedTags = ref([]);

const containerClass = computed(() => "container-pad");

const page = computed(
  () => CATALOG[activeTab.value] || CATALOG[nav[0]?.id] || CATALOG.heads,
);

const groups = computed(() => {
  const section = activeTab.value;
  return (page.value.groups || []).map((g) => ({
    ...g,
    items: (g.items || []).map((it) => ({ ...it, section })),
  }));
});

const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return groups.value;

  return groups.value
    .map((g) => ({
      ...g,
      items: (g.items || []).filter((it) =>
        (it.tag || "").toLowerCase().includes(q),
      ),
    }))
    .filter((g) => g.items.length);
});

const totalAll = computed(() =>
  groups.value.reduce((acc, g) => acc + (g.items?.length || 0), 0),
);
const totalShown = computed(() =>
  filteredGroups.value.reduce((acc, g) => acc + (g.items?.length || 0), 0),
);

function selectTab(id) {
  activeTab.value = id;
}

function toggleMode() {
  mode.value = mode.value === "build" ? "copy" : "build";
}

function handlePick(tag) {
  const t = (tag || "").trim();
  if (!t) return;

  if (mode.value === "build") {
    if (!selectedTags.value.includes(t)) selectedTags.value.push(t);
    return;
  }

  copyText(t);
}

function removeTag(tag) {
  selectedTags.value = selectedTags.value.filter((t) => t !== tag);
}

function clearTags() {
  selectedTags.value = [];
}

async function copyAll() {
  const txt = selectedTags.value.join(", ");
  if (!txt.trim()) return;

  const ok = await copyText(txt);
  if (ok) builderCopiedTick.value++;
}

async function copyText(text) {
  const t = (text || "").trim();
  if (!t) return false;

  try {
    await navigator.clipboard.writeText(t);
    return true;
  } catch {
    return false;
  }
}

/* ===== Persist UI preferences ===== */
const LS_KEY = "sd_tag_nav_prefs_v1";

onMounted(() => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);

    if (typeof p.query === "string") query.value = p.query;
    if (typeof p.cardSize === "number") cardSize.value = p.cardSize;
    if (typeof p.showLabels === "boolean") showLabels.value = p.showLabels;
    if (typeof p.mode === "string") mode.value = p.mode;
  } catch {}
});

watch([query, cardSize, showLabels, mode], () => {
  try {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({
        query: query.value,
        cardSize: cardSize.value,
        showLabels: showLabels.value,
        mode: mode.value,
      }),
    );
  } catch {}
});
</script>
