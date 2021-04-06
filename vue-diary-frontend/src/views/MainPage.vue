<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>

      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchPosts } from '@/api';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
};
</script>
