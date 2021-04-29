<template>
  <div>
    <el-row class="title-top">
      {{ $t("evoucher.e_voucherstransactionhistory") }}
    </el-row>

    <div v-if="isMobile">
      <div class="filters">
        <div
          class="mg-right-20"
          v-if="$store.getters.getUserRole === 'superaccount'"
        >
          <ShopFilterCompnent ref="shopcomponent" />
        </div>
      </div>
      <div class="filters">
        <DateFilterCompnent
          @search="search($event)"
          @download="download($event)"
        />
      </div>
      <div class="title">{{ $t("evoucher.view") }}</div>
      <div class="wrapper">
        <div>
          <!-- <el-row class="dark el-row-top">
          <el-col :span="3"> {{ $t("evoucher.shop") }} </el-col>
          <el-col :span="3"> {{ $t("evoucher.location") }} </el-col>
          <el-col :span="4"> {{ $t("evoucher.shopno") }}</el-col>
          <el-col :span="4"> {{ $t("evoucher.e_vouchers") }}</el-col>
          <el-col :span="4">
            {{ $t("evoucher.transactionreferencenumber") }}</el-col
          >
          <el-col :span="3"> {{ $t("evoucher.transactiondate") }}</el-col>
          <el-col :span="3"> {{ $t("evoucher.amount") }}</el-col>
        </el-row> -->
          <!-- <el-row
            v-for="(item, index) in tableData"
            :key="item.ShopNumber"
            v-bind:class="{ dark: index % 2 == 1 }"
          >
            <div @click="handleClick(item)">
              <el-col :span="3"> {{ item.StoreNameTC }} </el-col>
              <el-col :span="3"> {{ item.ShopNo }} </el-col>
              <el-col :span="4"> {{ item.StoreCode }}</el-col>
              <el-col :span="4"> {{ item.EVoucherNameTC }}</el-col>
              <el-col :span="4"> {{ item.ReferenceNo }}</el-col>
              <el-col :span="3"> {{ item.BurnDate | formatHour }}</el-col>
              <el-col :span="3">
                HK ${{ item.TotalVoucherAmount | MoneyFormat }}</el-col
              >
            </div>
          </el-row> -->
          <div
            v-for="(item, index) in tableData"
            :key="item.ShopNumber"
            v-bind:class="{ dark: index % 2 == 1 }"
          >
          <div class="single-context">
            <div class="flex space-between font-space">
             
              <div>{{ $t("evoucher.shop") }}</div>
              <div>{{ item.StoreNameTC }}</div>
            
        
            </div>
            <div class="flex space-between">
              <div class="font-size">{{ $t("evoucher.location") }}</div>
              <div>{{ item.StoreNameTC }}</div>
            </div>
             <div class="flex space-between">
              <div >{{ $t("evoucher.shopno") }}</div>
              <div>{{ item.ShopNo }}</div>
            </div>
             <div class="flex space-between">
              <div> {{ $t("evoucher.e_vouchers") }}</div>
              <div>{{ item.ReferenceNo }}</div>
            </div>
             <div class="flex space-between">
              <div>{{ $t("evoucher.transactionreferencenumber") }}</div>
              <div>{{ item.EVoucherNameTC }}</div>
            </div>
               <div class="flex space-between">
              <div> {{ $t("evoucher.transactiondate") }}</div>
              <div>{{ item.BurnDate | formatHour }}</div>
            </div>
              <div class="flex space-between">
              <div> {{ $t("evoucher.amount") }}</div>
              <div>{{ item.TotalVoucherAmount | MoneyFormat }}</div>
            </div>
          </div>
          </div>
          <div class="content-bottom flex alig-center space-between">
            <div class="total-text">
              {{ $t("evoucher.totalpage") }} {{ totalCount }}，{{
                $t("evoucher.totalpageoftransaction")
              }}{{ totalCount }}
            </div>
            <div class="page-text">
              <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="totalCount"
              >
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="bottom-summary flex align-center">
          <div class="total-amount">{{ $t("evoucher.totalamount") }}</div>
          <div>HK$61,000.00</div>
        </div>
      </div>
    </div>
    <div v-else>
      <el-row>
        <div class="filters flex">
          <div
            class="mg-right-20"
            v-if="$store.getters.getUserRole === 'superaccount'"
          >
            <ShopFilterCompnent ref="shopcomponent" />
          </div>
          <div>
            <DateFilterCompnent
              @search="search($event)"
              @download="download($event)"
            />
          </div>
        </div>
      </el-row>

      <div class="title">{{ $t("evoucher.view") }}</div>
      <div class="wrapper">
        <div>
          <el-row class="dark el-row-top">
            <el-col :span="3"> {{ $t("evoucher.shop") }} </el-col>
            <el-col :span="3"> {{ $t("evoucher.location") }} </el-col>
            <el-col :span="4"> {{ $t("evoucher.shopno") }}</el-col>
            <el-col :span="4"> {{ $t("evoucher.e_vouchers") }}</el-col>
            <el-col :span="4">
              {{ $t("evoucher.transactionreferencenumber") }}</el-col
            >
            <el-col :span="3"> {{ $t("evoucher.transactiondate") }}</el-col>
            <el-col :span="3"> {{ $t("evoucher.amount") }}</el-col>
          </el-row>
          <el-row
            v-for="(item, index) in tableData"
            :key="item.ShopNumber"
            v-bind:class="{ dark: index % 2 == 1 }"
          >
            <div @click="handleClick(item)">
              <el-col :span="3"> {{ item.StoreNameTC }} </el-col>
              <el-col :span="3"> {{ item.ShopNo }} </el-col>
              <el-col :span="4"> {{ item.StoreCode }}</el-col>
              <el-col :span="4"> {{ item.EVoucherNameTC }}</el-col>
              <el-col :span="4"> {{ item.ReferenceNo }}</el-col>
              <el-col :span="3"> {{ item.BurnDate | formatHour }}</el-col>
              <el-col :span="3">
                HK ${{ item.TotalVoucherAmount | MoneyFormat }}</el-col
              >
            </div>
          </el-row>
          <div class="content-bottom flex alig-center space-between">
            <div class="total-text">
              {{ $t("evoucher.totalpage") }} {{ totalCount }}，{{
                $t("evoucher.totalpageoftransaction")
              }}{{ totalCount }}
            </div>
            <div class="page-text">
              <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="totalCount"
              >
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="bottom-summary flex align-center">
          <div class="total-amount">{{ $t("evoucher.totalamount") }}</div>
          <div>HK$61,000.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import ShopFilterCompnent from "../../components/shop-filter";
import DateFilterCompnent from "../../components/date-filter";
export default {
  name: "eVoucherRecords",
  components: {
    ShopFilterCompnent,
    DateFilterCompnent,
  },
  data() {
    return {
      selectShop: "",
      tableData: [
        {
          StoreNameTC: "asd",
          ShopNo: 1,
          StoreCode: 9527,
          EVoucherNameTC: "10文",
          ReferenceNo: "1sad15a15c1sc56",
          BurnDate: "2021-1-1",
          formateFormat: "16:14",
        },
      ],
      parameters: {
        storeIDs: "",
        searchFrom: "",
        searchTo: "",
      },
      totalPage: 0,
      totalCount: 0,
      pageSize: 10,
      isMobile: false,
    };
  },
  mounted() {
    console.log(this.$store.state.isMobile);
    this.isMobile = true; //this.$store.state.isMobile;
  },
  methods: {
    handleClick(row) {
      this.selectShop = row.ShopNumber;
    },
    handleClose() {
      this.selectShop = "";
    },
    search(event) {
      const _this = this;
      if (event) {
        this.parameters.searchFrom = event[0];
        this.parameters.searchTo = event[1];
      }
      if (this.$refs.shopcomponent) {
        const shops = this.$refs.shopcomponent.shopItems;
        this.parameters.storeIDs = "";
        shops.forEach((item) => {
          this.parameters.storeIDs += item.storeID + ",";
        });
      }
      _this.$axios
        .post(
          "/EVoucher/SearchEVoucherHistoryRecords",
          qs.stringify(this.parameters)
        )
        .then((res) => {
          _this.tableData = JSON.parse(res.data);
          _this.totalCount = this.tableData.length;
          _this.totalPage = _this.totalCount / _this.pageSize;
        });
    },
    download(event) {
      const _this = this;
      if (event) {
        this.parameters.searchFrom = event[0];
        this.parameters.searchTo = event[1];
      }
      const shops = this.$refs.shopcomponent.shopItems;
      this.parameters.storeIDs = "";
      shops.forEach((item) => {
        this.parameters.storeIDs += item.storeID + ",";
      });
      let a = document.createElement("a");
      const para = qs.stringify(this.parameters);
      a.href =
        "https://localhost:44316/EVoucher/DownloadEVoucherHistoryExcelFile?" +
        para;
      a.click();
    },
  },
};
</script>

<style  scoped>
@media (max-width: 768px) {
  .filters {
    padding-left: 20px;
    padding-bottom: 20px;
  }
  .single-context{
      height: 309px;
  width: 335px;
  border-radius: 10px;
  background-color: #F6F1EB;
    margin-left: 20px;
    padding: 20px;
  }
  .font-size{
    height: 21px;
  width: 32px;
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;

  }
  
}
@media (min-width: 768px) {
  .filters {
    width: 960px;
  }
}
.wrapper {
  max-width: 1300px;
  margin: 10px auto;
  font-size: 18px;
  letter-spacing: 0;
  font-family: "Microsoft JhengHei";
  color: #222222;
}
.title {
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  margin: 30px 0 10px 0;
}

.el-row {
  border-radius: 10px;
}
.el-row-top {
  font-weight: bold;
}
.dark {
  background-color: #f6f1eb;
}

.el-col {
  text-align: center;
  padding: 15px;
  word-break: break-all;
}
.content-bottom {
  margin-top: 15px;
}
.bottom-summary {
  height: 50px;
  border-radius: 10px;
  background-color: #d7c4a3;
  justify-content: flex-end;
  padding-right: 53px;
  margin-top: 20px;
}
.total-amount {
  margin-right: 30px;
}
.filters {
  margin: 0 auto;
  justify-content: center;
}
.title-top {
  margin: 50px 0 20px 0;
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
}
</style>