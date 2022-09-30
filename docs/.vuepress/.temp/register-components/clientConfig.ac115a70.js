import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Card", defineAsyncComponent(() => import("/Users/sf/Desktop/sh-vue-common/docs/.vuepress/components/Card.vue")))
  },
}
