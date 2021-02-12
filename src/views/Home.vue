<template>
  <div>
    <px-assets-table :assets="assets" @sort="sortBy"/>
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
    };
  },

  methods: {
    sortBy({field, reverse}) {
      this.assets.sort((a, b) => a[field] > b[field]);
      if (reverse) {
        this.assets.reverse();
      }
    },
  },

  async created() {
    this.assets = await api.getAssets();
  },
};
</script>
