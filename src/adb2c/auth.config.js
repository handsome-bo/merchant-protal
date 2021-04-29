import policy from './policy'
const Config = {
    auth: {
        clientId: "4e3ba4f4-2d1f-45e5-b65b-7a4dab3b2d69", // This is the ONLY mandatory field; everything else is optional.
        authority: policy.authorities.signUpSignIn.authority, // Choose sign-up/sign-in user-flow as your default.
        knownAuthorities: [policy.authorityDomain], // You must identify your tenant's domain as a known authority.
        redirectUri: "http://localhost:8080", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
      },
      cache: {
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
      },
      request:["openid"]
      
}


export default Config;