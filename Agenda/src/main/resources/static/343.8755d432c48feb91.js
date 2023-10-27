"use strict";(self.webpackChunkagenda_app=self.webpackChunkagenda_app||[]).push([[343],{5309:(w,l,i)=>{i.r(l),i.d(l,{ContatoModule:()=>y});var h=i(6895),m=i(9299),a=i(4006),C=i(6561),t=i(4650),f=i(3672),p=i(5412),M=i(4859),O=i(7392),s=i(9549),P=i(4144),u=i(3546);let d=(()=>{class e{constructor(n,o,c,b,Z){this.formBuilder=n,this.service=o,this.router=c,this.dialog=b,this.route=Z,this.contato={},this.formContato=this.formBuilder.group({nome:[null,a.kI.required],email:[null,[a.kI.compose([a.kI.email,a.kI.required])]],numero:[null,[a.kI.compose([a.kI.minLength(9),a.kI.maxLength(14),a.kI.required])]]})}ngOnInit(){let n;this.route.params.subscribe(o=>n=o.id),n&&this.service.getById(n).subscribe({next:o=>{this.contato=o,this.patchForm()},error:o=>this.openDialog("Erro!",o.error)})}patchForm(){this.contato&&this.formContato.patchValue({nome:this.contato.nome,email:this.contato.email,numero:this.contato.numero})}submit(){if(this.formContato.valid){const n=this.formContato.value;this.contato.nome=n.nome,this.contato.email=n.email,this.contato.numero=n.numero,null!=this.contato.id?this.update(this.contato,this.contato.id):this.create(this.contato)}}create(n){this.service.create(n).subscribe({next:o=>{this.openDialog("Sucesso!","Contato "+this.contato.nome+" criado com sucesso!"),this.router.navigate(["/"])},error:o=>this.openDialog("Erro!",o.error)})}update(n,o){this.service.update(n,o).subscribe({next:c=>{this.openDialog("Sucesso!","Contato "+this.contato.nome+" atualizado com sucesso!"),this.router.navigate(["/"])},error:c=>this.openDialog("Erro!",c.error)})}openDialog(n,o){this.dialog.open(C.a,{data:{title:n,message:o}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(f.C),t.Y36(m.F0),t.Y36(p.uw),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-contato"]],decls:33,vars:2,consts:[[1,"container"],[1,"summary-card"],[1,"form-box"],[3,"formGroup","submit"],[1,"full-width"],["type","text","matInput","","placeholder","Nome do contato","formControlName","nome"],["matSuffix",""],["type","email","matInput","","placeholder","mail@email.com","formControlName","email"],["type","number","matInput","","placeholder","4799999999","formControlName","numero"],[1,"buttons"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"main")(1,"div",0)(2,"mat-card",1)(3,"mat-card-content")(4,"h1"),t._uU(5,"Contato"),t.qZA(),t.TgZ(6,"span"),t._uU(7,"Aqui voc\xea pode criar um novo contato."),t.qZA()()(),t.TgZ(8,"div",2)(9,"mat-card")(10,"mat-card-content")(11,"form",3),t.NdJ("submit",function(){return o.submit()}),t.TgZ(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Nome"),t.qZA(),t._UZ(15,"input",5),t.TgZ(16,"mat-icon",6),t._uU(17,"user"),t.qZA()(),t.TgZ(18,"mat-form-field",4)(19,"mat-label"),t._uU(20,"Email"),t.qZA(),t._UZ(21,"input",7),t.TgZ(22,"mat-icon",6),t._uU(23,"email"),t.qZA()(),t.TgZ(24,"mat-form-field",4)(25,"mat-label"),t._uU(26,"Telefone"),t.qZA(),t._UZ(27,"input",8),t.TgZ(28,"mat-icon",6),t._uU(29,"mode_edit"),t.qZA()(),t.TgZ(30,"div",9)(31,"button",10),t._uU(32," Salvar "),t.qZA()()()()()()()()),2&n&&(t.xp6(11),t.Q6J("formGroup",o.formContato),t.xp6(20),t.Q6J("disabled",o.formContato.invalid||(o.formContato.touched||o.formContato.dirty)&&o.formContato.invalid))},dependencies:[M.lW,O.Hw,s.KE,s.hX,s.R9,P.Nt,u.a8,u.dn,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#efefef}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:2%;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]{width:80%;background-color:transparent;box-shadow:none}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;font-weight:550}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{margin-top:2%;height:100%;width:100%;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:30%;min-width:320px;height:80%;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:1rem;padding:70px 50px 50px;display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:280px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{height:50%;width:70%;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;height:50px}"]}),e})();const v=[{path:"",redirectTo:"new",pathMatch:"full"},{path:"new",component:d},{path:"edit/:id",component:d}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(v),m.Bz]}),e})();var g=i(8254);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,x,g.m,a.UX,a.u5,g.m]}),e})()}}]);