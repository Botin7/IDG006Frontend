<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <RouterLink to="/" class="brand-link">
            <span class="brand-text font-weight-light">Chat System</span>
        </RouterLink>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../../../public/img/image.jpeg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <router-link :to="{ name: 'Profile' }" class="d-block">{{ userStore.name }}</router-link>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Dashboard' }" active-class="active" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                            </p>
                        </RouterLink>
                    </li>
                </ul>
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'Test' }" active-class="active" class="nav-link">
                          <i class='nav-icon fas fa-pen-alt'></i>
                            <p>
                                Test
                            </p>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from "@/stores/users";
const userStore = useUserStore();
</script>


 