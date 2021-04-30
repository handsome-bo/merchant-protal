import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    common: {
        superaccount: 'Super Account',
        merchant: 'Merchant',
        shop: 'Shop',
        yes:'Yes',
        no:'No',
        actived:'actived',
        mr:'Mr.',
        mrs:'Mrs.',
        ms:'Ms.',
        miss:'Miss',
        other:'Other'

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
        messagetemplate: 'Customer used {N} e-Voucher(s) at {shopname}, transaction reference number: {ReferenceNo}',
        transactiondetails: 'Transaction Details',
        transactionreferencenumber: 'Transaction Reference Number',
        minimum: 'Minimum Spending Requirement',
        total: 'Total e-Voucher(s) Amount',
        reward: 'pcs',
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
        startdate:'Start Date',
        enddate:'End Date',
        to:'To',
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
        status:"Status",
        confirmandsubmit:"Confirm and Submit",
        submitforreimbursement:"Submit for Reimbursement",
        submitted:'Submitted',
        notsubmitted:'Not Submitted'

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
        quantity:"Quantity: {N} pcs",
        validtill:"Valid Till: {Expirydate}:",
        totalevouchersamount:"Total e-Voucher(s) Amount",
        minimumspendingrequirement:"Minimum Spending Requirement",
        clear:"Clear",
        submit:"Submit",
        requestsenttoshop:"Request Sent to Shop",
        transactionreferencenumber:"Transaction Reference Number      {Reference No.}",
        
    },
    qrcodeandtemplatesize:{
        shopqrcode:"Shop QR Code",
        shopqrcodesubtitle:"(forreceivinge-Vouchersin-store)",
        selectshop:"Select Shop",
        saveqrcode:"Save QR Code",
        printqrcode:"Print QR Code",
        back:"Back",
        entershopname:"Enter Shop Name",
        search:"Search",
        chooseall:"Choose All",
        confirm:"Confirm",
        scanqrviatousevoucher:"Scan QR code via ELEMENTS App to use e-Voucher(s) ",
        preview:'preview'
    },
    button: {
        accepted: 'Accepted',
        cancelled: 'Cancelled',
        accept: 'Accept',
        cancel: 'Cancel',
        back:'Back',
        ok:'OK',
        acctepting:'Waiting',


    },

    element: {
        loadingText: 'Loading...'
    },

    dateLabel: {
        years: 'years',
        month: 'month',
        week: 'week',
        day: 'day'
    },

    updatepassword:{
        title:"Update Password ",
        back:"Back",
        emailaddress:"Email Address",
        password:"Password",
        continue:"Continue",
        oldpassword:"Old Password",
        newpassword:"New Password",
        passwordagain:"Enter New Password Again",
        errormessage:"Password has been updated, please login again",
        loginaain:"Password has been updated. Please log in again.",
        username:"Username"
    },

    profile:{
        title:"Edit User Profile",
        merchantorshopname:"{MerchantName} or {ShopName}",
        emailaddress:"{EmailAddress}",
        firstname:"First Name (Mandatory)",
        lastname:"Last Name (Mandatory)",
        salutation:"Salutation",
        areacodephone:"(+852 +86 +853 +886）",
        phone:"Phone (Mandatory)",
        mobile:"Mobile  (Mandatory)",
        jobtilte:"Job Title",
        report:"Receive Usage Report by Email ? ",
        save:"Save",
        update:"update"

    },

    registration:{
        title:"Registration",
        sendverificationcode:"A verification code has been sent to your email. Please enter the verification code. ",
        prefillemail:"(Pre-fillemail)",
        verificationcode:"Verification Code",
        reverificationcode:"Send New Verification Code",
        verify:"Verify",
        password:"Password",
        passwordagain:"Enter New Password Again",
        register:"Register",
        errormessage:"Password has been updated, please login again",
        passwordcondition:"The password must contain characters from at least two of the following: upper case, lower case, digits, special characters.",
        secondlaterresend:"Sconds Later Resend",
        resendverifycode:"Resend Verify Code",
        getverifycode:"Get Verify Code"
    },
    
    login:{
        name:"e-Vouchers Merchant Portal",
        registeredemailaddress:"Sign in with registered email address",
        emailaddress:"Email address",
        password:"Password",
        forgotpassword:"Forgot password?",
        signin:"Sign in",
        keepsignin:"Keep me signed in"
    
    },

    forgotpassword:{
        resetpassword:"Reset Password",
        back:"Back",
        receiveverification:"Please enter your registered email address to receive a verification code.",
        emailaddress:"Email Address",
        sendverificationcode:"Send Verification Code",
        message:"A verification code has been sent to your email. Please enter the verification code. ",
        verificationcode:"Verification Code",
        verify:"Verify",
        sendnewverificationcode:"Send New Verification Code",
        confirm:"Confirm",
    },

    errorpage:{
        errormessage:"Sorry, the system is not available at this moment, please try again later. For further assistance, please contact our ambassadors at ELEMENTS Club Hotline 2196 8993. "
    },
    datefilter:{
        startdate:'Start Date',
        enddate:'End Date',
        to:'To',
    }
}
export default en;

