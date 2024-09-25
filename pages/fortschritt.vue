<template>
    <div class="content-container">
        <h1 class="h1">Fortschritts&shy;berichte</h1>
        <div class="flex flex-col gap-4">
            <nuxt-link v-for="report in filteredReports" :to="report._path">
                <Card>
                    <template #title>
                        <div class="flex justify-between">
                            <span class="font-bold">{{ report.title }}</span>
                            <MdiIcon icon="mdiArrowRight" />
                        </div>
                    </template>
                    <template #subtitle>{{ report.date }}</template>
                    <template #content>{{ report.description }}</template>
                </Card>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
import Card from 'primevue/card'

const progressReports = await queryContent('fortschritt').find()
const filteredReports = computed(() => progressReports.toSorted((a, b) => {
    try {
        const [d1, m1, y1] = a.date.split('.')
        const [d2, m2, y2] = b.date.split('.')
        return new Date(y2, m2-1, d2) - new Date(y1, m1-1, d1)
    } catch(error) {
        return 0
    }
}))
</script>

<style lang="scss" scoped>

</style>