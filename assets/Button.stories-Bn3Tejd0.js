import{a as e,n as t}from"./chunk-BneVvdWh.js";import{s as n}from"./iframe-COEji-Wv.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";var i,a,o,s=t((()=>{e(n(),1),i=r(),a={default:`font-medium rounded`,size:{small:`text-xs px-1 py-1`,medium:`text-sm px-1.5 py-1.5`,large:`text-lg px-2 py-2`},variant:{info:`bg-blue-60 hover:bg-blue-70 text-white`,success:`bg-green-60 hover:bg-green-70 text-white`,warning:`bg-yellow-60 hover:bg-yellow-70 text-white`,delete:`bg-red-60 hover:bg-red-70 text-white`},mode:{primary:`bg-blue-80 hover:bg-blue-70 text-white`,default:`bg-grey-80 hover:bg-grey-70 text-white`}},o=({primary:e=!1,size:t=`medium`,backgroundColor:n,label:r,variant:o,...s})=>{let c=e?a.mode.primary:o?``:a.mode.default,l=o?a.variant[o]:``,u=a.size[t];return(0,i.jsx)(`button`,{type:`button`,className:`${a.default} ${u} ${l} ${c}`,style:{backgroundColor:n},...s,children:r})},o.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`How large should the button be?`,defaultValue:{value:`'medium'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'delete'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'delete'`}]},description:`Which variants are available?`},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}}})),c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{s(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Button`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:c()}},u={args:{primary:!0,label:`Button`}},d={args:{primary:!1,label:`Button`}},f={args:{primary:!0,label:`Button`,variant:`success`}},p={args:{primary:!0,label:`Button`,variant:`info`}},m={args:{primary:!0,label:`Button`,variant:`warning`}},h={args:{primary:!0,label:`Button`,variant:`delete`}},g={args:{primary:!0,size:`small`,label:`Button`}},_={args:{primary:!0,size:`medium`,label:`Button`}},v={args:{primary:!0,size:`large`,label:`Button`},tags:[`experimental`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'success'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'info'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'warning'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'delete'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'small',
    label: 'Button'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'medium',
    label: 'Button'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'large',
    label: 'Button'
  },
  tags: ['experimental']
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`Secondary`,`Success`,`Info`,`Warning`,`Delete`,`Small`,`Medium`,`Large`]}))();export{h as Delete,p as Info,v as Large,_ as Medium,u as Primary,d as Secondary,g as Small,f as Success,m as Warning,y as __namedExportsOrder,l as default};