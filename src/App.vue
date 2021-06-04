<template lang="pug">
div#wrapper
  aw-header

  div(:class="{'container': !fullContainer, 'container-fluid': fullContainer}").px-0.px-md-3
    div.aw-container.my-3.p-3
      error-boundary
        user-satisfaction-poll
        new-release-notification(v-if="isNewReleaseCheckEnabled")
        router-view

</template>

<script>

export default {
  data: function () {
    return {
      activityViews: [],
      info: {},
      isNewReleaseCheckEnabled: !process.env.VUE_APP_ON_ANDROID,
    };
  },

  computed: {
    fullContainer() {
      return this.$route.meta.fullContainer;
    },
  },

  mounted: async function () {
    this.$aw.getInfo().then(
      info => {
        this.info = info;
      },
      e => {
        console.error('Unable to connect: ', e);
        this.info = {};
      }
    );
  },
};
</script>
