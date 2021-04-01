<template>
  <div>
    <ul class="item-list">
      <li class="post" v-for="(item, index) in listItems" :key="index">
        <!-- Points -->
        <div class="points">{{ item.points || 0 }}</div>
        <!-- etc -->
        <div>
          <!-- Title Section -->
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }} </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`"> {{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by

            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url" class="link-text">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_LIST']),
    listItems() {
      return this.GET_LIST;
    },
  },
};
</script>

<style scoped>
.item-list {
  padding: 0px;
  margin: 0px;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.item-title {
  margin: 0px;
}

.link-text {
  color: #828282;
}
</style>
