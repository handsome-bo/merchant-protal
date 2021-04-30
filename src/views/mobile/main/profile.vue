<template>
  <div>
    <div class="title-top">{{ $t("profile.title") }}</div>
    <div class="wrapper common-bg" v-loading="loading">
      <div class="text-center role-account">
        {{ $store.state.userInfo.contacttype }}
      </div>
      <div class="text-center role-account">
        {{ $store.state.userInfo.email }}
      </div>
      <div class="form" v-if="!isUpdate">
        <el-row>
          <el-col :span="12">
            {{ isEn ? member.firstname : member.firstnametc }}
          </el-col>
          <el-col :span="12">
            {{ isEn ? member.lastname : member.lastnametc }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            {{ member.salutation == "915240000" ? "先生" : "女士" }}
          </el-col>

          <el-col :span="12">
            <el-col :span="8">
              {{ member.phonePrefix1 == "1" ? "+852" : "+853" }}
            </el-col>
            <el-col :span="8">
              {{ member.mobilenumber }}
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            {{ isEn ? member.title : member.titletc }}
          </el-col>
          <el-col :span="12">
            <el-col :span="8">
              {{ member.phonePrefix2 == "1" ? "+852" : "+853" }}
            </el-col>
            <el-col :span="8">
              {{ member.mobilenumber }}
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <div :span="24" class="term">
            <input
              type="radio"
              class="radio"
              value="true"
              v-model="member.receivedailyevouchersummaryreport"
              disabled
            />
            {{ $t("profile.report") }}
          </div>
        </el-row>
      </div>
      <div class="form" v-else>
        <el-row>
          <el-col :span="12">
            <input class="input-text" v-model="member.firstname" v-if="isEn" />
            <input class="input-text" v-model="member.firstnametc" v-else />
          </el-col>
          <el-col :span="12">
            <input class="input-text" v-model="member.lastname" v-if="isEn" />
            <input class="input-text" v-model="member.lastnametc" v-else />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <select
              class="input-text"
              v-model="member.salutation"
              style="width: 292px"
            >
              <option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </option>
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
              <input class="input-text-short" v-model="member.mobilenumber" />
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <input class="input-text" v-model="member.title" v-if="isEn" />
            <input class="input-text" v-model="member.titletc" v-else />
          </el-col>
          <el-col :span="12">
            <el-col :span="8">
              <select class="select-short" v-model="member.phonePrefix2">
                <option value="1">+852</option>
                <option value="2">+853</option>
              </select>
            </el-col>
            <el-col :span="8">
              <input class="input-text-short" v-model="member.businessphonenumber" />
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <div :span="24" class="term">
            <input
              type="radio"
              class="radio"
              v-model="member.receivedailyevouchersummaryreport"
              value="true"
              @click="handleItem()"
            />
            {{ $t("profile.report") }}
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
        >{{ $t("profile.update") }}</el-button
      >
      <el-button
        type="danger"
        class="btn-red"
        @click="save()"
        :disabled="loading"
        v-else
        >{{ $t("profile.save") }}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "915240000",
          label: this.$t("common.mr"),
        },
        {
          value: "915240001",
          label: this.$t("common.ms"),
        },
        {
          value: "915240002",
          label: this.$t("common.mrs"),
        },
        {
          value: "915240003",
          label: this.$t("common.miss"),
        },
        {
          value: "915240004",
          label: this.$t("common.other"),
        },
      ],
      member: {},
      isUpdate: false,
      loading: false,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    save() {
      const _this = this;
      _this.loading = true;
      if (this.member.receivedailyevouchersummaryreport == "true")
        this.member.receivedailyevouchersummaryreport = true;
      else this.member.receivedailyevouchersummaryreport = false;
    
      if (this.member.receivemonthlyevouchersummaryreport == "true")
        this.member.receivemonthlyevouchersummaryreport = true;
      else this.member.receivemonthlyevouchersummaryreport = false;
      this.$axios
        .post("Profile/SubmitLoginUserInfoUpdate", _this.member)
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: res.errorDescription,
              type: "error",
            });
            return;
          }
          this.$message({
            showClose: true,
            message: "更新成功",
            type: "success",
          });
          _this.isUpdate = false;
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    handleItem() {
      this.member.receivedailyevouchersummaryreport = !this.member
        .receivedailyevouchersummaryreport;
    },
    getUserInfo() {
      const _this = this;
      _this.loading = true;
      this.$axios
        .post("Profile/RetrieveLoginUserInfo", {})
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: res.errorDescription,
              type: "error",
            });
            return;
          }
          _this.member = res;
          console.log(_this.member);
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
  },
  computed: {
    isEn() {
      if (this.$store.state.lang === "zh") return false;
      else return true;
    },
  },
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