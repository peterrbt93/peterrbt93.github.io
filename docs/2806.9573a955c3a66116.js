"use strict";(self.webpackChunkMarieke=self.webpackChunkMarieke||[]).push([[2806],{2806:(M,f,l)=>{l.r(f),l.d(f,{BoxofficeModule:()=>T});var c=l(6814),s=l(3989),p=l(553),t=l(4769),u=l(2096),g=l(6306),b=l(9862);let x=(()=>{class n{constructor(e){this.http=e}getItems(e){return this.http.get(e).pipe((0,g.K)(this.handleError("getItems",[])))}handleError(e="operation",o){return a=>(console.error(`${e} failed: ${a.message}`),(0,u.of)(o))}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(b.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var d=l(95),h=l(6593);let _=(()=>{class n{constructor(e){this.sanitizer=e}transform(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(h.H7,16))};static#e=this.\u0275pipe=t.Yjl({name:"safe",type:n,pure:!0})}return n})();function Z(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",42)(2,"a",43),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(3),t.qZA()(),t.TgZ(4,"td",16)(5,"a",43),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._UZ(6,"i",44),t.qZA()(),t.TgZ(7,"td",45)(8,"a",43),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(9),t.qZA()(),t.TgZ(10,"td",46)(11,"a",47),t._UZ(12,"i",48),t.qZA()(),t.TgZ(13,"td",49)(14,"a",50),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(15),t.qZA()(),t.TgZ(16,"td",51)(17,"a",50),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(18),t.ALo(19,"number"),t.qZA()(),t.TgZ(20,"td",51)(21,"a",50),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(22),t.ALo(23,"number"),t.qZA()(),t.TgZ(24,"td",51)(25,"a",50),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(26),t.ALo(27,"number"),t.qZA()(),t.TgZ(28,"td",51)(29,"a",50),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.onSelectItemTrailer(i))}),t._uU(30),t.ALo(31,"number"),t.qZA()()()}if(2&n){const e=m.$implicit,o=m.index;t.xp6(3),t.Oqu(o+1),t.xp6(6),t.Oqu(e.name),t.xp6(2),t.MGl("href","https://en.wikipedia.org/wiki/",e.wikipediaLink,"",t.LSH),t.xp6(4),t.Oqu(e.releaseDate),t.xp6(3),t.hij("$ ",t.lcZ(19,8,e.worldwide)," "),t.xp6(4),t.hij("$ ",t.lcZ(23,10,e.international)," "),t.xp6(4),t.hij("$ ",t.lcZ(27,12,e.domestic)," "),t.xp6(4),t.hij("$ ",t.lcZ(31,14,e.budget)," ")}}function C(n,m){if(1&n&&(t.TgZ(0,"div",52),t._UZ(1,"iframe",53),t.ALo(2,"safe"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",t.lcZ(2,1,"https://www.youtube.com/embed/"+e.player),t.uOi)}}const y=[{path:"",component:(()=>{class n{constructor(e,o,a){this.router=e,this.itemsService=o,this.fb=a,this.formFilter=this.fb.group({shows:[!0],movies:[!0],clips:[!0],games:[!0]}),this.player="",this.playerLoaded=!1,this.items=[],this.itemsLoaded=!1,this.formFilter.setValue({shows:!0,movies:!0,clips:!0,games:!0})}ngOnInit(){this.getItems()}getItems(){this.itemsService.getItems(p.N.urlMovies).subscribe(o=>{this.itemsLoaded=!0,this.items=o})}onSelectItemTrailer(e){this.player=e.youtubeLink,this.playerLoaded=!0,void 0===this.modalPlayer&&(this.modalPlayer=new bootstrap.Modal(document.getElementById("exampleModal"),{keyboard:!0}),document.getElementById("exampleModal")?.addEventListener("hidden.bs.modal",this.onCloseModal.bind(this))),this.modalPlayer?.show()}onCloseModal(){this.player="",this.playerLoaded=!1}addItem(){this.router.navigate(["/movies",0])}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(s.F0),t.Y36(x),t.Y36(d.qu))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-boxoffice"]],decls:80,vars:2,consts:[[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col"],[1,"d-flex"],[1,"d-flex","me-auto"],["type","text","id","name","placeholder","movies ...",1,"form-control","me-2"],["type","button",1,"btn","nga-btn-boxoffice-primary","btn-sm","nga-btn-boxoffice"],[1,"fa","fa-search"],[1,"d-flex","me-auto","d-none","d-md-block"],[1,"pt-2","ml-4"],[2,"color","gray"],[1,"row","justify-content-center","nga-container"],[1,"table-responsive","pt-4"],[1,"table","table-hover","table-striped","table-bordered","table-sm"],[1,"text-info","font-weight-bold","text-center","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell",2,"cursor","pointer"],[1,"ms-1","fas","fa-arrows-alt-v","filterEnabled"],[1,"text-center","text-danger"],[1,"text-primary","font-weight-bold","text-center",2,"cursor","pointer"],[1,"ms-1","fas","fa-long-arrow-alt-up","filterEnabled"],[1,"text-success","font-weight-bold","text-center","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell"],[1,"font-weight-bold","text-center",2,"cursor","pointer"],[1,"ms-1","fas","fas","fa-arrows-alt-v","filterEnabled"],[1,"text-center","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell",2,"cursor","pointer"],[1,"ms-1","fas","fa-long-arrow-alt-up"],[4,"ngFor","ngForOf"],["aria-label","pagination"],[1,"pagination","pagination-sm","justify-content-center"],[1,"page-item"],["href","#","aria-label","Previous",1,"page-link"],["aria-hidden","true"],[1,"page-item","active"],["href","#",1,"page-link"],["href","#","aria-label","Next",1,"page-link"],["id","exampleModal","role","dialog","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header","clearfix","d-block","d-sm-none","d-flex","justify-content-center"],["type","button","data-bs-dismiss","modal",1,"btn","btn-sm","btn-outline-primary","btn-rounded","btn-md","ml-4"],[1,"modal-body"],["class","nga-embed nga-embed-youtube nga-z-depth",4,"ngIf"],[1,"modal-footer","justify-content-center"],["type","button","data-bs-dismiss","modal",1,"clearfix","d-none","d-sm-inline-block","d-md-inline-block","d-lg-inline-block","d-xl-inline-block","btn","btn-outline-primary","btn-sm","btn-rounded","btn-md"],[1,"text-info","text-center","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell"],[2,"cursor","pointer",3,"click"],[1,"fab","fa-youtube"],[1,"text-primary","font-weight-bold","text-center"],[1,"font-weight-bold","text-center","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell"],[2,"cursor","pointer",3,"href"],[1,"fab","fa-wikipedia-w","text-success","fw-bold"],[1,"font-weight-bold","text-center"],[3,"click"],[1,"text-end","d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell"],[1,"nga-embed","nga-embed-youtube","nga-z-depth"],["allowfullscreen","",1,"nga-embed-item",3,"src"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"input",5),t.TgZ(6,"button",6),t._UZ(7,"i",7),t.qZA()(),t.TgZ(8,"div",8)(9,"div",9)(10,"b")(11,"span",10),t._uU(12,"7 Movies"),t.qZA()()()()()()(),t.TgZ(13,"div",11)(14,"div",12)(15,"table",13)(16,"thead")(17,"tr")(18,"th",14),t._uU(19," Rank"),t._UZ(20,"i",15),t.qZA(),t.TgZ(21,"th",16),t._uU(22,"Trailer"),t.qZA(),t.TgZ(23,"th",17),t._uU(24,"Name"),t._UZ(25,"i",18),t.qZA(),t.TgZ(26,"th",19),t._uU(27," Wiki"),t.qZA(),t.TgZ(28,"th",20),t._uU(29,"Date"),t._UZ(30,"i",21),t.qZA(),t.TgZ(31,"th",22),t._uU(32," Worldwide"),t._UZ(33,"i",23),t.qZA(),t.TgZ(34,"th",22),t._uU(35," International"),t._UZ(36,"i",15),t.qZA(),t.TgZ(37,"th",22),t._uU(38," Domestic"),t._UZ(39,"i",15),t.qZA(),t.TgZ(40,"th",22),t._uU(41," Budget"),t._UZ(42,"i",21),t.qZA()()(),t.TgZ(43,"tbody"),t.YNc(44,Z,32,16,"tr",24),t.qZA()(),t.TgZ(45,"nav",25)(46,"ul",26)(47,"li",27)(48,"a",28)(49,"span",29),t._uU(50,"\xab"),t.qZA()()(),t.TgZ(51,"li",27)(52,"a",28)(53,"span",29),t._uU(54,"\u2039"),t.qZA()()(),t.TgZ(55,"li",30)(56,"a",31),t._uU(57,"2"),t.qZA()(),t.TgZ(58,"li",27)(59,"a",32)(60,"span",29),t._uU(61,"\u203a"),t.qZA()()(),t.TgZ(62,"li",27)(63,"a",32)(64,"span",29),t._uU(65,"\xbb"),t.qZA()()()()()()(),t.TgZ(66,"section")(67,"div",33)(68,"div",34)(69,"div",35)(70,"div",36)(71,"button",37)(72,"strong"),t._uU(73,"Close"),t.qZA()()(),t.TgZ(74,"div",38),t.YNc(75,C,3,3,"div",39),t.qZA(),t.TgZ(76,"div",40)(77,"button",41)(78,"strong"),t._uU(79,"Close"),t.qZA()()()()()()()()),2&o&&(t.xp6(44),t.Q6J("ngForOf",a.items),t.xp6(31),t.Q6J("ngIf",a.playerLoaded))},dependencies:[c.sg,c.O5,c.JJ,_],styles:['.nga-container[_ngcontent-%COMP%]{font-size:.9em}.nga-btn-boxoffice[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;padding:.5rem;font-size:.81rem;border:0;border-radius:.125rem}.nga-btn-boxoffice[_ngcontent-%COMP%]:hover, .nga-btn-boxoffice[_ngcontent-%COMP%]:active, .nga-btn-boxoffice[_ngcontent-%COMP%]:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;outline:0}.nga-btn-boxoffice-primary[_ngcontent-%COMP%]{border:2px solid #4285f4!important;color:#4285f4!important;background-color:transparent!important}.nga-card-filter[_ngcontent-%COMP%]{display:block;background-color:#fffc;box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;border-radius:2px;transition:all .2s ease-in-out;margin-top:20px}.nga-card-filter[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%]{width:91%;margin:0 auto;position:relative;top:-20px}.nga-card-filter[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%]   .nga-card-img[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 10px #000000a1;cursor:pointer}.nga-filterEnabled[_ngcontent-%COMP%]{color:#dee2e6}.nga-embed[_ngcontent-%COMP%]{position:relative;display:block;width:100%;padding:0;overflow:hidden}.nga-embed[_ngcontent-%COMP%]:before{display:block;content:""}.nga-embed[_ngcontent-%COMP%]   .nga-embed-item[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.nga-embed-youtube[_ngcontent-%COMP%]:before{padding-top:56.25%}.nga-z-depth[_ngcontent-%COMP%]{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026!important}']})}return n})()}];let v=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]})}return n})(),T=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.ez,v,d.u5,d.UX]})}return n})()}}]);