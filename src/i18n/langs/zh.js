const cn = {
    common: {
        superaccount: "超级用户",
        merchant: "商户",
        shop: "门店"
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
        messagetemplate: '{Transaction Timestamp} 顧客於{Transaction Date}在 {Shop name}使用電子禮券 {N} 張，交易參考碼：{Reference No.}',
        transactiondetails: 'Transaction Details',
        transactionreferencenumber: 'Transaction Reference Number                             {Reference No.}',
        minimum: 'Minimum Spending Requirement     HK$ {N}',
        total: 'Total e-Voucher(s) Amount                 HK$ {N}',
        reward: '{e-Voucher Reward EN Name}        {N} pcs',
        confirmtext1: 'Do you confirm to cancel?',
        confirmtext2: 'If this transaction is cancelled, the customer will be required to re-submit their request to use the e-Voucher(s) via ELEMENTS App. '



    },
    button: {
        accepted: '已接受',
        cancelled: '已取消',
        accept: 'Accept',
        cancel: 'Cancel'

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
        merchantorshopname:"{Merchant Name} or {Shop Name}",
        emailaddress:"{Email Address}",
        firstname:"名（必填）",
        lastname:"姓（必填）",
        salutation:"稱呼",
        areacodephone:"(+852 +86 +853 +886）",
        phone:"電話（必填）",
        mobile:"手機（必填）",
        jobtilte:"職位",
        report:"以電郵接收電子禮券使用報告 ?  ",
        save:"儲存"
    },

    updatepassword:{
        title:"更新密碼 ",
        back:"返回",
        emailaddress:"電郵地址",
        continue:"繼續",
        oldpassword:"舊密碼",
        newpassword:"新密碼 ",
        passwordagain:"再次輸入新密碼",
        loginaain:"密碼已更新，請重新登入"
    },

    registration:{
        title:"註冊",
        sendverificationcode:"請輸入已發送到電郵的驗證碼。",
        prefillemail:"(Pre-fill email)",
        verificationcode:"驗證碼",
        reverificationcode:"重新發送驗證碼",
        verify:"驗證",
        password:"密碼",
        passwordagain:"再次輸入新密碼",
        register:"註冊",
        passwordcondition:"密碼需要符合至少2項條件 : 大寫、小寫、數字和符號。"
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
        sendnewverificationcode:"重新發送驗證碼"
    },

    errorpage:{
        errormessage:"抱歉，系統暫時未能提供服務，請稍後再試。如有查詢，請致電ELEMENTS Club 熱線 2196 8993 與禮賓大使聯絡。"
    }
}

export default cn;
