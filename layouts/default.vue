<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex justify-center py-2 h-28">
      <nuxt-link to="/" class="flex gap-2 items-center">
        <img src="/img/logo.svg" alt="Logo" class="size-24" />
        <div class="font-bold text-xl">sustAInableEducation</div>
      </nuxt-link>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer>
      <hr class="h-0.5 bg-primary-200" />
      <div class="p-12 flex flex-col items-center gap-8">
        <div class="flex gap-4">
          <nuxt-link
            to="https://github.com/bedlinger/sustAInableEducation"
            target="_blank"
          >
            <MdiIcon icon="mdiGithub" class="size-10" />
          </nuxt-link>
          <nuxt-link to="https://www.tgm.ac.at/" target="_blank">
            <img src="/img/tgm-logo.png" alt="" class="h-10" />
          </nuxt-link>
        </div>
        <div class="flex gap-1">
          <span>©{{ new Date().getFullYear() }} sustAInableEducation</span>
          <span>|</span>
          <span
            ><nuxt-link to="/impressum" class="link">Impressum</nuxt-link></span
          >
        </div>
        <div class="flex gap-1">
          <Button as="router-link" to="/" text class="!text-xl">
            Zurück nach oben
            <MdiIcon icon="mdiArrowUpThick" />
          </Button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style lang="scss" scoped></style>
