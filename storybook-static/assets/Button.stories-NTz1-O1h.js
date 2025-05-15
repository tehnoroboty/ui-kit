import{j as R}from"./jsx-runtime-CJPOobNs.js";import{c as q}from"./clsx-CH7BE6MN.js";import"./index-ChsGqxH_.js";const H="_button_g2b2r_1",I="_primary_g2b2r_20",P="_secondary_g2b2r_21",V="_bordered_g2b2r_25",M="_transparent_g2b2r_26",j="_fullWidth_g2b2r_108",s={button:H,primary:I,secondary:P,bordered:V,transparent:M,fullWidth:j},l=d=>{const{as:S="button",className:E,fullWidth:F=!1,variant:L="primary",...x}=d,C=q(s.button,s[L],F&&s.fullWidth,E);return R(S,{className:C,...x})};try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bordered"'},{value:'"primary"'},{value:'"secondary"'},{value:'"transparent"'}]}}}}}catch{}const D={argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","bordered","transparent"]}},component:l,tags:["autodocs"],title:"Components/Button",parameters:{docs:{description:{component:`Button component.\r

@param {React.ElementType} [as] - The type of element to be used (e.g., 'button', 'a', etc.).\r

@param {boolean} [fullWidth] - Indicates whether the button should take the full width of the container.\r

@param {'primary' | 'secondary'} [variant] - The style variant of the button.\r

@param {boolean} [loading] - Indicates whether the button is in a loading state.\r

@param {boolean} [disabled] - Indicates whether the button is disabled.\r

@param {string} [backgroundColor] - The background color of the button.\r

@param {string} [color] - The text color of the button.\r

@param {React.MouseEventHandler<HTMLButtonElement>} [onClick] - Click event handler.\r

@param {React.FocusEventHandler<HTMLButtonElement>} [onFocus] - Focus event handler.\r

@param {React.ReactNode} children - The content of the button.`}}}},e={args:{children:"Button",disabled:!1,variant:"primary"}},r={args:{children:"Button ",disabled:!1,variant:"secondary"}},a={args:{children:"Button ",disabled:!1,variant:"bordered"}},t={args:{children:"Button ",disabled:!1,variant:"transparent"}},n={args:{as:"a",children:"Link that looks like a button",href:"https://www.google.ru/?hl=ru",variant:"primary"}},o={args:{children:"Full Width Primary Button",disabled:!1,fullWidth:!0,variant:"primary"}};var i,c,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button ',
    disabled: false,
    variant: 'secondary'
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,f,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Button ',
    disabled: false,
    variant: 'bordered'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,_,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button ',
    disabled: false,
    variant: 'transparent'
  }
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var B,W,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://www.google.ru/?hl=ru',
    variant: 'primary'
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var T,w,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const G=["Primary","Secondary","BorderedButton","TransparentButton","AsLink","FullWidth"];export{n as AsLink,a as BorderedButton,o as FullWidth,e as Primary,r as Secondary,t as TransparentButton,G as __namedExportsOrder,D as default};
