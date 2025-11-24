import{j as B}from"./jsx-runtime-u17CrQMm.js";const e={default:"font-medium rounded",size:{small:"text-xs px-1 py-1",medium:"text-sm px-1.5 py-1.5",large:"text-lg px-2 py-2"},variant:{info:"bg-blue-80 hover:bg-blue-90 text-white",success:"bg-green-80 hover:bg-green-90 text-white",warning:"bg-yellow-80 hover:bg-yellow-90 text-white",delete:"bg-red-80 hover:bg-red-90 text-white"},mode:{primary:"bg-blue-80 hover:bg-blue-70 text-white",default:"bg-grey-80 hover:bg-grey-70 text-white"}},c=({primary:p=!1,size:d="medium",backgroundColor:g,label:y,variant:m,...b})=>{const f=p?e.mode.primary:e.mode.default,v=m?e.variant[m]:"",h=e.size[d];return B.jsx("button",{type:"button",className:`${e.default} ${h} ${v} ${f}`,style:{backgroundColor:g},...b,children:y})};c.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'delete'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'delete'"}]},description:"Which variants are available?"},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const{fn:x}=__STORYBOOK_MODULE_TEST__,w={title:"Components/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},r={args:{primary:!0,label:"Button"}},a={args:{primary:!1,label:"Button"}},t={args:{primary:!0,label:"Button",variant:"success"}},s={args:{primary:!0,label:"Button",variant:"info"}},n={args:{primary:!0,label:"Button",variant:"warning"}},o={args:{primary:!0,label:"Button",variant:"delete"}},l={args:{primary:!0,size:"small",label:"Button"}},i={args:{primary:!0,size:"medium",label:"Button"}},u={args:{primary:!0,size:"large",label:"Button"},tags:["experimental"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'info'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'warning'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'delete'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'small',
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'medium',
    label: 'Button'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'large',
    label: 'Button'
  },
  tags: ['experimental']
}`,...u.parameters?.docs?.source}}};const z=["Primary","Secondary","Success","Info","Warning","Delete","Small","Medium","Large"];export{o as Delete,s as Info,u as Large,i as Medium,r as Primary,a as Secondary,l as Small,t as Success,n as Warning,z as __namedExportsOrder,w as default};
