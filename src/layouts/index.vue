<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
	<ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import { computed, type Component } from "vue";
import { GlobalStore } from "@/stores";
import ThemeDrawer from "@/layouts/components/ThemeDrawer/index.vue";
import LayoutVertical from "@/layouts/LayoutVertical/index.vue";
import LayoutClassic from "@/layouts/LayoutClassic/index.vue";
import LayoutTransverse from "@/layouts/LayoutTransverse/index.vue";
import LayoutColumns from "@/layouts/LayoutColumns/index.vue";

const LayoutComponents: { [key: string]: Component } = {
	vertical: LayoutVertical,
	classic: LayoutClassic,
	transverse: LayoutTransverse,
	columns: LayoutColumns
};

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
