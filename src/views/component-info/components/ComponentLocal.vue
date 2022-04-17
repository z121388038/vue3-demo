<template>
  <el-card header="这是测试Props相关的组件">
    <el-alert
      description="注意 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如data、computed 等) 在 default 或 validator 函数中是不可用的。"
      type="success"
    />
    <div>这是组件的msg：{{ msg }}</div>
    <div>这是组件的age,传入的值必须大于10，小于20: {{ age }}</div>
    <div>组件文案的颜色是通过父组件的style改变的</div>
    <div>这些是非props的attr: {{ $.attrs }}</div>
    <div :="$attrs">
      不是在props定义的 attribute
      可以通过$.attrs获取到，并且这些属性默认添加到组件根节点的 attribute 上面
    </div>
    <div :="$attrs">
      组件添加 inheritAttrs: false，这样就可以让父组件的 attribute
      不添加到组件根节点的 attribute 上面了
    </div>
    <div :="$attrs">
      可以通过 :="$attrs" 把这些 attribute 添加到需要的标签上面
    </div>
    <div :="$attrs">
      如果一个组件存在多个根节点，默认也不会添加 attribute
      上面，需要手动绑定(:="$attrs")到需要的标签上面
    </div>
    <select :="$attrs" style="width: 150px">
      <option value="1">选项1</option>
      <option value="2">选项2</option>
      <option value="3">选项3</option>
    </select>
  </el-card>
</template>

<script>
export default {
  name: "ComponentLocal",
  inheritAttrs: false,
  props: {
    msg: {
      type: String,
      required: true,
    },
    age: {
      type: [Number, String],
      required: true,
      validator: (value) => value > 10 && value < 20,
    },
  },
};
</script>

<style scoped></style>
