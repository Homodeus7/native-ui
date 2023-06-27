<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  outlined: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: "medium",
  },
});
const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>

<template>
  <button
    :class="[
      'button',
      `button_${color}`,
      { button_rounded: rounded },
      { button_outlined: outlined },
      { button_icon: icon },
      { button_tiny: size === 'tiny' },
      { button_small: size === 'small' },
      { button_medium: size === 'medium' },
      { button_large: size === 'large' },
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    </span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 14px;
  height: 34px;
  color: var(--text-color);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.8s var(--n-bezier), background-color 0.8s var(--n-bezier),
    opacity 0.8s var(--n-bezier), border-color 0.8s var(--n-bezier);

  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
      border: 1px solid var(--primary-hover);
    }
    &:enabled:active {
      background: var(--primary-pressed);
    }
  }
  &_second {
    background: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
      border: 1px solid var(--second-hover);
    }
    &:enabled:active {
      background: var(--second-pressed);
    }
  }
  &_success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
      border: 1px solid var(--success-hover);
    }
    &:enabled:active {
      background: var(--success-pressed);
    }
  }
  &_info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
      border: 1px solid var(--info-hover);
    }
    &:enabled:active {
      background: var(--info-pressed);
    }
  }
  &_warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
      border: 1px solid var(--warning-hover);
    }
    &:enabled:active {
      background: var(--warning-pressed);
    }
  }
  &_danger {
    background: var(--danger);
    border: 1px solid var(--danger);
    &:enabled:hover {
      background: var(--danger-hover);
      border: 1px solid var(--danger-hover);
    }
    &:enabled:active {
      background: var(--danger-pressed);
    }
  }
  &:disabled {
    color: rgba(51, 54, 57);
    background: #0000;
    opacity: 0.5;
    cursor: not-allowed;
    border: 1px solid rgb(224, 224, 230);
  }
  &_rounded {
    border-radius: 34px;
  }
  &_outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &_tiny {
    font-size: 12px;
    height: 22px;
    padding: 0 6px;
  }
  &_small {
    height: 28px;
    padding: 0 10px;
  }
  &_medium {
    height: 34px;
    padding: 0 14px;
  }
  &_large {
    height: 40px;
    padding: 0 18px;
  }
  &_icon {
    height: 34px;
    width: 34px;
    border: none;
    border-radius: 50%;
    padding: 0;
  }
}
</style>
