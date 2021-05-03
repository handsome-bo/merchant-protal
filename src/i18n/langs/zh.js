const cn = {
    common: {
        superaccount: "超级用户",
        merchant: "商户",
        shop: "门店",
        yes:'是',
        no:'否',
        actived:'生效',
        mr:'先生',
        mrs:'太太',
        ms:'女士',
        miss:'小姐',
        other:'Other',
        logoutmessage:'成功退出系統',
        errormessage:'系統繁忙，請稍後再試'
    },
    header: {
        title: '電子禮券商戶系統',
        notifications: '通知',
        shop: '商舖',
        evouchers: '電子禮券',
        evoucher1: '電子禮券記錄查詢',
        evoucher2: '每月退款申請',
        evoucher3: '使用電子禮券',
        shopqrcode: '商戶二維碼',
        setting: '設置',
        profile: '修改帳戶資料',
        password: '更改密碼',
        logout: '登出'
    },

    footer: {
        copyright: 'Copyright 2021 MTR Corporation Limited 香港鐵路有限公司. 版權所有',
        termofuse: '使用條款',
        notice: '重要告示'
    },

    notification: {
        new: '新',
        newnotification: '有新的通知',

        messagetemplate: '顧客於在 {shopname} 使用電子禮券 {N} 張，交易參考碼：{ReferenceNo}',
        transactiondetails: '交易詳情',
        transactionreferencenumber: '交易參考碼',
        minimum: '最低消費額 ',
        total: '電子禮券總值',
        reward: '張',
        confirmtext1: '你確定取消嗎?',
        confirmtext2: '如取消交易，顧客須以 ELEMENTS 手機應用程式重新選擇使用電子禮券。'

    },
    shop: {
        shoplist: '商舖列表',
        shopno: '商舖編號',
        shopname_en: '商舖名稱(英)',
        shopname_ch: '商舖名稱(中)',
        shopcategory: '商舖類別',
        salutation: '稱呼',
        firstname: '名',
        lastname: '姓',
        jobtitle: '職位',
        email: '電郵',
        phone: '電話',
        mobile: '手機',
        receivee_vouchersusagereport: '以電郵接收電子禮券使用報告 (是/否)',
        accountstatus: '帳戶狀態 (有效/暫停)',
        hide: '收起'
    },
    
    shop:{
        shoplist:'商舖列表',
        shopno:'商舖編號',
        shopname_en:'商舖名稱(英)',
        shopname_ch:'商舖名稱(中)',
        shopcategory:'商舖類別',
        salutation:'稱呼',
        firstname:'名',
        lastname:'姓',
        jobtitle:'職位',
        email:'電郵',
        phone:'電話',
        mobile:'手機',
        receivee_vouchersusagereport:'以電郵接收電子禮券使用報告 (是/否)',
        accountstatus:'帳戶狀態 (有效/暫停)',
        hide:'收起'
    },
    evoucher:{
        e_voucherstransactionhistory:'電子禮券紀錄查詢',
        selectshop:'選擇商舖',
        selectdate:'選擇日期',
        view: '查詢',
        saveasexcel: '儲存Excel',
        historydetails: '紀錄詳情',
        shop: '店舖',
        location: '地點',
        shopno: '商舖編號',
        e_vouchers: '電子禮券',
        transactionreferencenumber: '交易參考碼',
        transactiondate: '使用日期',
        amount: '總值',
        totalpage: '總計頁數：',
        totalpageoftransaction: '總計項目：',
        totalamount: '總計金額',
        back: '返回',
        entershopname: '輸入商舖名稱',
        search: '搜尋',
        selectall: '全選',
        confirm: '確定',
      
    },
    mothlyreport: {
        evouchersmonthlyreimbusement: "電子禮券每月退款申請",
        selectshop: "選擇商舖",
        downloadmothlyreimbursementreport: "下載每月退款結單",
        status: "狀態",
        confirmandsubmit: "已查閱並提交申請",
        submitforreimbursement: "提交申請",
        submitted:'已提交',
        notsubmitted:'未提交'

    },
    useevoucher: {
        useevouchers: "使用電子禮券",
        membersidandphone: "會員號碼 / 電話號碼",
        pleaseenter: "輸入",
        shop: "商舖",
        select: "選擇",
        checkevouchers: "查閱電子禮券",
        back: "返回",
        entershopname: "輸入商舖名稱",
        search: "搜尋",
        confirm: '確定',
        quantity: "數量: {N} 張",
        validtill: "有效期至: {Expirydate}",
        totalevouchersamount: "電子禮券總值",
        minimumspendingrequirement: "最低消費額",
        clear: "重設",
        submit: "提交",
        requestsenttoshop: "已提交至商戶",
        transactionreferencenumber: "交易參考碼        {ReferenceNo.}",

    },
    qrcodeandtemplatesize: {
        shopqrcode: "商舖二維碼",
        shopqrcodesubtitle:"用作收取電子禮券",
        selectshop: "選擇商舖",
        saveqrcode: "儲存二維碼",
        printqrcode: "列印二維碼",
        back: "返回",
        entershopname: "輸入商舖名稱",
        search: "搜尋",
        chooseall: "全選",
        confirm: "確定",
        scanqrviatousevoucher: "開啟 ELEMENTS 手機應用程式掃描QR碼以使用電子禮券 ",
        preview:'預覽'
    },
    button: {
        accepted: '已接受',
        cancelled: '已取消',
        accept: '接受',
        cancel: '取消',
        back: '返回',
        ok:'確定',
        acctepting:'待接受',

    },

    element: {
        loadingText: "拼命加载中..."
    },


    dateLabel: {
        years: "年",
        month: "月",
        week: "周",
        day: "日"
    },

    profile:{
        title:"修改帳戶資料",
        merchantorshopname:"{MerchantName} or {ShopName}",
        emailaddress:"{EmailAddress}",
        firstname:"名（必填）",
        lastname:"姓（必填）",
        salutation:"稱呼",
        areacodephone:"(+852 +86 +853 +886）",
        phone:"電話（必填）",
        mobile:"手機（必填）",
        jobtilte:"職位",
        report:"以電郵接收電子禮券使用報告 ?  ",
        save:"儲存",
        update:"修改"
    },

    updatepassword:{
        title:"更新密碼 ",
        back:"返回",
        emailaddress:"電郵地址",
        password:"密碼",
        continue:"繼續",
        oldpassword:"舊密碼",
        newpassword:"新密碼 ",
        passwordagain:"再次輸入新密碼",
        errormessage:"密码已更新，请重新登入",
        loginaain:"密碼已更新，請重新登入",
        username:"用戶名",
        texttip1:"密碼需要乎合至少2項條件（大寫、小寫、數字和符號）",

    },

    registration:{
        title:"註冊",
        sendverificationcode:"請輸入已發送到電郵的驗證碼。",
        prefillemail:"(Pre-fillemail)",
        verificationcode:"驗證碼",
        reverificationcode:"重新發送驗證碼",
        verify:"驗證",
        password:"密碼",
        passwordagain:"再次輸入新密碼",
        register:"註冊",
        errormessage:"密码已更新，请重新登入",
        passwordcondition:"密碼需要符合至少2項條件 : 大寫、小寫、數字和符號。",
        secondlaterresend:"秒後重新傳送",
        resendverifycode:"重新傳送驗證碼",
        getverifycode:"獲取驗證碼",
    },

    login:{
        name:"電子禮券商戶系統",
        registeredemailaddress:"使用已登記之電郵地址登入",
        emailaddress:"電郵地址",
        password:"密碼",
        forgotpassword:"忘記密碼?",
        signin:"登入",
        keepsignin:"保持登入"
    
    },

    forgotpassword:{
        resetpassword:"重設密碼",
        back:"返回",
        receiveverification:"請輸入已登記之電郵地址以接收驗證碼。",
        emailaddress:"電郵地址",
        sendverificationcode:"發送驗證碼",
        message:"驗證碼已發送到電郵，請輸入驗證碼。 ",
        verificationcode:"驗證碼",
        verify:"驗證",
        sendnewverificationcode:"重新發送驗證碼",
        confirm:"確認"
    },

    errorpage:{
        errormessage:"抱歉，系統暫時未能提供服務，請稍後再試。如有查詢，請致電ELEMENTS Club 熱線 2196 8993 與禮賓大使聯絡。"
    },

    datefilter:{
        startdate:"開始日期",
        enddate:"結束日期",
        to:"到",
    }
}

export default cn;
