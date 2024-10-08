<template>
  <div class="content-container">
    <ContentDoc v-slot="{ doc }">
      <div class="flex justify-between items-center mb-12 gap-4">
        <Button as="router-link" to="/#fortschritt" outlined>
          <MdiIcon icon="mdiArrowLeft" />
          Zur Übersicht
        </Button>
        <span class="text-slate-500 text-right"
          >Fortschrittsbericht vom {{ doc.date }}</span
        >
      </div>
      <article class="prose lg:prose-xl prose-a:no-underline">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style lang="scss" scoped></style>
