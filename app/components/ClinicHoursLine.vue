<script setup lang="ts">
import { splitHoursLine } from '~/utils/format-hours-line'

const props = defineProps<{
  text: string
}>()

const parsed = computed(() => splitHoursLine(props.text))
</script>

<template>
  <span v-if="parsed">
    <span class="font-semibold text-zinc-950">{{ parsed.days }}</span><span v-if="parsed.time">: {{ parsed.time }}</span>
  </span>
  <span v-else>{{ text }}</span>
</template>
