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
    'tv-btn-rounded': props.isRounded || props.rounded,
    'tv-btn-full': props.isFull || props.full,
    'tv-btn-outlined': props.isOutlined || props.outlined,
    'tv-btn-small': props.isSmall || props.small,
    'tv-btn-large': props.isLarge || props.large,
    'tv-btn-success': props.isSuccess || props.success,
    'tv-btn-info': props.isInfo || props.info,
    'tv-btn-warning': props.isWarning || props.warning,
    'tv-btn-error': props.isError || props.error,
    'tv-btn-disabled': props.isDisabled || props.disabled || props.loading || props.isLoading,
    'tv-btn-text': props.isText || props.text,
    'tv-btn-icon': props.type === 'icon',
    'tv-btn-icon-only':  props.type === 'icon' && props.iconOnly,
  }));
  
  const buttonStyleCustom = computed(() => {
    if (!props.customStyle) return {};
    
    const styles = {
      backgroundColor: props.customStyle.backgroundColor || 'transparent',
      color: props.customStyle.color || 'inherit',
      boxShadow: `0 0 5px ${props.customStyle.backgroundColor || 'transparent'}`,
    };
    
    if (props.isOutlined || props.outlined) {
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
    
    return props.isOutlined || props.outlined
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
