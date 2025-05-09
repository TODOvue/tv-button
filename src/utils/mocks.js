import Default from "./demos/default.vue?raw";
import DefaultProps from "./demos/defaultProps.vue?raw";
import CustomStyle from "./demos/customStyle.vue?raw";
import CustomStyleOutlined from "./demos/customStyleOutlined.vue?raw";
import Small from "./demos/small.vue?raw";
import Rounded from "./demos/rounded.vue?raw";
import Full from "./demos/full.vue?raw";
import Outlined from "./demos/outlined.vue?raw";
import Large from "./demos/large.vue?raw";
import Success from "./demos/success.vue?raw";
import Info from "./demos/info.vue?raw";
import Warning from "./demos/warning.vue?raw";
import Error from "./demos/error.vue?raw";
import Disabled from "./demos/disabled.vue?raw";
import Text from "./demos/text.vue?raw";
import Icon from "./demos/icon.vue?raw";
import IconLeft from "./demos/iconLeft.vue?raw";
import TypeIcon from "./demos/typeIcon.vue?raw";
import TypeIconOutlinedRemove from "./demos/typeIconOutlinedRemove.vue?raw";
import TypeIconOutlinedCustom from "./demos/typeIconOutlinedCustom.vue?raw";
import Various1 from "./demos/various1.vue?raw";
import Various2 from "./demos/various2.vue?raw";
import Various3 from "./demos/various3.vue?raw";
import Various4 from "./demos/various4.vue?raw";
import Various5 from "./demos/various5.vue?raw";

const clickHandler = () => {
  console.log("clicked");
};

export const demos = [
  {
    id: 1,
    title: "Default",
    propsData: { buttonText: "Default Buton Large", onClick: clickHandler, icon: 'alert' },
    description: "Default button with default props.",
    html: Default,
  },
  {
    id: 1,
    title: "Default",
    propsData: { buttonText: "Default", onClick: clickHandler },
    description: "Default button with default props.",
    html: Default,
  },
  {
    id: 2,
    title: "Default (The text is sent by props)",
    propsData: { buttonText: "Default Props" },
    description: "Default button with default props.",
    html: DefaultProps,
  },
  {
    id: 3,
    title: "Custom Style",
    propsData: {
      buttonText: "Custom Style",
      customStyle: { backgroundColor: "#0f2e5b", color: "#fff" },
      onClick: clickHandler,
    },
    description: "Default button with custom style.",
    html: CustomStyle,
  },
  {
    id: 4,
    title: "Small",
    propsData: { buttonText: "Small", small: true, onClick: clickHandler },
    description: "Default button with small size.",
    html: Small,
  },
  {
    id: 5,
    title: "Rounded",
    propsData: {
      buttonText: "Rounded",
      isRounded: true,
      onClick: clickHandler,
    },
    description: "Default button with rounded corners.",
    html: Rounded,
  },
  {
    id: 6,
    title: "Full",
    propsData: { buttonText: "Full", full: true, onClick: clickHandler },
    description: "Default button with full width.",
    html: Full,
  },
  {
    id: 7,
    title: "Outlined",
    propsData: {
      buttonText: "Outlined",
      isOutlined: true,
      onClick: clickHandler,
    },
    description: "Default button with outlined style.",
    html: Outlined,
  },
  {
    id: 8,
    title: "Custom Style When is Outlined",
    propsData: {
      buttonText: "Is outlined",
      customStyle: { backgroundColor: "#5f31b7", color: "#fff" },
      outlined: true,
      onClick: clickHandler,
    },
    description: "Default button with custom style when is outlined.",
    html: CustomStyleOutlined,
  },
  {
    id: 9,
    title: "Large",
    propsData: { buttonText: "Large", large: true, onClick: clickHandler },
    description: "Default button with large size.",
    html: Large,
  },
  {
    id: 10,
    title: "Success",
    propsData: {
      buttonText: "Success",
      isSuccess: true,
      onClick: clickHandler,
    },
    description: "Default button with success style.",
    html:Success,
  },
  {
    id: 11,
    title: "Info",
    propsData: { buttonText: "Info", info: true, onClick: clickHandler },
    description: "Default button with info style.",
    html: Info,
  },
  {
    id: 12,
    title: "Warning",
    propsData: {
      buttonText: "Warning",
      isWarning: true,
      onClick: clickHandler,
    },
    description: "Default button with warning style.",
    html: Warning,
  },
  {
    id: 13,
    title: "Error",
    propsData: { buttonText: "Error", error: true, onClick: clickHandler },
    description: "Default button with error style.",
    html: Error,
  },
  {
    id: 14,
    title: "Disabled",
    propsData: {
      buttonText: "Disabled",
      isDisabled: true,
      onClick: clickHandler,
    },
    description: "Default button with disabled style.",
    html: Disabled,
  },
  {
    id: 15,
    title: "Text",
    propsData: {
      buttonText: "Text",
      text: true,
      onClick: clickHandler,
      customStyle: {
        color: "#ffffff",
      },
    },
    description: "Default button with text style.",
    html: Text,
  },
  {
    id: 16,
    title: "Icon (Edit) - Position: right (is default)",
    propsData: {
      buttonText: "Icon",
      icon: "edit",
      onClick: clickHandler
    },
    description: "Default button with icon on the right.",
    html: Icon,
  },
  {
    id: 17,
    title: "Icon (Plus) - Position: left",
    propsData: {
      buttonText: "Icon",
      icon: "plus",
      iconPosition: "left",
      onClick: clickHandler,
    },
    description: "Default button with icon on the left.",
    html: IconLeft,
  },
  {
    id: 18,
    title: "Type icon (Help)",
    propsData: {
      type: 'icon',
      icon: "help",
      onClick: clickHandler,
    },
    description: "Default button with type icon.",
    html: TypeIcon,
  },
  {
    id: 26,
    title: "Type icon outlined (remove)",
    propsData: {
      type: 'icon',
      icon: "remove",
      isOutlined: true,
      onClick: clickHandler,
    },
    description: "Default button with type icon outlined.",
    html: TypeIconOutlinedRemove,
  },
  {
    id: 25,
    title: "Type icon Outlined with Custom Style (edit)",
    propsData: {
      type: 'icon',
      icon: "edit",
      isOutlined: true,
      onClick: clickHandler,
      customStyle: {
        backgroundColor: "#5f31b7",
        color: "#fff",
      },
    },
    description: "Default button with type icon outlined and custom style.",
    html: TypeIconOutlinedCustom,
  },
  {
    id: 24,
    title: "Type icon outlined (TODOvue)",
    propsData: {
      type: 'icon',
      icon: "todovue",
      isOutlined: true,
      onClick: clickHandler,
    },
    description: "Default button with type icon outlined.",
    html: TypeIcon,
  },
  {
    id: 19,
    title: "Various props 1",
    propsData: {
      buttonText: "Press me",
      isSmall: true,
      isRounded: true,
      isOutlined: true,
      onClick: clickHandler,
    },
    description: "Default button with various props.",
    html: Various1,
  },
  {
    id: 20,
    title: "Various props 2",
    propsData: {
      buttonText: "Press me",
      isLarge: true,
      isInfo: true,
      onClick: clickHandler,
    },
    description: "Default button with various props.",
    html: Various2,
  },
  {
    id: 21,
    title: "Various props 3",
    propsData: {
      buttonText: "Press me",
      isFull: true,
      isWarning: true,
      isRounded: true,
      onClick: clickHandler,
    },
    description: "Default button with various props.",
    html: Various3,
  },
  {
    id: 22,
    title: "Various props 4",
    propsData: {
      buttonText: "Press me",
      isSuccess: true,
      isDisabled: true,
      onClick: clickHandler,
    },
    description: "Default button with various props.",
    html: Various4,
  },
  {
    id: 23,
    title: "Various props 5",
    propsData: {
      buttonText: "Press me",
      isRounded: true,
      customStyle: {
        backgroundColor: "#1144b3",
        color: "#ffffff",
      },
      onClick: clickHandler,
    },
    description: "Default button with various props.",
    html: Various5,
  },
];
