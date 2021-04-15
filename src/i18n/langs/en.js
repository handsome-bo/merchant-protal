import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    common: {
        superaccount: 'Super Account',
        merchant: 'Merchant',
        shop: 'Shop'

    },
    header: {
        title: 'e-Vouchers Merchant Portal',
        notifications: 'Notifications',
        shop: 'Shop',
        evouchers: 'e-Vouchers',
        evoucher1: 'e-Vouchers Transaction History',
        evoucher2: 'e-Vouchers Monthly Reimbursement Application',
        evoucher3: 'Use e-Voucher(s)',
        shopqrcode: 'Shop QR Code',
        setting: 'Setting',
        profile: 'Profile',
        password: 'Password',
        logout: 'Log out'
    },
    footer: {
        copyright: 'Copyright 2021 MTR Corporation Limited 香港鐵路有限公司. 版權所有',
        termofuse: 'Terms of Use',
        notice: 'Important Notice'
    },
    notification: {
        new: 'NEW',
        newnotification: 'New Notification',
        messagetemplate: '{Transaction Timestamp} Customer used {N} e-Voucher(s) at {Shop name}, transaction reference number: {Reference No.}',
        transactiondetails: 'Transaction Details',
        transactionreferencenumber: 'Transaction Reference Number                             {Reference No.}',
        minimum: 'Minimum Spending Requirement     HK$ {N}',
        total: 'Total e-Voucher(s) Amount                 HK$ {N}',
        reward: '{e-Voucher Reward EN Name}        {N} pcs',
        confirmtext1: 'Do you confirm to cancel?',
        confirmtext2: 'If this transaction is cancelled, the customer will be required to re-submit their request to use the e-Voucher(s) via ELEMENTS App. '
    },
    shop:{
        shoplist:'Shop List',
        shopno:'Shop No',
        shopname_en:'Shop Name(EN)',
        shopname_ch:'Shop Name(CH)',
        shopcategory:'Shop Category',
        salutation:'salutation',
        firstname:'First Name',
        lastname:'Last Name',
        jobtitle:'Job Title',
        email:'Email',
        phone:'Phone',
        mobile:'Mobile',
        receivee_vouchersusagereport:'Receive e-Vouchers Usage Report (Yes/No) ',
        accountstatus:'Account Status (Active/ Inactive)',
        hide:'Hide'
    },
    evoucher:{
        e_voucherstransactionhistory:'e-Vouchers Transaction History',
        selectshop:'Select Shop',
        selectdate:'Select Date',
        view: 'View',
        saveasexcel:'Save as Excel',
        historydetails:'History Details',
        shop:'Shop',
        location:'Location',
        shopno:'Shop No',
        e_vouchers:'e-Vouchers',
        transactionreferencenumber:'Transaction Reference Number',
        transactiondate:'Transactions Date',
        amount:'Amount',
        totalpage:'Total Page(s)：',
        totalpageoftransaction:'TotalTransactions：',
        totalamount:'Total Amount',
        back:'Back',
        entershopname:'Enter Shop Name',
        search:'Search',
        selectall:'Select All',
        confirm:'Confirm',
    },
    mothlyreport:{
        evouchersmonthlyreimbusement:"e-Vouchers Monthly Reimbursement Application",
        selectshop:"Select Shop",
        downloadmothlyreimbursementreport:"Download Monthly Reimbursement Report",
        status:"Status (NotSubmitted/Submitted)",
        confirmandsubmit:"Status (Not Submitted/Submitted)",
        submitforreimbursement:"Submit for Reimbursement",

    },
    useevoucher:{
        useevouchers:"Use e-Voucher(s)",
        membersidandphone:"Member's ID/ Phone Number",
        pleaseenter:"Please Enter",
        shop:"Shop",
        select:"Select",
        checkevouchers:"Check e-Voucher(s)",
        back:"Back",
        entershopname:"Enter Shop Name",
        search:"Search",
        confirm:'Confirm',
        quantity:"Quantity:  {N} pcs",
        validtill:"Valid Till: {Expiry date}:",
        totalevouchersamount:"Total e-Voucher(s) Amount                       HK$ {N}                                 HK$ {N} ",
        minimumspendingrequirement:"Minimum Spending Requirement       HK$ {N}",
        clear:"Clear",
        submit:"Submit",
        requestsenttoshop:"Request Sent to Shop",
        transactionreferencenumber:"Transaction Reference Number      {Reference No.}",
        
    },
    qrcodeandtemplatesize:{
        shopqrcode:"Shop QR Code (forreceivinge-Vouchersin-store)",
        selectshop:"Select Shop",
        saveqrcode:"Save QR Code",
        printqrcode:"Print QR Code",
        back:"Back",
        entershopname:"Enter Shop Name",
        search:"Search",
        chooseall:"Choose All",
        confirm:"Confirm",
        scanqrviatousevoucher:"Scan QR code via ELEMENTS App to use e-Voucher(s) ",
    },
    button: {
        accepted: 'Accepted',
        cancelled: 'Cancelled',
        accept: 'Accept',
        cancel: 'Cancel'

    },

    element: {
        loadingText: 'Loading...'
    },

    dateLabel: {
        years: 'years',
        month: 'month',
        week: 'week',
        day: 'day'
    }
}
export default en;

