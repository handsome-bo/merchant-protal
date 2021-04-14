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
    },

    updatepassword:{
        title:"Update Password ",
        back:"Back",
        emailaddress:"Email Address",
        continue:"Continue",
        oldpassword:"Old Password",
        newpassword:"New Password",
        passwordagain:"Enter New Password Again",
        loginaain:"Password has been updated. Please log in again."
    },

    profile:{
        title:"Edit User Profile",
        merchantorshopname:"{Merchant Name} or {Shop Name}",
        emailaddress:"{Email Address}",
        firstname:"First Name (Mandatory)",
        lastname:"Last Name (Mandatory)",
        salutation:"Salutation",
        areacodephone:"(+852 +86 +853 +886）",
        phone:"Phone (Mandatory)",
        mobile:"Mobile  (Mandatory)",
        jobtilte:"Job Title",
        report:"Receive Usage Report by Email ? ",
        'save':"Save"
    },

    registration:{
        title:"Registration",
        sendverificationcode:"A verification code has been sent to your email. Please enter the verification code. ",
        prefillemail:"(Pre-fill email)",
        verificationcode:"Verification Code",
        reverificationcode:"Send New Verification Code",
        verify:"Verify",
        password:"Password",
        passwordagain:"Enter New Password Again",
        register:"Register",
        passwordcondition:"The password must contain characters from at least two of the following: upper case, lower case, digits, special characters."
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
        sendnewverificationcode:"Send New Verification Code"
    },

    errorpage:{
        errormessage:"Sorry, the system is not available at this moment, please try again later. For further assistance, please contact our ambassadors at ELEMENTS Club Hotline 2196 8993. "
    }
}
export default en;

