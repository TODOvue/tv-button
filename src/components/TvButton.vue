<script setup>
import { computed, defineAsyncComponent } from 'vue';
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
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  rounded: Boolean,
  disabled: Boolean,
  outlined: Boolean,
  loading: Boolean,
  iconOnly: Boolean,
  full: Boolean,
  text: Boolean,
  type: {
    type: String,
    default: 'button',
  },
  ariaLabel: String,
  to: [String, Object],
  href: String,
  target: String,
  rel: String,
});


const icons = import.meta.glob("../assets/icons/*.svg", { query: "?raw", import: "default" });
const emit = defineEmits(['clickButton', 'click']);

const effectiveIcon = computed(() => {
  if (props.icon) return props.icon;
  if (props.target === '_blank') return 'external-link';
  return null;
});

const IconComponent = computed(() => {
  if (!effectiveIcon.value) return null;
  const iconPath = `../assets/icons/${effectiveIcon.value}.svg`;
  if (!icons[iconPath]) return null;

  return defineAsyncComponent(async () => {
    const iconContent = await icons[iconPath]();
    return {
      template: `<span class="tv-icon-svg" v-html="content"></span>`,
      setup() {
        return { content: iconContent }
      }
    }
  });
});

const SpinnerComponent = defineAsyncComponent(async () => {
  const iconPath = '../assets/icons/loading.svg';
  const iconContent = await icons[iconPath]();
  return {
    template: `<span class="tv-spinner" v-html="content"></span>`,
    setup() {
      return { content: iconContent }
    }
  }
});

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

const isLink = computed(() => !!(props.href || props.to));

const componentTag = computed(() => {
  if (props.to) return 'RouterLink';
  if (props.href) return 'a';
  return 'button';
});
</script>

<template>
  <component
    :is="componentTag"
    :href="href"
    :to="to"
    :target="target"
    :rel="rel"
    :aria-label="ariaLabel"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :style="buttonStyles"
    :type="!isLink ? type : undefined"
    @click="handleClick"
    @mouseleave="manageHover(false)"
    @mouseover="manageHover(true)"
    class="tv-btn"
  >
    <span class="tv-btn-content">
      <Suspense v-if="loading">
        <SpinnerComponent />
      </Suspense>
      <template v-else>
        <Suspense v-if="effectiveIcon && iconPosition === 'left'">
           <IconComponent class="tv-icon icon-left" />
        </Suspense>

        <span v-if="!iconOnly" class="tv-btn-text">
          <template v-if="buttonText">{{ buttonText }}</template>
          <slot v-else></slot>
        </span>

        <Suspense v-if="effectiveIcon && iconPosition === 'right'">
          <IconComponent class="tv-icon icon-right" />
        </Suspense>
      </template>
    </span>
  </component>
</template>

<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.tv-spinner svg {
  animation: spin 1s linear infinite;
}
a.tv-btn {
  text-decoration: none;
}
</style>
