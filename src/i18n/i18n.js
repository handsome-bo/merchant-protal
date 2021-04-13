import Vue from 'vue'
import locale from 'element-ui/lib/locale';
import VueI18n from 'vue-i18n'
//import messages from './langs'

//自定义中英文包
import zh from './langs/zh'
import en from './langs/en'

//element 中英文包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-TW'
Vue.use(VueI18n)

const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale)
}
 
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',   // default language is zh
  messages
})
locale.i18n((key, value) => i18n.t(key, value))  
console.log('%c current Language：'+(localStorage.getItem('locale')=='en'?'English':'ZH')+'','color:#fff;background:green;padding:4px;border-radius:5px');
export default i18n