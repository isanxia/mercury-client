<template>
  <div class="home">
    <Tabs value="1">
      <TabPane label="技术" name="1">
        <Card v-for="item of list1" :key="item.id" :title="item.title">
          <p>{{item.content}}</p>
          <p>提问时间：{{item.createAt}} 提问者：{{item.createByName}}</p>
        </Card>
      </TabPane>
      <TabPane label="生活" name="2">
        <Card v-for="item of list2" :key="item.id" :title="item.title">
          <p>{{item.content}}</p>
          <p>提问时间：{{item.createAt}} 提问者：{{item.createByName}}</p>
        </Card>
      </TabPane>
      <TabPane label="八卦" name="3">
        <Card v-for="item of list3" :key="item.id" :title="item.title">
          <p>{{item.content}}</p>
          <p>提问时间：{{item.createAt}} 提问者：{{item.createByName}}</p>
        </Card>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      list1: [
        {
          id: 1,
          title: "aaaa",
          content: "bbbbbbbbbb",
          createAt: "2018-10-10",
          createByName: "rrrrr"
        }
      ],
      list2: [
        {
          id: 1,
          title: "aaaa",
          content: "bbbbbbbbbb",
          craeteAt: "2018-10-10",
          craeteByName: "rrrrr"
        }
      ],
      list3: [
        {
          id: 1,
          title: "aaaa",
          content: "bbbbbbbbbb",
          craeteAt: "2018-10-10",
          craeteByName: "rrrrr"
        }
      ]
    };
  }
};
</script>
