<template>
    <div>
        <ContentDoc v-slot="{ doc }">
            <article class="prose lg:prose-xl">
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>