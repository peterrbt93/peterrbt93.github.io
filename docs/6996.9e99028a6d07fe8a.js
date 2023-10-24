"use strict";(self.webpackChunkMarieke=self.webpackChunkMarieke||[]).push([[6996],{7541:(Z,_,l)=>{l.r(_),l.d(_,{CitiesFormModule:()=>i});var h=l(6814),d=l(95),m=l(3989),g=l(9162),t=l(4769);function C(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1," Name is required. "),t.qZA())}function v(e,a){if(1&e&&(t.TgZ(0,"div",33),t.YNc(1,C,2,0,"div",34),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.name.errors.required)}}const k=[{path:"",component:(()=>{class e extends g.i{constructor(o){super(o)}initialize(){this.endpoint="cities",this.titleForm="City Form",this.icon="fas fa-city",super.initialize()}createForm(){this.form=this.fb.group({id:null,name:[null,[d.kI.required]],capital:null,wikipediaLink:null}),super.createForm()}resetForm(){this.item.id=null,this.item.name=null,this.item.capital=null,this.item.wikipediaLink=null,super.resetForm()}setFormValue(o){this.form.controls.id.setValue(o.id),this.form.controls.name.setValue(o.name),this.form.controls.capital.setValue(o.capital),this.form.controls.wikipediaLink.setValue(o.wikipediaLink),super.setFormValue(o)}get name(){return this.form.get("name")}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-cities-form"]],features:[t.qOj],decls:54,vars:21,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col"],[1,"d-flex","md-form","form-group","mt-0"],[1,"disabled","clearfix","d-none","d-md-block","pt-2","ml-4"],[1,"text-primary","font-weight-bold","mr-4"],[1,"navbar-btn","waves-effect","waves-light","ml-auto","px-3","pt-2"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-plus","fa-lg"],[1,"fas","fa-save","fa-lg"],[1,"fas","fa-copy","fa-lg"],[1,"fas","fa-trash-alt","fa-lg"],[1,"form-row"],[1,"form-group","col-md-2"],["for","id",1,"text-info"],["type","text","formControlName","id","placeholder","","id","id","readonly","",1,"text-info","form-control"],[1,"form-group","col-md-6"],["for","name",1,"text-primary","font-weight-bold"],["type","text","formControlName","name","placeholder","","id","name",1,"text-primary","form-control","font-weight-bold"],["class","alert alert-primary mt-2",4,"ngIf"],[1,"form-check"],["formControlName","capital","type","checkbox","id","capital",1,"form-check-input"],["for","capital",1,"form-check-label"],["for","wikipediaLink",1,"text-success"],[1,"input-group"],[1,"input-group-prepend"],["id","wikipediaLinkGroupPrepend",1,"input-group-text"],[3,"href"],[1,"text-success","fab","fa-wikipedia-w"],["type","text","formControlName","wikipediaLink","placeholder","","id","wikipediaLink","aria-describedby","wikipediaLinkGroupPrepend",1,"text-success","form-control"],[1,"alert","alert-primary","mt-2"],[4,"ngIf"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",0)(6,"div",5)(7,"div",6)(8,"div",7),t._UZ(9,"i"),t.TgZ(10,"span",8),t._uU(11),t.qZA(),t._UZ(12,"i"),t.TgZ(13,"span"),t._uU(14,"Datesource : "),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"a",9)(18,"button",10),t.NdJ("click",function(){return n.onCreate()}),t._UZ(19,"i",11),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return n.onUpdate()}),t._UZ(21,"i",12),t.qZA(),t.TgZ(22,"button",10),t.NdJ("click",function(){return n.onCopy()}),t._UZ(23,"i",13),t.qZA(),t.TgZ(24,"button",10),t.NdJ("click",function(){return n.onDelete()}),t._UZ(25,"i",14),t.qZA()()()()(),t.TgZ(26,"div",0)(27,"div",5)(28,"div",15)(29,"div",16)(30,"label",17),t._uU(31,"Id"),t.qZA(),t._UZ(32,"input",18),t.qZA(),t.TgZ(33,"div",19)(34,"label",20),t._uU(35,"Name"),t.qZA(),t._UZ(36,"input",21),t.YNc(37,v,2,1,"div",22),t.qZA()(),t.TgZ(38,"div",15)(39,"div",16)(40,"div",23),t._UZ(41,"input",24),t.TgZ(42,"label",25),t._uU(43," Capital "),t.qZA()()()(),t.TgZ(44,"div",15)(45,"div",19)(46,"label",26),t._uU(47,"wikipedia"),t.qZA(),t.TgZ(48,"div",27)(49,"div",28)(50,"span",29)(51,"a",30),t._UZ(52,"i",31),t.qZA()()(),t._UZ(53,"input",32),t.qZA()()()()()()()()()()),2&s&&(t.xp6(4),t.Q6J("formGroup",n.form),t.xp6(5),t.Gre("",n.icon," text-primary mr-2"),t.xp6(2),t.Oqu(n.titleForm),t.xp6(1),t.Gre("fas fa-database ",n.datasourceColor," mr-2 ml-4 mr-2"),t.xp6(1),t.Gre("",n.datasourceColor," ml-2"),t.xp6(2),t.Gre("",n.datasourceColor," ml-2"),t.xp6(1),t.Oqu(n.datasource),t.xp6(2),t.Q6J("disabled",!n.api),t.xp6(2),t.Q6J("disabled",n.form.invalid||!n.api),t.xp6(2),t.Q6J("disabled",n.form.invalid||!n.api||null==n.item.id),t.xp6(2),t.Q6J("disabled",n.form.invalid||!n.api||null==n.item.id),t.xp6(13),t.Q6J("ngIf",n.name.invalid),t.xp6(14),t.MGl("href","https://en.wikipedia.org/wiki/",n.form.value.wikipediaLink,"",t.LSH))},dependencies:[h.O5,d._Y,d.Fj,d.Wl,d.JJ,d.JL,d.sg,d.u]})}return e})()}];let r=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(k),m.Bz]})}return e})(),i=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[h.ez,r,d.UX,d.u5]})}return e})()},8141:(Z,_,l)=>{l.d(_,{L:()=>v});var h=l(9862),d=l(2096),m=l(6306),g=l(7398),t=l(4769);const C={headers:new h.WM({"Content-Type":"application/json"})};let v=(()=>{class c{constructor(r){this.http=r}filterJsonItem(r,i){let e=null;return r.map((a,o,s)=>{const n=parseInt(i,10);s[o].id===n&&(e=s[o])}),e}filterJsonItemsCount(r,i){let e=0;if(void 0!==i&&null!=i){const a=i.toString().toLowerCase();e=r.filter(s=>0===s.name.toLowerCase().indexOf(a)).length}else e=r.length;return{count:e}}filterJsonItems(r,i,e,a){let o;if(void 0!==i&&null!=i){const u=i.toString().toLowerCase();o=r.filter(f=>0===f.name.toLowerCase().indexOf(u))}else o=r;const s=e*(a-1),n=e*(a-1)+e-1,p=[];return o.map((u,f)=>{f>=s&&f<=n&&p.push(o[f])}),p}getItemsCount(r,i,e){let a="";void 0!==e&&""!==e&&null!==e&&(a="?q="+e);const o=(i+=r?"/count":".json")+a;let s;return s=r?this.http.get(o).pipe((0,m.K)(this.handleError("getItems",[]))):this.http.get(o).pipe((0,g.U)(n=>this.filterJsonItemsCount(n,e)),(0,m.K)(this.handleError("getItems",[]))),s}getItems(r,i,e,a,o){r||(i+=".json");let s="";if(void 0!==e||void 0!==a||void 0!==o){let f;f=0,0===a&&(a=1),void 0!==a&&(f=(a-1)*e),void 0!==o&&""!==o&&null!==o&&(s="?q="+o),s=""!==s?s+"&limit="+e+"&offset="+f:"?limit="+e+"&offset="+f}const n=i+s;let p;return p=r?this.http.get(n).pipe((0,m.K)(this.handleError("getItems",[]))):this.http.get(n).pipe((0,g.U)(u=>this.filterJsonItems(u,o,e,a)),(0,m.K)(this.handleError("getItems",[]))),p}getItem(r,i,e){r||(i+=".json");let a={};return void 0!==e&&(a=r?this.http.get(i+"/"+e).pipe((0,m.K)(this.handleError(`getItem id=${e}`))):this.http.get(i).pipe((0,g.U)(s=>this.filterJsonItem(s,e)),(0,m.K)(this.handleError("getItems",[])))),a}addItem(r,i){const e=JSON.stringify(i);return this.http.post(r,e,C).pipe((0,m.K)(this.handleError("addItem")))}updateItem(r,i,e){return this.http.put(e+"/"+i,r,C).pipe((0,m.K)(this.handleError("updateItem")))}deleteItem(r,i){return this.http.delete(r+"/"+i,C).pipe((0,m.K)(this.handleError("deleteItem")))}handleError(r="operation",i){return e=>(console.error(`${r} failed: ${e.message}`),(0,d.of)(i))}static#t=this.\u0275fac=function(i){return new(i||c)(t.LFG(h.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);