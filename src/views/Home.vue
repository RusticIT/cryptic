<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" @sort="sortBy" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/services/api";

export default {
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },

  methods: {
    sortBy({ field, reverse }) {
      this.assets.sort((a, b) => a[field] > b[field]);
      if (reverse) {
        this.assets.reverse();
      }
    },
  },

  async created() {
    this.isLoading = true;
    this.assets = await api.getAssets();
    this.isLoading = false;
  },
};
</script>
