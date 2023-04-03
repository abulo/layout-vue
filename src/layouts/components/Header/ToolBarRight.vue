<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<AssemblySize id="assemblySize" />
			<Language id="language" />
			<SearchMenu id="searchMenu" />
			<ThemeSetting id="themeSetting" />
			<Message id="message" />
			<Fullscreen id="fullscreen" />
		</div>
		<span class="username">Geeker</span>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
import SearchMenu from "@/layouts/components/Header/components/SearchMenu.vue";
import Fullscreen from "@/layouts/components/Header/components/Fullscreen.vue";
import Message from "@/layouts/components/Header/components/Message.vue";
import Language from "@/layouts/components/Header/components/Language.vue";
import ThemeSetting from "@/layouts/components/Header/components/ThemeSetting.vue";
import AssemblySize from "@/layouts/components/Header/components/AssemblySize.vue";
import Avatar from "@/layouts/components/Header/components/Avatar.vue";
</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px 0 0;
	.header-icon {
		display: flex;
		align-items: center;
		& > * {
			margin-left: 21px;
		}
	}
	.username {
		margin: 0 20px;
		font-size: 15px;
	}
}
</style>
