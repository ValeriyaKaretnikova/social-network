"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[780],{4780:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var o=t(1413),n=t(5671),r=t(3144),i=t(136),a=t(2882),l=t(2791),c=t(364),u=t(7781),d=t(1548),f=t(5628),h=t(6070),p=t(6139),m=t(704),j=t(5304),x=t(816),v="MyPosts_posts__NZwK2",_="MyPosts_postsBlock__Iwduv",P={item:"Post_item__LY2GL",message:"Post_message__BjrB4"},g=t(184),b=function(s){var e=s.message,o=s.likeCounts;return(0,g.jsxs)("div",{className:P.item,children:[(0,g.jsxs)("div",{className:P.message,children:[(0,g.jsx)("img",{src:t(2691),alt:"avatar"}),(0,g.jsx)("div",{className:P.text,children:e})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{children:"\u2764\ufe0f"})," ",o]})]})},k=(0,j.DT)(30),N=(0,m.Z)({form:"addNewPostForm"})((function(s){return(0,g.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)(p.Z,{component:x.g,name:"newPostText",validate:[j.C1,k],placeholder:"Post message"})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Add post"})})]})})),I=function(s){var e=s.posts,t=s.addPost;return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("h3",{children:"My Posts"}),(0,g.jsx)(N,{onSubmit:function(s){t(s.newPostText)}}),(0,g.jsx)("div",{className:v,children:e.map((function(s){return(0,g.jsx)(b,{message:s.message,likeCounts:s.likesCount},s.id)}))})]})},Z=(0,c.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,h.WA)(e))}}}))(I),S={},w=t(885),y=t(8551),C=t(9833),A=t(4377),D={description:"ProfileInfo_description__+xwZ2",avatar:"ProfileInfo_avatar__0+6fK",profileData:"ProfileInfo_profileData__oaE32",mainInfo:"ProfileInfo_mainInfo__6pGFc",name:"ProfileInfo_name__6qYCZ",background:"ProfileInfo_background__eRP--",status:"ProfileInfo_status__kwrkm",statusInput:"ProfileInfo_statusInput__9kI31",photoLoader:"ProfileInfo_photoLoader__kEh+j",contacts:"ProfileInfo_contacts__NqNWe",contact:"ProfileInfo_contact__wH+lp",c:"ProfileInfo_c__oVfTk",error:"ProfileInfo_error__b7oon"},F=(0,m.Z)({form:"editProfile"})((function(s){var e=s.handleSubmit,t=s.profile,o=s.error;return(0,g.jsx)("form",{onSubmit:e,children:(0,g.jsxs)("div",{className:D.profileData,children:[(0,g.jsxs)("div",{className:D.mainInfo,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Full name: "}),(0,g.jsx)(p.Z,{name:"fullName",placeholder:"Full name",component:x.I})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job? "}),(0,g.jsx)(p.Z,{name:"lookingForAJob",placeholder:"",component:x.I,type:"checkbox"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My professional skills: "}),(0,g.jsx)(p.Z,{name:"lookingForAJobDescription",placeholder:"My professional skills",component:x.g})]}),(0,g.jsxs)("div",{className:D.about,children:[(0,g.jsx)("b",{children:"About me: "}),(0,g.jsx)(p.Z,{name:"aboutMe",placeholder:"About me",component:x.g})]}),(0,g.jsx)("div",{className:D.photoLoader,children:(0,g.jsx)("button",{onClick:function(){},children:"Save"})}),o&&(0,g.jsx)("span",{className:D.error,children:o})]}),(0,g.jsxs)("div",{className:D.c,children:[(0,g.jsx)("b",{children:"Contacts: "}),Object.keys(t.contacts).map((function(s){return(0,g.jsx)("div",{className:D.contact,children:(0,g.jsx)(p.Z,{placeholder:s,name:"contacts."+s,component:x.I})},s)}))]})]})})})),M=function(s){var e=(0,l.useState)(!1),t=(0,w.Z)(e,2),o=t[0],n=t[1],r=(0,l.useState)(s.status),i=(0,w.Z)(r,2),a=i[0],c=i[1];(0,l.useEffect)((function(){c(s.status)}),[s.status]);return(0,g.jsxs)("div",{className:D.status,children:[!o&&(0,g.jsx)("div",{children:(0,g.jsx)("span",{onDoubleClick:function(){n(!0)},children:s.status||"***"})}),o&&(0,g.jsx)("div",{children:(0,g.jsx)("input",{className:D.statusInput,autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(a)},onChange:function(s){c(s.currentTarget.value)},value:a})})]})},T=function(s){var e,t=s.profile,o=s.isOwner,n=s.onPhotoSelected,r=s.goToEditMode;return(0,g.jsxs)("div",{className:D.profileData,children:[(0,g.jsxs)("div",{className:D.mainInfo,children:[(0,g.jsx)("div",{className:D.name,children:t.fullName}),(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"Looking for a job: "})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,g.jsxs)("div",{children:[(0,g.jsx)("b",{children:"My skills: "})," ",t.lookingForAJobDescription]}),(0,g.jsxs)("div",{className:D.about,children:[(0,g.jsx)("b",{children:"About me: "})," ",null!==(e=t.aboutMe)&&void 0!==e?e:"*****"]}),(0,g.jsx)("div",{className:D.photoLoader,children:o&&(0,g.jsx)("input",{type:"file",onChange:n})}),(0,g.jsx)("div",{className:D.photoLoader,children:o&&(0,g.jsx)("button",{onClick:r,children:"Edit"})})]}),(0,g.jsxs)("div",{className:D.contacts,children:[(0,g.jsx)("b",{children:"Contacts:"}),Object.keys(t.contacts).map((function(s){return(0,g.jsx)(L,{contactTitle:s,contactValue:t.contacts[s]},s)}))]})]})},L=function(s){var e=s.contactTitle,t=s.contactValue;return(0,g.jsxs)("div",{className:D.contact,children:[(0,g.jsxs)("b",{children:[e,": "]}),t]})},O=function(s){var e=s.profile,t=s.status,o=s.updateStatus,n=s.isOwner,r=s.savePhoto,i=s.saveProfile,a=(0,l.useState)(!1),c=(0,w.Z)(a,2),u=c[0],d=c[1];if(!e)return(0,g.jsx)(y.Z,{});var f=function(s){s.target.files.length&&r(s.target.files[0])};return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:D.background,children:(0,g.jsx)("img",{src:C,alt:"background"})}),(0,g.jsxs)("div",{className:D.description,children:[(0,g.jsxs)("div",{className:D.avatar,children:[(0,g.jsx)("img",{src:null!=e.photos.large?e.photos.large:A,alt:"avatar"}),n?(0,g.jsx)(M,{status:t,updateStatus:o}):(0,g.jsx)("div",{className:D.status,children:t})]}),u?(0,g.jsx)(F,{isOwner:n,onPhotoSelected:f,onSubmit:function(s){i(s).then((function(){d(!1)}))},initialValues:e,profile:e}):(0,g.jsx)(T,{profile:e,isOwner:n,onPhotoSelected:f,goToEditMode:function(){return d(!0)}})]})]})},E=function(s){return(0,g.jsxs)("div",{className:S.profile,children:[(0,g.jsx)(O,{isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus,savePhoto:s.savePhoto,saveProfile:s.saveProfile}),(0,g.jsx)(Z,{})]})},J=function(s){(0,i.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;s||(s=this.props.authUserId)||this.props.router.history.push("/login"),this.props.getUser(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e){this.props.router.params.userId!==s.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,g.jsx)(E,(0,o.Z)((0,o.Z)({isOwner:!this.props.router.params.userId},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(l.Component),U=(0,u.qC)((0,c.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUser:h.PR,getStatus:h.lR,updateStatus:h.Nf,savePhoto:h.Ju,saveProfile:h.Ii}),f.E,d.D)(J)},1548:function(s,e,t){t.d(e,{D:function(){return h}});var o=t(1413),n=t(5671),r=t(3144),i=t(136),a=t(2882),l=t(2791),c=t(364),u=t(6871),d=t(184),f=function(s){return{isAuth:s.auth.isAuth}},h=function(s){var e=function(e){(0,i.Z)(l,e);var t=(0,a.Z)(l);function l(){return(0,n.Z)(this,l),t.apply(this,arguments)}return(0,r.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(s,(0,o.Z)({},this.props)):(0,d.jsx)(u.Fg,{replace:!0,to:"/login"})}}]),l}(l.Component);return(0,c.$j)(f)(e)}}}]);
//# sourceMappingURL=780.fbf8db55.chunk.js.map