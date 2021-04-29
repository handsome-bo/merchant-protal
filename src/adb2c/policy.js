const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignIn",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://merchantPortal2.b2clogin.com/MerchantPortal2.onmicrosoft.com/B2C_1_SignIn",
        },
        editProfile: {
            authority: "https://merchantPortal2.b2clogin.com/MerchantPortal2.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "MerchantPortal2.onmicrosoft.com"
}

export default b2cPolicies