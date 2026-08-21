<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
        <li class="nav-item dropdown show">
        <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="true">
          <i :class="flagicon"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right show" style="left: inherit; right: 0px;">
          <div class="dropdown-divider"></div>
          <a @click="switchLanguage('kh')" href="#" class="dropdown-item">
            <i class="fi fi-kh mr-2"></i> Khmer
          </a>
          <div class="dropdown-divider"></div>
          <a @click="switchLanguage('en')" href="#" class="dropdown-item">
            <i class="fi fi-us mr-2"></i> English
          </a>
          <div class="dropdown-divider"></div>
        </div>
      </li>
            <li class="nav-item">
                <a @click="signOut" class="nav-link" role="button">
                    <i class="fas fa-sign-out-alt text-danger"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
const router = useRouter();

async function signOut() {
    await Swal.fire({
        title: 'Are you sure?',
        text: "You will be signed out from the system!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, sign me out!'
    }).then((result) => {
        if (result.isConfirmed) {
            return router.push({ name: 'SignOut' });
        }
    });
}

import { useI18n } from 'vue-i18n'
import { computed } from 'vue';

const flagicon=computed(()=>{
 const lang=locale.value;
 return getFlagIconClass(lang);
});

function getFlagIconClass(lang) {
    if(lang==='kh'){
        return "fi fi-kh"
    }else if (lang==='en'){
        return "fi fi-us"
    }else{
        return "";
    }
    
}
const { locale, availableLocales } = useI18n()
function switchLanguage(lang){
    localStorage.setItem("language",lang)
    locale.value=lang;
}
</script>