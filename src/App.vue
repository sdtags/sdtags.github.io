<template>
  <div>
    <TopNav :tabs="nav" :active="activeTab" @select="selectTab" />

    <main class="container-max py-6 md:py-8 space-y-4">
      <GroupSection
        v-for="g in groups"
        :key="g.id"
        :title="g.title"
        :items="g.items"
        :showLabels="true"
        @copy="copyText"
      />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { NAV, CATALOG } from "./data/catalog";

import TopNav from "./components/TopNav.vue";
import GroupSection from "./components/GroupSection.vue";

const nav = NAV;
const activeTab = ref(NAV[0]?.id || "heads");

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

function selectTab(id) {
  activeTab.value = id;
}

async function copyText(text) {
  const t = (text || "").trim();
  if (!t) return;
  try {
    await navigator.clipboard.writeText(t);
  } catch {}
}
</script>
