<template>
  <Layout>
      <template v-slot:head>
          menu head
      </template>
      <template v-slot:left>
          <Aside></Aside>
      </template>
      <template v-slot:main>
          main
      </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue"
import Aside from "../components/Aside.vue"
export default {
    components: {
        Layout,
        Aside
    }
}
</script>

<style>

</style>