import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Card", defineAsyncComponent(() => import("/Users/sf/Desktop/test/demo/docs/.vuepress/components/Card.vue")))
  },
}
