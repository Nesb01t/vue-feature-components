import type {Preview} from "@storybook/vue3";
import {setup} from '@storybook/vue3'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';

setup((app) => {
  app.use(ElementPlus)
})

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
