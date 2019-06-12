<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/tom_test.jpg"
            alt="Heather"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Heather</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Not My Money Maker!</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="https://tom.imgix.net/krennic_profile.png?w=400&auto=format,compress"
            alt="Tom"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Tom</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Not My Money Maker!</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="https://tom.imgix.net/zeek%20trike.HEIC?w=400&auto=format,compress&fm=png"
            alt="Zeek"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Zeek</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Not My Money Maker!</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}
</style>
