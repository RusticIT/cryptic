<template>
  <header class="shadow">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Cryptic</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link 
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-blue-300 hover:text-white mr-4" 
            >
              {{ l.title }}
            </router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
// import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",
  // components: { PxIcon }
  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'xrp' } }
        }
      ]
    }
  }
};
</script>
