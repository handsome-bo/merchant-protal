<template>
  <div class="wrapper">
    <div class="row new" @click="viewDetail(true)">
      <div class="flag middle-center">新</div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">待接受</div>
    </div>
    <div class="row accepted" @click="viewDetail(false)">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row cancelled">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已取消</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row accepted">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已接受</div>
    </div>
    <div class="row cancelled">
      <div class="flag middle-center"></div>
      <div class="date">2020-10-30 16:41</div>
      <div class="title">
        顧客於｛店鋪名稱｝使用電子禮券x張，交易參考碼：1n4h8a7c6v
      </div>
      <div class="status">已取消</div>
    </div>
    <div class="tip middle-center pointer">
      有新的通知 <i class="el-icon-refresh" />
    </div>

    <el-dialog :visible.sync="showDialog" center width="540">
      <div class="dialog-title">交易詳情</div>
      <div class="detail">
        <div class="detail-item">
          <div>交易參考碼</div>
          <div>1n4h8a7c6v</div>
        </div>
        <div class="detail-item">
          <div>圓方100元時裝電子禮券</div>
          <div>5張</div>
        </div>
        <div class="detail-item">
          <div>圓方100元電子禮券</div>
          <div>1張</div>
        </div>
        <div class="detail-item">
          <div>電子禮券總值</div>
          <div>600元</div>
        </div>
        <div class="detail-item">
          <div>最低消費</div>
          <div>1800元</div>
        </div>
      </div>
      <div class="btn-group" v-if="isShowConfirmBtn">
        <el-button type="primary" class="btn-white btn-confirm" @click="cancelledHandler">取消</el-button>
        <el-button type="danger" class="btn-red btn-confirm">接受</el-button>
      </div>
      <div class="btn-group handled dialogAccepted" v-else>交易已接受</div>
    </el-dialog>
    <el-dialog :visible.sync="showCancelledDialog" center width="540">
      <div class="dialog-title">取消交易</div>
      <div class="detail">假如取消交易，顧客需要重新提交兌換手續</div>
      <div class="btn-group">
        <el-button
          type="primary"
          class="btn-white btn-confirm"
          @click="showCancelledDialog = false"
          >返回</el-button
        >
        <el-button type="danger" class="btn-red btn-confirm">確定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      showDialog: false,
      isShowConfirmBtn: false,
      isShowConfirDialog: false,
      showCancelledDialog: false,
      confirmedText: "",
      selectItem: null,
    };
  },
  mounted() {},
  methods: {
    viewDetail: function (showBtn) {
      this.isShowConfirmBtn = showBtn;
      this.showDialog = true;
      if (selectItem != null) {
      }
    },
    cancelledHandler: function () {
      this.showDialog = false;
      this.showCancelledDialog = true;
    },
  },
};
</script>

<style  scoped>
.wrapper {
  width: 1027px;
  margin: 100px auto;
  font-size: 18px;
}
.row {
  height: 60px;
  width: 1027px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.row {
  margin-top: 15px;
}
.new {
  background-color: #edddc1;
}
.accepted {
  background-color: #f6f1eb;
}
.accepted > .flag,
.cancelled > .flag {
  background: none;
}
.cancelled {
  background-color: #f4f4f4;
}
.flag {
  height: 40px;
  width: 56px;
  border-radius: 4px;
  background-color: #840522;
  color: #fff;
  text-align: center;
}

.date {
  height: 20px;
  width: 142px;
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}
.title {
  height: 24px;
  width: 521px;
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}
.status {
  height: 24px;
  width: 54px;
  color: #e70048;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
.tip {
  height: 50px;
  width: 166px;
  border-radius: 10px;
  background-color: #e70048;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  position: fixed;
  z-index: 10;
  left: 45%;
  bottom: 40px;
}
.dialog-title {
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
}
.detail {
  margin: 30px auto;
  width: 80%;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
}
.detail-item {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
}
.btn-group {
  display: flex;
  justify-content: center;
}
.btn-confirm {
  width: 120px;
  border: 1px solid #e70048;
  margin: 20px;
}
.handled {
  padding: 30px;
  text-align: center;
  font-size: 18px;
}
.dialogAccepted {
  color: #840522;
}
</style>