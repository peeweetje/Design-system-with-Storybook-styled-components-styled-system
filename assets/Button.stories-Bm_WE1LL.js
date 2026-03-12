import{i as e}from"./chunk-DseTPa7n.js";import{i as t}from"./iframe-CmTJ3tJj.js";import{t as n}from"./jsx-runtime-DsGsusFP.js";e(t(),1);var r=n(),i={default:`font-medium rounded`,size:{small:`text-xs px-1 py-1`,medium:`text-sm px-1.5 py-1.5`,large:`text-lg px-2 py-2`},variant:{info:`bg-blue-60 hover:bg-blue-70 text-white`,success:`bg-green-60 hover:bg-green-70 text-white`,warning:`bg-yellow-60 hover:bg-yellow-70 text-white`,delete:`bg-red-60 hover:bg-red-70 text-white`},mode:{primary:`bg-blue-80 hover:bg-blue-70 text-white`,default:`bg-grey-80 hover:bg-grey-70 text-white`}},a=({primary:e=!1,size:t=`medium`,backgroundColor:n,label:a,variant:o,...s})=>{let c=e?i.mode.primary:o?``:i.mode.default,l=o?i.variant[o]:``,u=i.size[t];return(0,r.jsx)(`button`,{type:`button`,className:`${i.default} ${u} ${l} ${c}`,style:{backgroundColor:n},...s,children:a})};a.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`How large should the button be?`,defaultValue:{value:`'medium'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'delete'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'delete'`}]},description:`Which variants are available?`},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}};var{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:o()}},c={args:{primary:!0,label:`Button`}},l={args:{primary:!1,label:`Button`}},u={args:{primary:!0,label:`Button`,variant:`success`}},d={args:{primary:!0,label:`Button`,variant:`info`}},f={args:{primary:!0,label:`Button`,variant:`warning`}},p={args:{primary:!0,label:`Button`,variant:`delete`}},m={args:{primary:!0,size:`small`,label:`Button`}},h={args:{primary:!0,size:`medium`,label:`Button`}},g={args:{primary:!0,size:`large`,label:`Button`},tags:[`experimental`]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'success'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'info'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'warning'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    variant: 'delete'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'small',
    label: 'Button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'medium',
    label: 'Button'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    size: 'large',
    label: 'Button'
  },
  tags: ['experimental']
}`,...g.parameters?.docs?.source}}};var _=[`Primary`,`Secondary`,`Success`,`Info`,`Warning`,`Delete`,`Small`,`Medium`,`Large`];export{p as Delete,d as Info,g as Large,h as Medium,c as Primary,l as Secondary,m as Small,u as Success,f as Warning,_ as __namedExportsOrder,s as default};