import{_ as d,o as a,c as l,a as t,F as r,l as p,t as u}from"./index-Dkrv-Zrl.js";var _={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"careforcook",BASE_URL:"/Care-For-Cook/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:m}=_,f={data(){return{file:null,pics:[],picData:[]}},methods:{upload(){const s=new FormData;s.append("file-to-upload",this.file.files[0]),this.$http.post(`${h}/v2/api/${m}/admin/upload`,s).then(e=>{this.pics.push(e.data.imageUrl),localStorage.setItem("myPics",JSON.stringify(this.pics)),this.renderPic()}).catch(e=>{console.log(e)})},renderPic(){this.picData=JSON.parse(localStorage.getItem("myPics"))}},mounted(){this.file=document.getElementById("upload")}},g=t("h2",{class:"text-center"},"圖片上傳",-1),y={action:"#",class:"mb-5"},D={class:"table-responsive"},E={class:"overflow-x-scroll"},S={class:"table"},v=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"圖片"),t("th",{scope:"col"},"圖片網址")])],-1),x=["src"];function I(s,e,P,b,n,c){return a(),l(r,null,[g,t("form",y,[t("input",{type:"file",class:"form-control border-0",id:"upload",placeholder:"請上傳圖片",onChange:e[0]||(e[0]=(...o)=>c.upload&&c.upload(...o))},null,32)]),t("div",D,[t("div",E,[t("table",S,[v,t("tbody",null,[(a(!0),l(r,null,p(n.picData,(o,i)=>(a(),l("tr",{key:i},[t("td",null,[t("img",{src:o,alt:"",style:{height:"100px"},class:"w-auto"},null,8,x)]),t("td",null,u(o),1)]))),128))])])])])],64)}const B=d(f,[["render",I]]);export{B as default};