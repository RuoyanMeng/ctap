(this["webpackJsonpctap-samplecode-generation"]=this["webpackJsonpctap-samplecode-generation"]||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(13),o=n.n(r),s=n(41),l=(n(112),n(15)),d=(n(113),n(73)),p=n.n(d),h=n(23),u=n(86),j=n(16),b=n(7),f=n(12),g=n(177),m=n(161),O=n(163),x=n(175),C=n(181),v=n(180),S=n(173),T=n(183),_=n(176),y=n(182),k=n(165),E=n(167),D=n(166),P=n(178),R=n(168),A=n(125),I=n(74),N=n.n(I),H=["","chanlocs128_biosemi.elp","chanlocs128_biosemi_withEOG.elp","chanlocs128_cent.elp","chanlocs128_pist.elp","chanlocs160_biosemi.elp","chanlocs16_biosemi.elp","chanlocs16_biosemi_withEOG.elp","chanlocs256_biosemi.elp","chanlocs256_biosemi_withEOG.elp","chanlocs32_biosemi.elp","chanlocs64_biosemi.elp","chanlocs64_biosemi_withEOG.elp","channel_locations_acticap_32.ced"],w=n.p+"static/media/CTAP_Linear.cab9b4e3.png",L=n.p+"static/media/CTAP_Branch.4d4e53a9.png",B=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"35ch"}},words:{textAlign:"center"},customWidth:{maxWidth:500}}})),G="Set clean segment time range [start end] in seconds from test data",F="Name of the clean seed data file extract from test data",U="Name a folder which contains outputs of pipes",Y="The root directory of the current analysis.",W="The unique sequence number in EEG dataset name(sbj_filt)",M="EEG Data Type, eg, *.set/*.bdf",V="Channel Location of testing EEG data ",q="Reference channel of testing EEG data,  eg, {'L_MASTOID' 'R_MASTOID'}",z="VEOG Channel Names of testing EEG data, required if performing blinks detection, eg, {'VEOG1','VEOG2'}",J="HEOG Channel Names of testing EEG data, required if performing blinks detection, eg, {'HEOG1','HEOG2'}",$=function(e){var t=e.inputValue,n=e.setBasicInfoInput,i=e.basicInfoInputCheck,r=e.setBasicInfoInputCheck,o=B(),s=Object(c.useState)(t.eegChanloc),l=Object(f.a)(s,2),d=l[0],p=l[1];Object(c.useEffect)((function(){n(Object(b.a)(Object(b.a)({},t),{},{eegChanloc:d})),r(Object(b.a)(Object(b.a)({},i),{},{eegChanloc:!1}))}),[d]);var h=function(e){var a=e.target,c=a.name,o=a.value;n(Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},c,o))),r(Object(b.a)(Object(b.a)({},i),{},Object(j.a)({},c,!1)))},u=function(e){"checkedLinear"===e.target.name?n(Object(b.a)(Object(b.a)({},t),{},{checkedLinear:e.target.checked,checkedBranch:!e.target.checked})):"checkedBranch"===e.target.name?n(Object(b.a)(Object(b.a)({},t),{},{checkedBranch:e.target.checked,checkedLinear:!e.target.checked})):n(Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.target.name,e.target.checked)))},g=function(e){if(console.log(e.target.name),"checkTimeRange"===e.target.name){var a={};a=Object(b.a)(Object(b.a)({},a),{},{HydraOptionA:e.target.checked,HydraOptionB:!e.target.checked}),e.target.checked&&(console.log(e.target.checked),a=Object(b.a)(Object(b.a)({},a),{},{checkHydraCleanSeed:""}),r(Object(b.a)(Object(b.a)({},i),{},{checkHydraCleanSeed:!1}))),n(Object(b.a)(Object(b.a)({},t),a))}else{var c={};c=Object(b.a)(Object(b.a)({},c),{},{HydraOptionB:e.target.checked,HydraOptionA:!e.target.checked}),e.target.checked&&(console.log(t),c=Object(b.a)(Object(b.a)({},c),{},{checkHydraTimeRange:""}),r(Object(b.a)(Object(b.a)({},i),{},{checkHydraTimeRange:!1}))),n(Object(b.a)(Object(b.a)({},t),c))}};return Object(a.jsxs)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsxs)(O.a,{maxWidth:"md",style:{marginTop:"3rem"},children:[Object(a.jsx)("h4",{children:"What type of pipeline* you would like to generate?"}),Object(a.jsxs)(y.a,{style:{width:750,margin:"0 auto"},children:[Object(a.jsx)(k.a,{expandIcon:Object(a.jsx)(N.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(a.jsx)(D.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(a.jsx)(P.a,{checked:t.checkedLinear,onChange:u,name:"checkedLinear"}),label:"Linear Pipeline"})}),Object(a.jsx)(E.a,{children:Object(a.jsx)("img",{src:w,width:"700"})})]}),Object(a.jsxs)(y.a,{style:{width:750,margin:"0 auto"},children:[Object(a.jsx)(k.a,{expandIcon:Object(a.jsx)(N.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(a.jsx)(D.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(a.jsx)(P.a,{checked:t.checkedBranch,onChange:u,name:"checkedBranch"}),label:"Branch Pipeline"})}),Object(a.jsx)(E.a,{children:Object(a.jsx)("img",{src:L,width:"700"})})]}),Object(a.jsx)("h5",{className:o.words,children:"* Click Linear and Brach tabs to see diagrams describe these two different pipelines. "}),Object(a.jsx)("h5",{className:o.words,children:"* linear pipeline using different setpSets to group CTAP functions, the processing sequence depends on setpSets order. Branch pipeline generates sub-functions including predefined executable CTAP functions, which provides a more clear and flexible modular way to group functions. "}),Object(a.jsxs)("div",{children:[Object(a.jsx)(D.a,{control:Object(a.jsx)(P.a,{checked:t.checkedHYDRA,onChange:u,name:"checkedHYDRA"}),label:"Implementing HYDRA for artifacts parameter optimization or not?"}),t.checkedHYDRA?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(D.a,{control:Object(a.jsx)(P.a,{checked:t.HydraOptionA,onChange:g,name:"checkTimeRange"}),label:"Provide clean data time-range"}),Object(a.jsx)(D.a,{control:Object(a.jsx)(P.a,{checked:t.HydraOptionB,onChange:g,name:"checkCleanSeed"}),label:"Provide clean seed data"}),t.HydraOptionA?Object(a.jsx)("div",{children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:G}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.checkHydraTimeRange,id:"checkHydraTimeRange",name:"checkHydraTimeRange",label:"Time Range",value:t.checkHydraTimeRange,onChange:function(e){return h(e)},type:"text",helperText:i.checkHydraTimeRange?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}):null,t.HydraOptionB?Object(a.jsx)("div",{children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:F}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.checkHydraCleanSeed,id:"checkHydraCleanSeed",name:"checkHydraCleanSeed",label:"Seed Data Name",value:t.checkHydraCleanSeed,onChange:function(e){return h(e)},type:"text",helperText:i.checkHydraCleanSeed?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}):null]})}):null,Object(a.jsx)("hr",{})]})]}),Object(a.jsxs)("div",{style:{marginTop:"0.8rem"},children:[Object(a.jsx)("h4",{children:"Basic setting begin"}),Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:U}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.pipelineName,id:"pipelineName",name:"pipelineName",label:"Pipeline Name",value:t.pipelineName,onChange:function(e){return h(e)},type:"text",helperText:i.pipelineName?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})]}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:Y}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.projectRoot,id:"projectRoot",name:"projectRoot",label:"Project Root",value:t.projectRoot,onChange:function(e){return h(e)},type:"text",helperText:i.projectRoot?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:W}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.sbj_filt,id:"sbj_filt",name:"sbj_filt",label:"EEG File Name Sequence",value:t.sbj_filt,onChange:function(e){return h(e)},type:"text",helperText:i.sbj_filt?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:M}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.eegType,id:"eegType",name:"eegType",label:"EEG Data Type",value:t.eegType,onChange:function(e){return h(e)},type:"text",helperText:i.eegType?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:V}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(_.a,{value:t.eegChanloc,onChange:function(e,t){p(t)},id:"controllable-states-demo",options:H,renderInput:function(e){return Object(a.jsx)(T.a,Object(b.a)(Object(b.a)({},e),{},{error:i.eegChanloc,helperText:i.eegChanloc?"The field cannot be empty. Please enter a value":null,label:"EEG Data Channel Location",variant:"outlined"}))}})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:q}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.eegReference,id:"eegReference",name:"eegReference",label:"EEG Data Reference Channel",value:t.eegReference,onChange:function(e){return h(e)},type:"text",helperText:i.eegReference?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:z}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.eegVeogChannelNames,id:"eegVeogChannelNames",name:"eegVeogChannelNames",label:"VEOG Channel Names",value:t.eegVeogChannelNames,onChange:function(e){return h(e)},type:"text",helperText:i.eegVeogChannelNames?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})}),Object(a.jsx)("div",{style:{marginTop:"0.8rem"},children:Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:J}),classes:{tooltip:o.customWidth},children:Object(a.jsx)(T.a,{error:i.eegHeogChannelNames,id:"eegHeogChannelNames",name:"eegHeogChannelNames",label:"HEOG Channel Names",value:t.eegHeogChannelNames,onChange:function(e){return h(e)},type:"text",helperText:i.eegHeogChannelNames?"The field cannot be empty. Please enter a value":null,variant:"outlined"})})})]})},K=function(e,t){var n=new Array([]),a=new Array([]),c=new Array([]);return e.checkedHYDRA&&(c.push("HYDRA = true;"),c.push("PARAM = param_sweep_setup(project_dir);"),c.push("Cfg.HYDRA.ifapply = HYDRA;"),c.push("Cfg.HYDRA.chanloc = '".concat(e.eegChanloc,"';")),c.push("Cfg.HYDRA.PARAM = PARAM;"),c.push("Cfg.HYDRA.FULL_CLEAN_SEED = false;"),e.checkHydraTimeRange&&!e.checkHydraCleanSeed?(c.push("Cfg.HYDRA.provide_seed_timerange = true;"),c.push("Cfg.HYDRA.cleanseed_timerange = ".concat(e.checkHydraTimeRange,";"))):e.checkHydraCleanSeed&&!e.checkHydraTimeRange&&(c.push("Cfg.HYDRA.provide_seed_timerange = false;"),c.push("Cfg.HYDRA.seed_fname = ".concat(e.checkHydraCleanSeed,";")))),t.forEach((function(e,t){var c="";e.funcsSettings.forEach((function(e){c+="@".concat(e.funcName,", ");var t=e.funcName;t&&(t=t.slice(5,t.length)),n.push("out.".concat(t,"=struct(").concat(e.funcP,")"))})),a.push("stepSet(".concat(t+1,").id = [num2str(").concat(t+1,"), '").concat(e.stepID,"'];")),a.push("stepSet(".concat(t+1,").funH{").concat(c,"};"))})),new Array("pipeline_name = '".concat(e.pipelineName,"';"),"FILE_ROOT = mfilename('fullpath');","reporoot = FILE_ROOT(1:strfind(FILE_ROOT, fullfile('ctap', 'templates', '".concat(e.projectRoot,"', 'ctap_linear_template')) - 1);"),"project_dir = FILE_ROOT(1:strfind(FILE_ROOT, fullfile('ctap_linear_template')) - 1);","data_dir = append(reporoot,'ctap/data/test_data');","Cfg.env.paths = cfg_create_paths(project_dir, pipeline_name, {''}, 1);","Cfg.eeg.chanlocs = '".concat(e.eegChanloc,"';"),"Cfg.eeg.reference = ".concat(e.eegReference,";"),"Cfg.eeg.veogChannelNames = ".concat(e.eegVeogChannelNames,";"),"Cfg.eeg.heogChannelNames = ".concat(e.eegHeogChannelNames,";"),"Cfg.grfx.on = false;","Cfg.MC = get_meas_cfg_MC(Cfg, data_dir, 'eeg_ext', '".concat(e.eegType,"', 'sbj_filt', ").concat(e.sbj_filt,");"),"".concat(c.join("\n")),"clear Pipe;","".concat(a.join("\n")),"".concat([n.join("\n")]),"Cfg.pipe.stepSets = stepSet;","Cfg.pipe.runSets = {stepSet(1).id};","Cfg = ctap_auto_config(Cfg, out);","%% Run the pipe","CTAP_pipeline_looper(Cfg, 'debug', DEBUG, 'overwrite', true);","clear i stepSet Filt ctap_args")},Q=n(5),X=n(129),Z=n(3),ee=n(171),te=n(172),ne=n(179),ae=n(64),ce=n.n(ae),ie=Object(Q.a)({alternativeLabel:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},active:{"& $line":{borderColor:"#784af4"}},completed:{"& $line":{borderColor:"#784af4"}},line:{borderColor:"#eaeaf0",borderTopWidth:3,borderRadius:1}})(X.a),re=Object(m.a)({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center"},active:{color:"#784af4"},circle:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"},completed:{color:"#784af4",zIndex:1,fontSize:18}});function oe(e){var t=re(),n=e.active,c=e.completed;return Object(a.jsx)("div",{className:Object(Z.a)(t.root,Object(j.a)({},t.active,n)),children:c?Object(a.jsx)(ce.a,{className:t.completed}):Object(a.jsx)("div",{className:t.circle})})}var se=Object(m.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1),marginBottom:e.spacing(2)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var le=function(e){var t=e.activeStep,n=e.handleReset,c=e.handleBack,i=e.handleNext,r=se(),o=["Basic settings","Pipe config","Review and download"];return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(ee.a,{alternativeLabel:!0,activeStep:t,connector:Object(a.jsx)(ie,{}),children:o.map((function(e){return Object(a.jsx)(te.a,{children:Object(a.jsx)(ne.a,{StepIconComponent:oe,children:e})},e)}))}),Object(a.jsx)("div",{children:t===o.length?Object(a.jsxs)("div",{children:[Object(a.jsx)(A.a,{className:r.instructions,children:"All steps completed - you're finished"}),Object(a.jsx)(S.a,{onClick:n,className:r.button,children:"Reset"})]}):Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(S.a,{disabled:0===t,onClick:c,className:r.button,children:"Back"}),Object(a.jsx)(S.a,{variant:"contained",color:"primary",onClick:i,className:r.button,children:t===o.length-1?"Finish":"Next"})]})})})]})},de=n(124),pe=n(89),he=n.n(pe),ue=n(90),je=n.n(ue),be=[{id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]}],fe=[{id:Object(g.a)(),pipeSegment_srcid:"",pipeSegmentID:"",stepID:"",pipeSegment_srcidCheck:!1,pipeSegmentIDCheck:!1,stepIDCheck:!1,linearSetting:[{id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]}]}],ge=function(e,t){switch(t.type){case"UPDATE_STEPSETS":return t.data;default:return e}},me=Object(c.createContext)(fe),Oe=Object(c.createContext)(be),xe=function(e){var t=e.children,n=Object(c.useReducer)(ge,be),i=Object(f.a)(n,2),r=i[0],o=i[1],s=Object(c.useReducer)(ge,fe),l=Object(f.a)(s,2),d=l[0],p=l[1];return Object(a.jsx)(Oe.Provider,{value:[r,o],children:Object(a.jsx)(me.Provider,{value:[d,p],children:t})})},Ce=["","CTAP_load_data","CTAP_load_chanlocs","CTAP_reref_data","CTAP_blink2event","CTAP_peek_data","CTAP_fir_filter","CTAP_run_ica","CTAP_detect_bad_comps","CTAP_reject_data","CTAP_detect_bad_channels","CTAP_interp_chan","CTAP_detect_bad_segments"],ve=function(e){var t=e.ifLinear,n=e.index,r=e.indexm,o=e.funcsSettings,s=e.classes,l=e.mid,d=Object(c.useContext)(me),p=Object(f.a)(d,2),u=p[0],m=p[1],O=Object(c.useContext)(Oe),x=Object(f.a)(O,2),C=x[0],v=x[1],S=i.a.useState(null),y=Object(f.a)(S,2),k=(y[0],y[1]),E=Object(c.useState)((function(){return t?C:u[n].linearSetting})),D=Object(f.a)(E,2),P=D[0],I=D[1];Object(c.useEffect)((function(){I(t?C:u[n].linearSetting)}),[C,u]);var N=function(e,a,c){var i=Object(h.a)(P),r=i.findIndex((function(e){return e.id===l})),o=i[r].funcsSettings.map((function(t){return e===t.fid&&(t[a]=c,t[a+"Check"]=!1),t}));if(i[r].funcsSettings=o,t)v({type:"UPDATE_STEPSETS",data:i});else{var s=Object(h.a)(u);s[n].linearSetting=i,m({type:"UPDATE_STEPSETS",data:s})}};return Object(a.jsx)("div",{className:s.root,children:o.map((function(e,c){var i;return Object(a.jsxs)("div",{children:[Object(a.jsx)(_.a,(i={id:"funcName"+c,value:P[r].funcsSettings[c].funcName,onChange:function(t,n){k(n),N(e.fid,"funcName",n)}},Object(j.a)(i,"id","controllable-states-demo"),Object(j.a)(i,"options",Ce),Object(j.a)(i,"renderInput",(function(t){return Object(a.jsx)(T.a,Object(b.a)(Object(b.a)({},t),{},{error:e.funcNameCheck,label:"Function Name",variant:"outlined",helperText:e.funcNameCheck?"The field cannot be empty. Please select a function":""}))})),i)),Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:"check docs for parameters supported for each func, input in 'pName', p, eg.('method', 'fastica', 'overwrite', true). All the string input need single-quote:'input' "}),classes:{tooltip:s.customWidth},children:Object(a.jsx)(T.a,{id:"funcP"+c,name:"funcP",label:"Function Parameters",variant:"filled",value:P[r].funcsSettings[c].funcP,onChange:function(t){return N(e.fid,t.target.name,t.target.value)}})}),Object(a.jsx)(de.a,{disabled:1===o.length,onClick:function(){return function(e){var a=Object(h.a)(P),c=a.findIndex((function(e){return e.id===l})),i=a[c].funcsSettings.findIndex((function(t){return t.fid===e}));if(a[c].funcsSettings.splice(i,1),t)v({type:"UPDATE_STEPSETS",data:a});else{var r=Object(h.a)(u);r[n].linearSetting=a,m({type:"UPDATE_STEPSETS",data:r})}}(e.fid)},children:Object(a.jsx)(he.a,{})}),Object(a.jsx)(de.a,{onClick:function(){return function(){var e=Object(h.a)(P),a=e.findIndex((function(e){return e.id===l}));if(e[a].funcsSettings.push({fid:Object(g.a)(),funcName:"",functionP:""}),t)v({type:"UPDATE_STEPSETS",data:e});else{var c=Object(h.a)(u);c[n].linearSetting=e,m({type:"UPDATE_STEPSETS",data:c})}}()},children:Object(a.jsx)(je.a,{})})]},e.fid)}))})},Se=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"50ch"}},button:{margin:e.spacing(1)},customWidth:{maxWidth:500}}})),Te=function(e){var t=e.ifLinear,n=e.index,i=(e.mid,Se()),r=Object(c.useContext)(me),o=Object(f.a)(r,2),s=o[0],l=o[1],d=Object(c.useContext)(Oe),p=Object(f.a)(d,2),h=p[0],u=p[1],j=Object(c.useState)((function(){return t?h:s[n].linearSetting})),b=Object(f.a)(j,2),g=b[0],m=b[1];Object(c.useEffect)((function(){m(t?h:s[n].linearSetting)}),[h,s]);return Object(a.jsx)(O.a,{maxWidth:"sm",children:Object(a.jsx)("div",{className:i.root,children:g.map((function(e,c){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:["stepSet ",c+1]}),Object(a.jsx)(R.a,{title:Object(a.jsx)(A.a,{variant:"body2",children:"describe main work in this stepSet, eg.'_load'"}),classes:{tooltip:i.customWidth},children:Object(a.jsx)(T.a,{error:e.stepIDCheck,name:"stepID",label:"stepID",variant:"filled",helperText:e.stepIDCheck?"The field cannot be empty. Please enter a value":null,value:e.stepID,onChange:function(a){return function(e,a){var c=g.map((function(t){return e===t.id&&(t[a.target.name]=a.target.value,t[a.target.name+"Check"]=!1),t}));if(t)u({type:"UPDATE_STEPSETS",data:c});else{var i=s;i[n].linearSetting=c,l({type:"UPDATE_STEPSETS",data:i})}m(c)}(e.id,a)}})}),Object(a.jsx)(ve,{ifLinear:t,index:n,indexm:c,classes:i,mid:e.id,funcsSettings:e.funcsSettings})]},e.id)}))})})},_e=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},formControl:{margin:e.spacing(1),minWidth:200}}})),ye=function(){var e=_e(),t=Object(c.useContext)(me),n=Object(f.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(1),s=Object(f.a)(o,2),l=s[0],d=s[1],p=function(e,t){var n=i.map((function(n){return e===n.id&&(n[t.target.name]=t.target.value,n[t.target.name+"Check"]=!1),n}));r({type:"UPDATE_STEPSETS",data:n})};return Object(a.jsx)(O.a,{maxWidth:"sm",children:Object(a.jsx)("form",{className:e.root,children:i.map((function(t,n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:["Pipe-segment ",n+1]}),Object(a.jsx)(T.a,{error:t.stepIDCheck,name:"stepID",label:"pipeSegment Description Label",variant:"filled",helperText:t.stepIDCheck?"The field cannot be empty. Please enter a value":"describe main work in this pipeSegment, eg.'_load'",value:t.stepID,onChange:function(e){return p(t.id,e)}}),Object(a.jsx)("h5",{children:"Define hierarchy"}),Object(a.jsx)(T.a,{error:t.pipeSegmentIDCheck,name:"pipeSegmentID",label:"pipeSegment ID",variant:"filled",helperText:t.pipeSegmentIDCheck?"The field cannot be empty. Please enter a value":"ID of this pipeSegment, eg.'pipe2'",value:t.pipeSegmentID,onChange:function(e){return p(t.id,e)}}),Object(a.jsx)(T.a,{error:t.pipeSegment_srcidCheck,name:"pipeSegment_srcid",label:"pipeSegment Srcid",variant:"filled",helperText:t.pipeSegment_srcidCheck?"The field cannot be empty. Please enter a value":"Describe the hierarchy relationship between other pipeSegment, you should input [Set Function ID] of the previously executed pipe, for example, if the current pipeSegment runs after pipe2, then the input should be 'pipe2', the first pipeSegment doesn't need this, leave it empty is ok.",value:t.pipeSegment_srcid,onChange:function(e){return p(t.id,e)}}),Object(a.jsx)("h5",{children:"Define pipeline"}),Object(a.jsxs)(v.a,{variant:"outlined",className:e.formControl,children:[Object(a.jsxs)(C.a,{children:[" ","stepSet number"]}),Object(a.jsx)(x.a,{native:!0,value:l,onChange:function(e){return function(e,t){var n=e.target.value;if(l<n){for(var a=Object(h.a)(i),c=l;c<n;c++)a[t].linearSetting.push({id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]});r({type:"UPDATE_STEPSETS",data:a}),d(n)}else if(l>n&&n>=1){for(var o=Object(h.a)(i),s=0;s<l-n;s++)o[t].linearSetting.pop();r({type:"UPDATE_STEPSETS",data:o}),d(n)}}(e,n)},label:"stepSet number",inputProps:{name:"stepNum"},children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),Object(a.jsx)(Te,{ifLinear:!1,index:n,mid:t.id})]},t.id)}))})})},ke=function(e,t){var n=new Array([]),a="",c={},i=new Array([]);return e.checkedHYDRA&&(n.push("HYDRA = true;"),n.push("PARAM = param_sweep_setup(project_dir);"),n.push("Cfg.HYDRA.ifapply = HYDRA;"),n.push("Cfg.HYDRA.chanloc = '".concat(e.eegChanloc,"';")),n.push("Cfg.HYDRA.PARAM = PARAM;"),n.push("Cfg.HYDRA.FULL_CLEAN_SEED = false;"),e.checkHydraTimeRange&&!e.checkHydraCleanSeed?(n.push("Cfg.HYDRA.provide_seed_timerange = true;"),n.push("Cfg.HYDRA.cleanseed_timerange = ".concat(e.checkHydraTimeRange,";"))):e.checkHydraCleanSeed&&!e.checkHydraTimeRange&&(n.push("Cfg.HYDRA.provide_seed_timerange = false;"),n.push("Cfg.HYDRA.seed_fname = ".concat(e.checkHydraCleanSeed,";")))),t.forEach((function(e,t){var n,r=new Array([]),o=new Array([]),s="",l="@sbf_"+e.subfID+", ";console.log(l),a+=l,0==t?(c[e.subfID]={0:"".concat(1,e.stepID),1:""},n=""):(c[e.subfID]={0:"".concat(1,e.stepID),1:"".concat(c[e.subf_srcid][1],e.subf_srcid,"#")},n="".concat(c[e.subfID][1],c[e.subf_srcid][0])),console.log(n),e.funcsSettings.forEach((function(e){s+="@".concat(e.funcName,", ");var t=e.funcName;t&&(t=t.slice(5,t.length)),o.push("out.".concat(t,"=struct(").concat(e.funcP,")"))})),r.push("stepSet(".concat(t+1,").id = [num2str(").concat(t+1,"), '").concat(e.stepID,"'];")),r.push("stepSet(".concat(t+1,").funH{").concat(s,"};")),console.log([r.join("\n")]),console.log(o);var d=new Array("function [Cfg, out] = sbf_".concat(e.subfID,"(Cfg)"),"   %%%%%%%% Define hierarchy %%%%%%%%","   Cfg.id = '".concat(e.subfID,"';"),"   Cfg.srcid = {".concat(n,"};"),"   %%%%%%%% Define pipeline %%%%%%%%","   i = 1; %stepSet 1","   ".concat(r.join("\n")),"   ","   ".concat([o.join("\n")]),"   Cfg.pipe.runSets = {stepSet(:).id};","   Cfg.pipe.stepSets = stepSet;","end");i.push("".concat(d.join("\n")))})),a="pipeArr = {".concat(a,"};"),new Array("pipeline_name = '".concat(e.pipelineName,"';"),"FILE_ROOT = mfilename('fullpath');","reporoot = FILE_ROOT(1:strfind(FILE_ROOT, fullfile('ctap', 'templates', '".concat(e.projectRoot,"', 'ctap_linear_template')) - 1);"),"project_dir = FILE_ROOT(1:strfind(FILE_ROOT, fullfile('ctap_linear_template')) - 1);","data_dir = append(reporoot,'ctap/data/test_data');","PREPRO = true;","STOP_ON_ERROR = false;","OVERWRITE_OLD_RESULTS = true;","[Cfg, ~] = sbf_cfg(project_dir, pipeline_name);","Cfg.grfx.on = false;","Cfg.MC = get_meas_cfg_MC(Cfg, data_dir, 'eeg_ext', '".concat(e.eegType,"', 'sbj_filt', ").concat(e.sbj_filt,");"),"".concat(n.join("\n")),"clear Pipe;","".concat(a),"runps = 1:length(pipeArr);","if PREPRO","   CTAP_pipeline_brancher(Cfg, pipeArr, 'runPipes', runps, 'dbg', STOP_ON_ERROR, 'ovw', OVERWRITE_OLD_RESULTS);","end","%% Subfunctions","function [Cfg, out] = sbf_cfg(project_root_folder, ID)","   Cfg.id = ID;","   Cfg.srcid = {''};","   Cfg.env.paths.projectRoot = project_root_folder;","   % Define important directories and files","   Cfg.env.paths.branchSource = '';","   Cfg.env.paths.ctapRoot = fullfile(Cfg.env.paths.projectRoot, Cfg.id);","   Cfg.env.paths.analysisRoot = Cfg.env.paths.ctapRoot;","   Cfg.eeg.chanlocs = '".concat(e.eegChanloc,"';"),"   Cfg.eeg.reference = ".concat(e.eegReference,";"),"   Cfg.eeg.veogChannelNames = ".concat(e.eegVeogChannelNames,";"),"   Cfg.eeg.heogChannelNames = ".concat(e.eegHeogChannelNames,";"),"   out = struct([]);","end","".concat(i.join("\n")))},Ee=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)},button:{margin:e.spacing(2)}}}));function De(){var e=Ee(),t=Object(c.useContext)(Oe),n=Object(f.a)(t,2),i=n[0],r=n[1],o=Object(c.useContext)(me),s=Object(f.a)(o,2),l=s[0],d=s[1],m=Object(c.useState)(0),T=Object(f.a)(m,2),_=T[0],y=T[1],k=Object(c.useState)(""),E=Object(f.a)(k,2),D=E[0],P=E[1],R=Object(c.useState)(1),A=Object(f.a)(R,2),I=A[0],N=A[1],H=Object(c.useState)(!1),w=Object(f.a)(H,2),L=w[0],B=w[1],G=Object(c.useReducer)((function(e,t){return Object(b.a)(Object(b.a)({},e),t)}),{checkedLinear:!0,checkedBranch:!1,checkedHYDRA:!0,HydraOptionA:!0,HydraOptionB:!1,checkHydraTimeRange:"",checkHydraCleanSeed:"",pipelineName:"",projectRoot:"",sbj_filt:"",eegType:"",eegChanloc:"",eegReference:"",eegVeogChannelNames:"",eegHeogChannelNames:""}),F=Object(f.a)(G,2),U=F[0],Y=F[1],W=Object(c.useReducer)((function(e,t){return Object(b.a)(Object(b.a)({},e),t)}),{checkHydraTimeRange:!1,checkHydraCleanSeed:!1,pipelineName:!1,projectRoot:!1,sbj_filt:!1,eegType:!1,eegChanloc:!1,eegReference:!1,eegVeogChannelNames:!1,eegHeogChannelNames:!1}),M=Object(f.a)(W,2),V=M[0],q=M[1],z=Object(c.useState)((function(){return U.checkedLinear?i:l})),J=Object(f.a)(z,2),Q=J[0],X=J[1];Object(c.useEffect)((function(){U.checkedLinear?X(i):X(l)}),[i,l]),Object(c.useEffect)((function(){if(N(1),U.checkedLinear){var e=[{id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]}];r({type:"UPDATE_STEPSETS",data:e}),X(e)}else{var t=[{id:Object(g.a)(),pipeSegment_srcid:"",pipeSegmentID:"",stepID:"",pipeSegment_srcidCheck:!1,pipeSegmentIDCheck:!1,stepIDCheck:!1,linearSetting:[{id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]}]}];d({type:"UPDATE_STEPSETS",data:t}),X(t)}}),[U.checkedLinear]),Object(c.useEffect)((function(){P(""),B(!1)}),[U.checkedLinear]),Object(c.useEffect)((function(){localStorage.getItem("basicInfoInput")&&Y(JSON.parse(localStorage.getItem("basicInfoInput")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("basicInfoInput",JSON.stringify(U))}),[U]);var Z=function(e,t){var n;n=e.checkedLinear?K(e,t):ke(e,t);var a=new Blob([n.join("\n")],{type:"text/plain"});return""!==D&&window.URL.revokeObjectURL(D),window.URL.createObjectURL(a)};function ee(){return(ee=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(U,Q);case 2:t=e.sent,P(t),B(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:0===_?Object(a.jsx)($,{inputValue:U,setBasicInfoInput:Y,basicInfoInputCheck:V,setBasicInfoInputCheck:q}):1===_?Object(a.jsxs)(O.a,{children:[U.checkedLinear?Object(a.jsx)("h3",{children:"Linear Pipeline Setting"}):Object(a.jsx)("h3",{children:"Branch Pipeline Setting"}),Object(a.jsxs)(v.a,{variant:"outlined",className:e.formControl,children:[Object(a.jsxs)(C.a,{children:[" ",U.checkedBranch?"pipeSegments":"stepSet number"]}),Object(a.jsx)(x.a,{native:!0,value:I,onChange:function(e){return function(e){var t=e.target.value;if(I<t){var n=Object(h.a)(Q);if(U.checkedLinear){for(var a=I;a<t;a++)n.push({id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]});r({type:"UPDATE_STEPSETS",data:n}),X(n)}else{for(var c=I;c<t;c++)n.push({id:Object(g.a)(),pipeSegment_srcid:"",pipeSegmentID:"",stepID:"",pipeSegment_srcidCheck:!1,pipeSegmentIDCheck:!1,stepIDCheck:!1,linearSetting:[{id:Object(g.a)(),stepID:"",stepIDCheck:!1,funcsSettings:[{fid:Object(g.a)(),funcName:"",funcP:"",funcNameCheck:!1}]}]});d({type:"UPDATE_STEPSETS",data:n}),X(n)}N(t)}else if(I>t&&t>=1){console.log(Q);for(var i=Object(h.a)(Q),o=0;o<I-t;o++)i.pop();U.checkedLinear?(r({type:"UPDATE_STEPSETS",data:i}),X(i)):(d({type:"UPDATE_STEPSETS",data:i}),X(i)),N(t)}}(e)},label:"stepSet number",inputProps:{name:"stepNum"},children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),U.checkedLinear?Object(a.jsx)(Te,{ifLinear:!0,index:0,mid:0}):Object(a.jsx)(ye,{})]}):2===_?Object(a.jsxs)("div",{children:[Object(a.jsx)(S.a,{className:e.button,variant:"contained",color:"primary",type:"submit",onClick:function(){return ee.apply(this,arguments)},children:"Generate"}),Object(a.jsx)("div",{children:L?Object(a.jsx)("a",{download:"ctap_linear_template.m",href:D,className:e.downloadButton,children:" download "}):null})]}):null}),Object(a.jsx)(le,{activeStep:_,handleBack:function(){y((function(e){return e-1}))},handleNext:function(){(function(){var e=!0,t={};if(0===_){for(var n=Object(b.a)({},V),a=0,c=Object.entries(n);a<c.length;a++){var i=Object(f.a)(c[a],2),o=i[0];i[1],null!==U[o]&&0!==U[o].length||(t=U.checkedHYDRA?"checkHydraTimeRange"===o&&U.HydraOptionB||"checkHydraCleanSeed"===o&&U.HydraOptionA?Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},o,!1)):Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},o,!0)):"checkHydraTimeRange"===o||"checkHydraCleanSeed"===o?Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},o,!1)):Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},o,!0)))}e=Object.values(t).every((function(e){return!1===e})),q(Object(b.a)(Object(b.a)({},V),t))}else if(1===_){var s=Q.map((function(t,n){return t.stepID.length?t.stepIDCheck=!1:(t.stepIDCheck=!0,e=!1),U.checkedBranch?(0===n?(t.pipeSegment_srcidCheck=!1,e=!0,t.pipeSegmentID.length?t.pipeSegmentIDCheck=!1:(t.pipeSegmentIDCheck=!0,e=!1)):(t.pipeSegment_srcid.length?t.pipeSegment_srcidCheck=!1:(t.pipeSegment_srcidCheck=!0,e=!1),t.pipeSegmentID.length?t.pipeSegmentIDCheck=!1:(t.pipeSegmentIDCheck=!0,e=!1)),t.linearSetting.forEach((function(t){console.log(t.stepID.length),t.stepID.length?t.stepIDCheck=!1:(t.stepIDCheck=!0,e=!1),t.funcsSettings.forEach((function(t){null==t.funcName||t.funcName.length?t.funcNameCheck=!1:(t.funcNameCheck=!0,e=!1)}))}))):t.funcsSettings.forEach((function(t){t.funcName.length?t.funcNameCheck=!1:(t.funcNameCheck=!0,e=!1)})),t}));r({type:"UPDATE_STEPSETS",data:s})}return e})()?y((function(e){return e+1})):alert("check your input")},handleReset:function(){y(0)}})]})}var Pe=n(174),Re=n(123),Ae=Object(m.a)((function(e){return{root:{width:"100%",marginTop:50},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}})),Ie=Object(m.a)({root:{color:"#eaeaf0",display:"flex",height:30,alignItems:"center"},active:{color:"#784af4"},circle:{width:24,height:24,borderRadius:"50%",backgroundColor:"currentColor"},completed:{color:"#784af4",zIndex:1,fontSize:24}});function Ne(e){var t=Ie(),n=e.active,c=e.completed;return Object(a.jsx)("div",{className:Object(Z.a)(t.root,Object(j.a)({},t.active,n)),children:c?Object(a.jsx)(ce.a,{className:t.completed}):Object(a.jsx)("div",{className:t.circle})})}function He(e){switch(e){case 0:return Object(a.jsx)("div",{style:{marginLeft:"2rem",marginTop:"1rem"},children:Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["Follow the instruction of ",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/bwrc/ctap",children:"the CTAP repo"}),", download CTAP and setup your MATLAB work environment"]})});case 1:return Object(a.jsxs)("div",{style:{marginLeft:"2rem",marginTop:"1rem"},children:[Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["You need to have latest EEGLAB added to your Matlab path (",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://sccn.ucsd.edu/eeglab/downloadtoolbox.php",children:"instructions here"}),")."]}),Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["Everytime before run CTAP scripts, type ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:"eeglab"})})," and press enter on the Matlab command line."]})]});case 2:return Object(a.jsxs)("div",{style:{marginLeft:"2rem",marginTop:"1rem"},children:[Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["To generate CTAP example script, you need create a new project folder under ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:"~/ctap/templates"})}),"."]}),Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["After that, copy/cut your test data to ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:"~/ctap/data/test_data"})})]}),Object(a.jsxs)(A.a,{variant:"body1",align:"left",children:["If you have a corrsponding channel location file, please copy it to ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:"~/ctap/res"})}),", and add its name manually in the later process"]})]});default:return"Unknown step"}}var we=function(){var e=Ae(),t=i.a.useState(0),n=Object(f.a)(t,2),c=n[0],r=n[1],o=["Get CTAP Ready","Get EEGLAB Ready","Create Execution Folder"],l=function(){r((function(e){return e+1}))},d=function(){r((function(e){return e-1}))};return Object(a.jsxs)(O.a,{maxWidth:"sm",children:[Object(a.jsx)("div",{style:{marginTop:70},children:Object(a.jsx)(A.a,{variant:"h5",children:"The CTAP Code Generation Tool is used to show users how CTAP code works and some core ideas of CTAP programming."})}),Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(ee.a,{activeStep:c,orientation:"vertical",children:o.map((function(t,n){return Object(a.jsxs)(te.a,{children:[Object(a.jsx)(ne.a,{StepIconComponent:Ne,children:Object(a.jsx)(A.a,{variant:"h6",children:t})}),Object(a.jsxs)(Pe.a,{children:[He(n),Object(a.jsx)("div",{className:e.actionsContainer,children:Object(a.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(a.jsx)(S.a,{disabled:0===c,onClick:d,className:e.button,children:"Back"}),Object(a.jsx)(S.a,{variant:"contained",color:"primary",onClick:l,className:e.button,children:c===o.length-1?"Finish":"Next"})]})})]})]},t)}))}),c===o.length&&Object(a.jsxs)(Re.a,{square:!0,elevation:0,className:e.resetContainer,children:[Object(a.jsx)(A.a,{variant:"h6",children:"All steps completed - Now Let's step to"}),Object(a.jsx)(A.a,{variant:"h6",children:"CTAP CODE GNERATION!"}),Object(a.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(a.jsx)(S.a,{onClick:function(){r(0)},className:e.button,children:"Reset"}),Object(a.jsx)(S.a,{variant:"contained",color:"primary",className:e.button,children:Object(a.jsx)(s.c,{to:"/start",style:{textDecoration:"none",color:"inherit"},children:"Proceed"})})]})]})]})]})};var Le=function(){return Object(a.jsx)(xe,{children:Object(a.jsxs)(s.b,{basename:"/",children:[Object(a.jsx)(A.a,{variant:"h2",align:"center",style:{marginTop:"2rem"},children:"CTAP Code Generation Tool"}),Object(a.jsx)("h2",{align:"center"}),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:we}),Object(a.jsx)(l.a,{path:"/start",component:De})]})]})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};o.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(Le,{})}),document.getElementById("root")),Be()}},[[120,1,2]]]);
//# sourceMappingURL=main.75348455.chunk.js.map