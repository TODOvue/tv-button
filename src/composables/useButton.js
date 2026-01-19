import { computed, ref } from 'vue';

const useButton = (props, emit) => {
  const isHover = ref(false);

  const handleClick = () => {
    emit('clickButton');
    emit('click');
  };

  const manageHover = (value) => {
    isHover.value = value;
  };

  const _getDarkerColor = (colorHex) => {
    if (!colorHex || colorHex[0] !== '#') return colorHex;

    const rgb = colorHex.match(/\w\w/g).map((c) => parseInt(c, 16) * 0.9);
    return `#${rgb.map((c) => Math.floor(c).toString(16).padStart(2, '0')).join('')}`;
  };

  const buttonClasses = computed(() => ({
    'tv-btn-rounded': props.rounded,
    'tv-btn-full': props.full,
    'tv-btn-outlined': props.outlined,
    'tv-btn-text': props.text,
    'tv-btn-disabled': props.disabled || props.loading,
    'tv-btn-icon': props.type === 'icon',
    'tv-btn-icon-only': props.type === 'icon' && props.iconOnly,
    [`tv-btn-${props.size}`]: props.size && props.size !== 'md',
    [`tv-btn-${props.variant}`]: props.variant && props.variant !== 'default',
  }));

  const buttonStyleCustom = computed(() => {
    if (!props.customStyle) return {};

    const styles = {
      backgroundColor: props.customStyle.backgroundColor || 'transparent',
      color: props.customStyle.color || 'inherit',
      boxShadow: `0 0 5px ${props.customStyle.backgroundColor || 'transparent'}`,
    };

    if (props.outlined) {
      return {
        backgroundColor: 'transparent',
        border: `1px solid ${props.customStyle.backgroundColor}`,
        color: props.customStyle.backgroundColor,
        boxShadow: styles.boxShadow,
      };
    }

    return styles;
  });

  const buttonStyleHover = computed(() => {
    if (!props.customStyle) return {};

    return props.outlined
      ? {
        backgroundColor: props.customStyle.backgroundColor,
        color: props.customStyle.color,
      }
      : {
        backgroundColor: _getDarkerColor(props.customStyle.backgroundColor),
        boxShadow: 'none',
      };
  });

  return {
    isHover,
    handleClick,
    manageHover,
    buttonClasses,
    buttonStyleCustom,
    buttonStyleHover,
  };
};

export default useButton;
