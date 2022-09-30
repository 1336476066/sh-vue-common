import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Card", defineAsyncComponent(() => import("/Users/sf/Desktop/project/demo/docs/.vuepress/components/Card.vue")))
  },
}
