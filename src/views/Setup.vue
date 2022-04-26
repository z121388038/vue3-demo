<template>
  <p>setup</p>
  <p>{{ filteredRepositories }}</p>
  <p>{{ repositoriesMatchingSearchQuery }}</p>
  <RepositoriesFilters></RepositoriesFilters>
  <RepositoriesSortBy></RepositoriesSortBy>
  <RepositoriesList></RepositoriesList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RepositoriesFilters from './components-setup/RepositoriesFilters.vue';
import RepositoriesSortBy from './components-setup/RepositoriesSortBy.vue';
import RepositoriesList from './components-setup/RepositoriesList.vue';

export default defineComponent({
  name: 'Setup',
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: String,
  },
});
</script>

<style scoped lang="scss"></style>
