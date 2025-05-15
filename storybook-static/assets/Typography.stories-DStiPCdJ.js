import{j as a,a as y,F as ge}from"./jsx-runtime-CJPOobNs.js";import{r as ke}from"./index-CJ_LmFaV.js";import{c as Se}from"./clsx-CH7BE6MN.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";const Ce="_Large_1ixsh_1",Le="_h1_1ixsh_9",ze="_h2_1ixsh_17",Te="_h3_1ixsh_25",we="_regular_text16_1ixsh_33",De="_bold_text16_1ixsh_41",He="_regular_text14_1ixsh_49",Ne="_medium_text14_1ixsh_57",qe="_bold_text14_1ixsh_65",Ve="_small_text_1ixsh_73",Re="_regular_link_1ixsh_89",Fe="_small_link_1ixsh_103",Be="_labelDisabled_1ixsh_169",$e="_customDisabledClass_1ixsh_174",s={Large:Ce,h1:Le,h2:ze,h3:Te,regular_text16:we,bold_text16:De,regular_text14:He,medium_text14:Ne,bold_text14:qe,small_text:Ve,"semi-bold_small_text":"_semi-bold_small_text_1ixsh_81",regular_link:Re,small_link:Fe,"font-size-xs":"_font-size-xs_1ixsh_117","font-size-s":"_font-size-s_1ixsh_121","font-size-m":"_font-size-m_1ixsh_125","font-size-l":"_font-size-l_1ixsh_129","font-size-xl":"_font-size-xl_1ixsh_133","font-size-xxl":"_font-size-xxl_1ixsh_137","font-weight-regular":"_font-weight-regular_1ixsh_141","font-weight-medium":"_font-weight-medium_1ixsh_145","font-weight-semi-bold":"_font-weight-semi-bold_1ixsh_149","font-weight-bold":"_font-weight-bold_1ixsh_153","line-heights-s":"_line-heights-s_1ixsh_157","line-heights-m":"_line-heights-m_1ixsh_161","line-heights-xl":"_line-heights-xl_1ixsh_165",labelDisabled:Be,customDisabledClass:$e},t=e=>{const{as:f="p",className:v,disabled:xe=!1,disabledClassName:be,lineHeights:k,option:fe="regular_text14",size:S,weight:C,...ye}=e,ve=Se(s[fe],C&&s[`font-weight-${C}`],S&&s[`font-size-${S}`],k&&s[`line-heights-${k}`],xe&&s.labelDisabled,be,v);return a(f,{className:ve,...ye})};try{t.displayName="Typography",t.__docgenInfo={description:"Typography component for rendering text with various styles.",displayName:"Typography",props:{as:{defaultValue:null,description:"as - The HTML element to render (e.g., 'h1', 'h2', 'p').",name:"as",required:!1,type:{name:"ElementType"}},children:{defaultValue:null,description:"Children - The content to be displayed inside the component.",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"disabled - If true, applies disabled styles.",name:"disabled",required:!1,type:{name:"boolean"}},disabledClassName:{defaultValue:null,description:"disabledClassName - Additional class name to apply when disabled.",name:"disabledClassName",required:!1,type:{name:"string"}},lineHeights:{defaultValue:null,description:"lineHeights - The line height option.",name:"lineHeights",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xl"'}]}},option:{defaultValue:null,description:"option - The typography style option.",name:"option",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"Large"'},{value:'"regular_text16"'},{value:'"bold_text16"'},{value:'"regular_text14"'},{value:'"medium_text14"'},{value:'"bold_text14"'},{value:'"small_text"'},{value:'"semi-bold_small_text"'},{value:'"regular_link"'},{value:'"small_link"'}]}},size:{defaultValue:null,description:"size - The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"l"'},{value:'"m"'},{value:'"s"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'}]}},weight:{defaultValue:null,description:"weight - The font weight.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"regular"'},{value:'"semi-bold"'}]}}}}}catch{}const Ae={argTypes:{lineHeights:{control:{type:"radio"},lineHeights:["s","m","xl"]},option:{control:{type:"radio"},options:["Large","h1","h2","h3","regular_text16","bold_text16","regular_text14","medium_text14","bold_text14","small_text","semi-bold_small_text","regular_link","small_link"]},size:{control:{type:"radio"},size:["xs","s","m","l","xl","xxl"]},weight:{control:{type:"radio"},weight:["regular","medium","semi-bold","bold"]}},args:{children:"Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH"},component:t,tags:["autodocs"],title:"Components/Typography"},r={args:{option:"Large"}},o={args:{as:"h1",option:"h1"}},l={args:{as:"h2",option:"h2"}},n={args:{as:"h3",option:"h3"}},i={args:{option:"regular_text16"}},d={args:{option:"bold_text16"}},m={args:{option:"regular_text14"}},c={args:{option:"medium_text14"}},u={args:{option:"bold_text14"}},_={args:{option:"small_text"}},p={args:{option:"semi-bold_small_text"}},h={args:{as:"a",option:"regular_link"}},g={args:{as:"a",option:"small_link"}},x={render:()=>y(ge,{children:[a(t,{as:"label",htmlFor:"username",option:"regular_text14",children:"Click me"}),a("input",{id:"username",type:"checkbox"})]})},b=()=>{const[e,f]=ke.useState(!1);return y(ge,{children:[y("div",{children:[a(t,{as:"label",disabled:e,htmlFor:"username",option:"regular_text14",children:"Click me"}),a("input",{disabled:e,id:"username",type:"checkbox"})]}),a("button",{onClick:()=>{f(!e)},type:"button",children:"disabled checkbox"})]})};var L,z,T;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    option: 'Large'
  }
}`,...(T=(z=r.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var w,D,H;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    option: 'h1'
  }
}`,...(H=(D=o.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,q,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    as: 'h2',
    option: 'h2'
  }
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var R,F,B;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    as: 'h3',
    option: 'h3'
  }
}`,...(B=(F=n.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var $,j,E;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    option: 'regular_text16'
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var M,Z,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    option: 'bold_text16'
  }
}`,...(I=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var A,O,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    option: 'regular_text14'
  }
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,P;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    option: 'medium_text14'
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,W;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    option: 'bold_text14'
  }
}`,...(W=(U=u.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    option: 'small_text'
  }
}`,...(ee=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,se,te;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    option: 'semi-bold_small_text'
  }
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,oe,le;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    as: 'a',
    option: 'regular_link'
  }
}`,...(le=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,ie,de;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    as: 'a',
    option: 'small_link'
  }
}`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ce,ue;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <>\r
      <Typography as={'label'} htmlFor={'username'} option={'regular_text14'}>\r
        Click me\r
      </Typography>\r
      <input id={'username'} type={'checkbox'} />\r
    </>
}`,...(ue=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var _e,pe,he;b.parameters={...b.parameters,docs:{...(_e=b.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [disabledLabel, setDisabledLabel] = useState<boolean>(false);
  const onChangeDisabled = () => {
    setDisabledLabel(!disabledLabel);
  };
  return <>\r
      <div>\r
        <Typography as={'label'} disabled={disabledLabel} htmlFor={'username'} option={'regular_text14'}>\r
          Click me\r
        </Typography>\r
        <input disabled={disabledLabel} id={'username'} type={'checkbox'} />\r
      </div>\r
\r
      <button onClick={onChangeDisabled} type={'button'}>\r
        disabled checkbox\r
      </button>\r
    </>;
}`,...(he=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const Oe=["Large","H1","H2","H3","Regular_text16","Bold_text16","Regular_text14","Medium_text14","Bold_text14","Small_text","Semi_bold_small_text","Regular_link","Small_link","Label","DisabledLabel"];export{u as Bold_text14,d as Bold_text16,b as DisabledLabel,o as H1,l as H2,n as H3,x as Label,r as Large,c as Medium_text14,h as Regular_link,m as Regular_text14,i as Regular_text16,p as Semi_bold_small_text,g as Small_link,_ as Small_text,Oe as __namedExportsOrder,Ae as default};
