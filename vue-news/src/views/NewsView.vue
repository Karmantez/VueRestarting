<template>
  <div><ListItem /></div>
</template>

<script>
import ListMixin from '@/mixins/ListMixin';
import ListItem from '@/components/ListItem.vue';

export default {
  components: { ListItem },
  mixins: [ListMixin],
};
</script>
