<template>
  <div class="card content-box">
    <span class="text"> 图标选择器 🍓🍇🍈🍉</span>
    <SelectIcon v-model:modelValue="modelValue" title="请选择图标" placeholder="搜索图标" :showIconName="true" />
    <el-descriptions title="配置项 📚" :column="1" border>
      <el-descriptions-item label="size"> 输入框尺寸："default" | "small" | "large" ，默认 default</el-descriptions-item>
      <el-descriptions-item label="disabled"> 是否禁用，默认为 false </el-descriptions-item>
      <el-descriptions-item label="title"> 标题 </el-descriptions-item>
      <el-descriptions-item label="placement">
        弹窗位置： top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right |
        right-start | right-end , 默认 bottom
      </el-descriptions-item>
      <el-descriptions-item label="modelValue">
        双向绑定的icon值，使用示例：v-model:modelValue="modelValue"
      </el-descriptions-item>
      <el-descriptions-item label="showIconName"> 是否显示图标名称，默认为 false </el-descriptions-item>
      <el-descriptions-item label="placeholder">输入框占位文本</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts" name="selectIcon">
import { ref } from "vue";
import SelectIcon from "@/components/SelectIcon/index.vue";
// import { GlobalStore } from "@/stores";
// const globalStore = GlobalStore();
// const themeConfig = computed(() => globalStore.themeConfig);

const modelValue = ref("");

// // 监听布局变化，在 body 上添加相对应的 layout class
// watch(
// 	() => themeConfig.value.isCollapse,
// 	() => {
// 		console.log("themeConfig.value.isCollapse", themeConfig.value.isCollapse);
// 	},
// 	{ immediate: true }
// );
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
