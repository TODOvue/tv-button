<script setup>
import { computed } from 'vue';
import useButton from '../composables/useButton';

const props = defineProps({
  buttonText: String,
  customStyle: Object,
  icon: String,
  iconColor: {
    type: String,
    default: 'white',
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
  isCircle: Boolean,
  isDisabled: Boolean,
  isError: Boolean,
  isFull: Boolean,
  isInfo: Boolean,
  isLarge: Boolean,
  isOutlined: Boolean,
  isRounded: Boolean,
  isSmall: Boolean,
  isSuccess: Boolean,
  isText: Boolean,
  isWarning: Boolean,
  type: {
    type: String,
    default: 'button',
  },
  ariaLabel: String,
  circle: Boolean,
  disabled: Boolean,
  error: Boolean,
  full: Boolean,
  info: Boolean,
  large: Boolean,
  outlined: Boolean,
  rounded: Boolean,
  small: Boolean,
  success: Boolean,
  text: Boolean,
  warning: Boolean,
  iconOnly: Boolean,
});

const icons = import.meta.glob("../assets/icons/*.svg", { eager: true, query: "?raw", import: "default" });
const emit = defineEmits(['clickButton', 'click']);

const iconContent = computed(() => icons[`../assets/icons/${props.icon}.svg`] || "");

const {
  buttonClasses,
  buttonStyleCustom,
  buttonStyleHover,
  isHover,

  handleClick,
  manageHover,
} = useButton(props, emit);

const buttonStyles = computed(() => ({
  ...buttonStyleCustom.value,
  ...(isHover.value ? buttonStyleHover.value : {}),
}));
</script>

<template>
  <button
    :aria-label="ariaLabel"
    :class="buttonClasses"
    :disabled="isDisabled"
    :role="type"
    :style="buttonStyles"
    :type="type"
    @click="handleClick"
    @mouseleave="manageHover(false)"
    @mouseover="manageHover(true)"
    class="tv-btn"
  >
    <span class="tv-btn-content">
      <span
        v-if="icon && iconPosition === 'left'"
        class="tv-icon icon-left"
        v-html="iconContent"
      />
      <span class="tv-btn-text">
        <template v-if="buttonText">{{ buttonText }}</template>
        <slot v-else></slot>
      </span>
      <span
        v-if="icon && iconPosition === 'right'"
        class="tv-icon icon-right"
        v-html="iconContent"
      />
    </span>
  </button>
</template>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
