<template>
  <div
    :style="{ backgroundImage: color, animationDuration: durationMs }"
    class="vue-gradation"
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "linear-gradient( 109.6deg, #FBE4E2 11.4%, #67A5DA 91.1% )"
    },
    duration: {
      type: Number,
      required: false,
      default: 15
    }
  },
  data: function() {
    return {
      durationMs: `${this.duration}s`
    };
  }
};
</script>
<style scoped>
.vue-gradation {
  animation: Gradient ease infinite;
  background-size: 400% 400%;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
