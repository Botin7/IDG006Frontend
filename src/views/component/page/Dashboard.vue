<template>
    <Navbar />
    <Sidebar/>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark" style="display: none;">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <Content />
  <!-- /.control-sidebar -->
   <Footer />


<div id="sidebar-overlay"></div><div></div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../include/navbar.vue';
import Sidebar from '../include/sidebar.vue';
import Footer from '../include/footer.vue';
import Content from '../include/content.vue';
const router = useRouter()

function goBack() {
    // router.back(); // option 1
    router.go(-1); // option 2
}

function goForward() {
    // router.forward(); // option 1
    router.go(1); // option 2
}

</script>