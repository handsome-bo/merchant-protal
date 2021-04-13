<template>
  <div>
    <div class="title-top">修改帳戶資料</div>
    <div class="wrapper common-bg">
      <div class="text-center role-account">{{ member.role }}</div>
      <div class="text-center role-account">{{ member.account }}</div>
      <div class="form" v-if="!isUpdate">
        <el-row>
          <el-col :span="12">
            {{ member.name }}
          </el-col>
          <el-col :span="12">
            {{ member.nickName }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            {{ member.gender == "1" ? "先生" : "女士" }}
          </el-col>

          <el-col :span="12">
            <el-col :span="8">
              {{ member.phonePrefix1 == "1" ? "+852" : "+853" }}
            </el-col>
            <el-col :span="8">
              {{ member.phoneNumber1 }}
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            {{ member.position }}
          </el-col>
          <el-col :span="12">
            <el-col :span="8">
              {{ member.phonePrefix2 == "1" ? "+852" : "+853" }}
            </el-col>
            <el-col :span="8">
              {{ member.phoneNumber2 }}
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <div :span="24" class="term">
            <input
              type="radio"
              class="radio"
              v-model="member.isReceiveEmail"
              disabled
            />
            是否以電郵接收電子禮券使用報告
          </div>
        </el-row>
      </div>
      <div class="form" v-else>
        <el-row>
          <el-col :span="12">
            <input class="input-text" v-model="member.name" />
          </el-col>
          <el-col :span="12">
            <input class="input-text" v-model="member.nickName" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <select
              class="input-text"
              v-model="member.gender"
              style="width: 292px"
            >
              <option value="1">先生</option>
              <option value="2">女士</option>
            </select>
          </el-col>

          <el-col :span="12">
            <el-col :span="8">
              <select class="select-short" v-model="member.phonePrefix1">
                <option value="1">+852</option>
                <option value="2">+853</option>
              </select>
            </el-col>
            <el-col :span="8">
              <input class="input-text-short" v-model="member.phoneNumber1" />
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <input class="input-text" v-model="member.position" />
          </el-col>
          <el-col :span="12">
            <el-col :span="8">
              <select class="select-short" v-model="member.phonePrefix2">
                <option value="1">+852</option>
                <option value="2">+853</option>
              </select>
            </el-col>
            <el-col :span="8">
              <input class="input-text-short" v-model="member.phoneNumber2" />
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <div :span="24" class="term">
            <input type="radio" class="radio" />
            是否以電郵接收電子禮券使用報告
          </div>
        </el-row>
      </div>
    </div>
    <div class="btn-bottom">
      <el-button
        type="danger"
        class="btn-red"
        v-if="!isUpdate"
        @click="isUpdate = true"
        >修改</el-button
      >
      <el-button type="danger" class="btn-red" @click="isUpdate = false" v-else>儲存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      options: [
        {
          value: "0",
          label: "先生",
        },
        {
          value: "1",
          label: "女士",
        },
      ],
      member: {
        role: "Super Account",
        account: "siuming@elements.com",
        name: "Siu Ming",
        nickName: "Chan",
        gender: "1",
        phonePrefix1: "1",
        phonePrefix2: "2",
        phoneNumber1: "2000 1234",
        phoneNumber2: "9123 4567",
        position: "經理",
        isReceiveEmail: false,
      },
      isUpdate: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  width: 600px;
  border-radius: 10px;
  padding: 15px;
  margin: 15px auto;
}
.role-account {
  font-size: 20px;
  margin-bottom: 15px;
}
.input-text,
.select-short,
.input-text-short {
  height: 50px;
  width: 279px;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  font-size: 20px;
  padding-left: 12px;
}
.select-short {
  width: 100px;
}
.input-text-short {
  width: 167px;
  margin-left: 15px;
}
.term {
  font-size: 20px;
  line-height: 27px;
}
.el-row {
  margin: 15px 0;
}
.radio {
  height: 24px;
  width: 24px;
  background-color: #c77900;
}
.btn-bottom {
  margin: 40px auto;
  text-align: center;
}
</style>