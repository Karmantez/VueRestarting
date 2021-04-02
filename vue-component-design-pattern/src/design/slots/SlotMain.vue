<template>
  <div>
    <h1>Slot Pattern</h1>
    <!-- 
        slot을 쓰게되면 추가사항을 유연하게 대처할 수 있다.
        💡 확장성이 높다.
    -->
    <ul>
      <Item>아이템 1</Item>
      <Item>아이템 2 <button>click me</button></Item>
      <Item
        >아이템 3
        <div>hello</div>
      </Item>
      <Item>
        <div style="color: blue; font-size: 20px">아이템 4</div>
      </Item>
      <Item>아이템 5</Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item';

export default {
  components: {
    Item,
  },
};
</script>

<style></style>
