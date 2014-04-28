Ext.onReady(function() {
 
			function fnLogin() {
				Ext.getCmp('sbWinLogin').show();
				Ext.getCmp('frmLogin').on({
					beforeaction : function() {
						if (formLogin.getForm().isValid()) {
							//Ext.getCmp('winRegister').body.mask();
							Ext.getCmp('winLogin').body.mask();
						}
					}
				});
				if (formLogin.getForm().isValid()) {
					formLogin
							.getForm()
							.submit(
									{
										success : function() {
											window.location = "az";
										},
										failure : function(form, action) {
											//Ext.getCmp('winRegister').body.unmask(); 
											Ext.getCmp('winLogin').body
													.unmask();
											if (action.failureType == 'server') {
												obj = Ext.util.JSON
														.decode(action.response.responseText);
												if (obj.errors.reason == 'Erreur de mot de passe') {
													Ext.Msg
															.alert(
																	"Sécurité – changement du mot passe",
																	'Lors de la transmission de votre login, un mot de passe par défaut vous a été donné. Vous n’avez toujours pas changé ce mot de passe. Par mesure de sécurité, nous vous demandons  de le modifier maintenant. Merci.'
																			+ '<br>L’équipe support technique de maGIC©.');
													winChangeMot.show();
													//document.getElementById('ext-gen30').style.backgroundColor = COLOR; 
												}

											} else {
												if (formLogin.getForm()
														.isValid()) {
													Ext
															.getCmp(
																	'sbWinLogin')
															.setStatus(
																	{
																		text : 'Authentication server is unreachable',
																		iconCls : 'x-status-error'
																	});
												} else {
													Ext.Msg
															.show({
																title : 'Notification maGIC&#169;',
																msg : ' Le mail saisi  n&#146;existe pas, veuillez vérifier vos identifiants.',
																animEl : 'elId',
																icon : Ext.MessageBox.WARNING,
																buttons : Ext.Msg.OK,
																minWidth : 330,
																minHeight : 100
															});
												}
											}

											if (obj.errors.motif == "user_exist_false") {

												Ext.Msg
														.show({
															title : 'Notification maGIC&#169;',
															msg : ' Mot de passe  invalide. Attention, plus que 2 essais avant blocage de votre compte.<br> Pensez à utiliser l’option <u>Mot de passe oublié.</u>',
															animEl : 'elId',
															icon : Ext.MessageBox.WARNING,
															buttons : Ext.Msg.OK,
															height : 100,
															width : 330
														});

											} else {
												if (obj.errors.motif == "123456") {
													winChangeMot.show();
													//document.getElementById('ext-gen30').style.backgroundColor = COLOR; 
													formChangeMotPasse
															.getForm()
															.findField(
																	'loginchange')
															.setValue(
																	obj.errors.login);
													formChangeMotPasse
															.getForm()
															.findField(
																	'oldpassword')
															.setValue("123456");
													Ext.Msg
															.show({
																title : obj.errors.title,
																msg : obj.errors.reason,
																animEl : 'elId',
																icon : Ext.MessageBox.WARNING,
																buttons : Ext.Msg.OK,
																height : 100,
																width : 330
															});
												} else {
													Ext.Msg
															.show({
																title : obj.errors.title,
																msg : obj.errors.reason,
																animEl : 'elId',
																icon : Ext.MessageBox.WARNING,
																buttons : Ext.Msg.OK,
																height : 10,
																width : 400
															});
												}
											}
										}

									});
				} else {

					Ext
							.getCmp('sbWinLogin')
							.setStatus(
									{
										text : 'Le mail  ou le mot de passe saisi est incorrect.',
										iconCls : 'x-status-error'
									});

				}
			}

			// 2 fnChangement
			function fnChangement() {
				Ext.getCmp('sbWinLogin2').show();
				Ext.getCmp('frmChange').on({
					beforeaction : function() {
						if (formChangeMotPasse.getForm().isValid()) {
							Ext.getCmp('winChangeMot').body.mask();
							Ext.getCmp('sbWinLogin2').showBusy();
						}
					}
				});
				formChangeMotPasse
						.getForm()
						.submit(
								{
									success : function() {
										Ext.Msg.alert('Message',
												'Mot de passe modifié');
										window.location = "az";
									},
									failure : function(form, action) {
										// Usuario no encontrado
										Ext
												.getCmp('sbWinLogin2')
												.setStatus(
														{
															text : 'Le login ou le mot de passe ne sont pas corrects !',
															iconCls : 'x-status-error'
														});
										Ext.getCmp('winChangeMot').body
												.unmask();
									}
								});
			}

			// 3 fnMotOublie
			function fnMotOublie() {
				Ext.getCmp('sbWinLogin3').show();
				Ext.getCmp('frmOublie').on({
					beforeaction : function() {
						if (formMotPasseOublie.getForm().isValid()) {
							Ext.getCmp('winMotOublie').body.mask();
							Ext.getCmp('sbWinLogin3').showBusy();
						}
					}
				});
				formMotPasseOublie.getForm().submit({
					success : function() {
						Ext.Msg.alert('Message', 'Mot de passe envoyé');
						window.location = "az";
					},
					failure : function(form, action) {
						// Usuario no encontrado

						Ext.getCmp('sbWinLogin3').setStatus({
							text : 'Votre login n\'existe pas !',
							iconCls : 'x-status-error'
						});
						// Se liberan los campos del formularios para
						// escribir
						// nuevamente
						Ext.getCmp('winMotOublie').body.unmask();
					}
				});
			}

			// 4 fnCmpteGratuite

			function createDecouverte (){
				formComptegratuit.getForm().submit({
					success : function() {
						Ext.Msg.alert('Message', 'Compte créé');
						window.location = "az";
					},
					failure : function(form, action) {
						Ext.getCmp('sbWinLogin4').setStatus({
							text : 'Vous possédez déjà un compte.',
							iconCls : 'x-status-error'
						});						
						Ext.getCmp('winCompteGratuit').body.unmask();
					}
				});
			}
			function fnCmpteGratuite() {
				
				Ext.getCmp('sbWinLogin4').show();
				Ext.getCmp('frmComptegratuit').on({
					beforeaction : function() {
						if (formComptegratuit.getForm().isValid()) {
							Ext.getCmp('winCompteGratuit').body.mask();
							Ext.getCmp('sbWinLogin4').showBusy();
							formComptegratuit.getForm().submit({
								success : function() {
									Ext.Msg.alert('Message', 'Compte créé');
									window.location = "az";
								},
								failure : function(form, action) {
									// Usuario no encontrado
									Ext.getCmp('sbWinLogin4').setStatus({
										text : 'Vous possédez déjà un compte.',
										iconCls : 'x-status-error'
									});
									// Se liberan los campos del formularios para
									// escribir
									// nuevamente
									Ext.getCmp('winCompteGratuit').body.unmask();
								}
							});
						} 
					}
				});
			 
			}

			function fnRegister() {
				Ext.getCmp('frmRegister').on({
					beforeaction : function() {
					}
				});
			}
			/**
			 * ----------------------------- fin fontions
			 * ----------------------------------
			 * 
			 */

		if (navigator.appName == "Netscape") {

				var winRegister = new Ext.Window({
					id : 'winRegister',
					y : 200,
					x : 15
				});
				//winRegister.show();
				/* 02. Start The Form Login Component */
				// 02. Form Login
				var formLogin = new Ext.FormPanel(
						{
							frame : false,
							border : false,
							draggable : false,							 
							buttonAlign : 'center',
							url : "az" + 'acces/ext_login',
							method : 'POST',
							id : 'frmLogin',
							bodyStyle : 'padding:10px 10px 15px 25px;background:#F7F7F7; opacity: 1;  ',
							//bodyStyle : 'padding:10px 10px 15px 25px;opacity: 1;  ',
							width : 390,
							labelWidth : 150,
							items : [
									{
										xtype : 'box',
										autoEl : {
											tag : 'div',
											html : '<div class="app-msg" ><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;">Bienvenue sur maGIC©</span></div>'
										}
									},{
										xtype : 'box',
										autoEl : {
											tag : 'div',
											html : '<span style="font-weight: bold; font-family: Verdana; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;<font color="#FFFFFF"></font></span></div>'
										}
									},
									{
										xtype : 'textfield',
										fieldLabel : 'Login (mail)',
										name : 'username',
										id : 'logUsername',
										vtype : 'email',										
										validationEvent : false,
										allowBlank : false
									},
									{
										xtype : 'textfield',
										fieldLabel : 'Mot de passe',
										name : 'password',
										id : 'logPassword',
										allowBlank : false,
										inputType : 'password'

									},
									{
										html : '<center><br>maGIC<sup>©</sup> fonctionne sous: <br><center> Mozilla Firefox<a href="http://www.mozilla-europe.org/fr/" TARGET="_new"><img src="https://www.ma-gic.net/assets/img/firefox.png" class="app-img"/></a>, Google Chrome<a href="http://www.google.com/chrome?hl=fr" TARGET="_new"><img src="https://www.ma-gic.net/assets/img/chrome.png" class="app-img" /></a> et Safari<a href="http://www.apple.com/fr/safari/" TARGET="_new"><img src="https://www.ma-gic.net/assets/img/safari.png" class="app-img" /></center></a>',
										xtype : "box"
									},

									{
										html : "<center><br>Compatible avec smartphones et Ipad</center>",
										xtype : "box"
									} ],
							// Barre pour les options aditionel
							bbar : new Ext.ux.StatusBar(
									{
										id : 'newmotdepasse_bar',
										buttons : [
												{
													text : 'Créer un compte découverte',
													handler : function() {

														formComptegratuit
																.getForm()
																.reset();
														formChangeMotPasse
																.getForm()
																.reset();
														formMotPasseOublie
																.getForm()
																.reset();

														Condiciones();

														Ext.getCmp(
																'sbWinLogin4')
																.clearStatus();
														winMotOublie.hide();
														winChangeMot.hide();
														
													}
												},
												{
													text : '| Changement mot de passe',
													handler : function() {
														// Resetea los
														// formularios
														// cuando se presiona un
														// boton
														formComptegratuit
																.getForm()
																.reset();
														formChangeMotPasse
																.getForm()
																.reset();
														formMotPasseOublie
																.getForm()
																.reset();
														// fin resetear
														winCompteGratuit.hide();
														winMotOublie.hide();
														winChangeMot.show();
														//document.getElementById('ext-gen30').style.backgroundColor = COLOR; 
														formChangeMotPasse
																.getForm()
																.findField(
																		"loginchange")
																.setValue(
																		formLogin
																				.getForm()
																				.findField(
																						'username')
																				.getValue());
														// resetenado barra de
														// estado
														Ext.getCmp(
																'sbWinLogin2')
																.clearStatus();
													}
												},
												{
													text : '| Mot de passe oublié ?',
													handler : function() {
														// Resetea los
														// formularios
														// cuando se presiona un
														// boton
														
														formComptegratuit
																.getForm()
																.reset();
														formChangeMotPasse
																.getForm()
																.reset();
														formMotPasseOublie
																.getForm()
																.reset();
														// fin resetear
														winCompteGratuit.hide();
														winChangeMot.hide();
														winMotOublie.show();
														formMotPasseOublie
																.getForm()
																.findField(
																		"mailoublie")
																.setValue(
																		formLogin
																				.getForm()
																				.findField(
																						'username')
																				.getValue());
														// resetenado barra de
														// estado
														Ext.getCmp(
																'sbWinLogin3')
																.clearStatus();
														//document.getElementById('ext-gen31').style.backgroundColor = COLOR; 
													}
												} ]
									}),

							buttons : [
									{
										text : 'Se connecter',
										icon : 'https://www.ma-gic.net/assets/icons/connect.png',
										handler : fnLogin
									},
									{
										text : 'Effacer',
										icon : 'https://www.ma-gic.net/assets/icons/clear.png',
										handler : function() {
											Ext.getCmp('sbWinLogin').hide();
											formLogin.getForm().reset();
										}
									}

							],
							keys : [ {
								key : [ Ext.EventObject.ENTER ],
								handler : fnLogin
							} ]
						});
				// Inicio Pop-Up Condiciones Generales
				function Condiciones() {
					Ext.Msg
							.show({
								title : 'INFORMATION IMPORTANTE',
								buttons : Ext.MessageBox.YESNO,
								icon : Ext.MessageBox.QUESTION,

								msg : "La création d'un compte découverte a pour objectif de donner un aperçu des fonctionnalités de maGIC©. </br>"
										+ "L'accès à maGIC© avec un compte découverte se fait dans un espace dédié. Il appartient tout de même à l'utilisateur de ne saisir aucune information immorale. </br>"
										+ "Pour toute information complémentaire contactez-nous par mail sur ma-gic@tilda.fr.",
								fn : function(btn) {

									if (btn == 'yes') {
										winCompteGratuit.show();
										//document.getElementById('ext-gen32').style.backgroundColor = COLOR; 
										//document.getElementById('ext-gen146').style.backgroundColor = COLOR; 
										//document.getElementById('ext-gen151').style.backgroundColor = COLOR; 
									}
									if (btn == 'no') {
										winCompteGratuit.hide();
									}

								}
							});					 
					 //document.getElementById('ext-gen88').style.backgroundColor = COLOR; 
				}

				// Fin Pop-Up Condiciones Generales

				// 2 Form changement mot de passe
				var formChangeMotPasse = new Ext.FormPanel(
						{
							frame : false,
							border : false,
							hidden : false,
							draggable : false,
							buttonAlign : 'center',
							url : "az" + 'acces/changement',
							method : 'POST',
							id : 'frmChange',
							//bodyStyle : 'padding:10px 10px 15px 15px;background:#dfe8f6;',
							bodyStyle : 'padding:10px 10px 15px 15px;',
							width : 300,
							labelWidth : 150,
							items : [ {
								xtype : 'textfield',
								fieldLabel : 'Login (mail) ',
								name : 'loginchange',
								id : 'loginchange',
								allowBlank : false,
								vtype : 'email',
								validationEvent : false
							}, {
								xtype : 'textfield',
								fieldLabel : 'Mot de passe actuel ',
								name : 'oldpassword',
								id : 'oldpassword',
								inputType : 'password',
								allowBlank : false
							}, {
								xtype : 'textfield',
								fieldLabel : 'Nouveau mot de passe ',
								name : 'newpassword',
								id : 'newpassword',
								allowBlank : false,
								inputType : 'password',
								vtype : 'passwordlength'

							}, {
								xtype : 'textfield',
								fieldLabel : 'Confirmer le mot de passe',
								name : 'newpassword2',
								id : 'newpassword2',
								allowBlank : false,
								inputType : 'password',
								// Validacion con el campo anterior (mot de
								// passe iguales)
								initialPassField : 'newpassword',
								vtype : 'password'
							}

							],

							buttons : [
									{
										text : 'Valider',
										icon : 'https://www.ma-gic.net/assets/icons/connect.png',
										handler : fnChangement
									// {
									// Envio del formulario al submit
									// formChangeMotPasse.getForm().submit();
									// Mensaje de confirmacion
									// Ext.Msg.alert('Message', 'Votre mot de
									// passe a été changé');
									// Ventana de cambio de clave desaparece
									// winChangeMot.hide();

									// }
									},
									{
										text : 'Annuler',
										icon : 'https://www.ma-gic.net/assets/icons/delete.png',										
										
										handler : function() {
											// escondo la barra de satus
											Ext.getCmp('sbWinLogin2').hide();
											// limpio la barra de satus
											Ext.getCmp('sbWinLogin2')
													.clearStatus();
											formChangeMotPasse.getForm()
													.reset();
											winCompteGratuit.hide();
											winMotOublie.hide();
											winChangeMot.hide();
										}
									}

							]
						});

				// 3 Form Mot de passe oublie

				var formMotPasseOublie = new Ext.FormPanel(
						{
							frame : false,
							border : false,
							hidden : false,
							draggable : false,
							buttonAlign : 'center',
							url : "az" + 'acces/mail',
							method : 'POST',
							id : 'frmOublie',
							//bodyStyle : 'padding:10px 10px 15px 15px;background:#F7F7F7;',
							bodyStyle : 'padding:10px 10px 15px 15px;',
							width : 300,
							labelWidth : 150,
							items : [ {
								xtype : 'textfield',
								fieldLabel : 'Votre login (mail) ',
								name : 'mailoublie',
								id : 'mailoublie',
								vtype : 'email',
								allowBlank : false,
								validationEvent : false
							} ],
							buttons : [
									{
										text : 'Valider',
										icon : 'https://www.ma-gic.net/assets/icons/connect.png',
										handler : fnMotOublie
									},
									{
										text : 'Annuler',
										icon : 'https://www.ma-gic.net/assets/icons/delete.png',										
										handler : function() {
											Ext.getCmp('sbWinLogin3').hide();
											Ext.getCmp('sbWinLogin3')
													.clearStatus();
											formMotPasseOublie.getForm()
													.reset();
											winCompteGratuit.hide();
											winMotOublie.hide();
											winChangeMot.hide();
										}
									} ]
						});

				 var dataRegimeRecord = new Ext.data.Record.create([
				                                                	{name: 'CODE'},
				                                                    {name: 'LABEL'}
				                                                    ]);

				                                                 var dataRegimeReader = new Ext.data.JsonReader({
				                                                    root: 'results' 
				                                                    },
				                                                    dataRegimeRecord
				                                                    );

				                                                 var dataRegimeProxy = new Ext.data.HttpProxy({
				                                                	url: "az" + 'acces/get_all_regime',	
				                                                    method: 'POST'
				                                                 });

				                                                 var dataRegimeStore = new Ext.data.Store({
				                                                    proxy: dataRegimeProxy,
				                                                    reader: dataRegimeReader
				                                                 });

				 dataRegimeStore.load();
				 
				 var regimeCmb = new Ext.form.ComboBox(
				         {
				         	fieldLabel:'Régime',
				 			name:'regimeCmb',
				 			id : 'regimeCmb',
				 			allowBlank: false,
				 			forceSelection:true,
				 			store : dataRegimeStore,
				 			/*store: new Ext.data.SimpleStore({
				         	id:0,
				         	fields:
				         	    [
				                 'myId',   // numeric value is the key
				                 'myText' // the text value is the value
				           	 	 ],
				           	 	 data: dataprofil_edit
				    			}),*/
				    			valueField:'CODE', // El valor del combo
				    			hiddenName: 'regimeCmb',
				    		    displayField:'LABEL', // El label del combo
				    		 	mode:'local',
				 			width: 140,			
				 			emptyText:'Sélectionnez un régime',
				 			triggerAction: 'all',
				 			editable:false
				  });	
				                                                 
				// 4 Form COmpte Gratuit

				var formComptegratuit = new Ext.FormPanel(
						{
							frame : false,
							border : false,
							hidden : false,
							draggable : false,
							buttonAlign : 'center',
							url : "az" + 'acces/comptegratuit',
							method : 'POST',
							id : 'frmComptegratuit',
							//bodyStyle : 'padding:10px 10px 15px 15px;background:#F7F7F7;',
							bodyStyle : 'padding:10px 10px 15px 15px;',
							width : 300,
							labelWidth : 200,
							items: [{
						            layout:'column',						            
						            items:[{
						            		title : 'Utilisateur',
						            		columnWidth:.5,
						            		height : 290,
						            		layout: 'form',
						            		defaults: {labelStyle: 'padding:0 0 0 5px'},
						            		items : [
												// TExto
												/*{
													xtype : 'label',
													text : 'En créant un compte gratuit vous pourrez accéder à l\'espace démo!!'
												},*/
												{
													html : "<br>",
													xtype : "box"
												},
												// Prenom_User
												{
													xtype : 'textfield',
													fieldLabel : 'Prénom ',
													name : 'prenom_demo',
													id : 'prenom_demo',
													allowBlank : false,
													validationEvent : ''													
												},
			
												// Nom User
												{
													xtype : 'textfield',
													fieldLabel : 'Nom ',
													name : 'nom_demo',
													id : 'nom_demo',
													allowBlank : false,
													validationEvent : ''
												},
												// Tel
												{
													xtype : 'textfield',
													fieldLabel : 'Téléphone ',
													name : 'telephone_demo',
													id : 'telephone_demo',
													allowBlank : true,
													validationEvent : ''
												},
												// Login - Mail
												{
													xtype : 'textfield',
													fieldLabel : 'Login (mail) ',
													id : 'mail_demo',
													name : 'mail_demo',
			
													allowBlank : false,
													validationEvent : ''
												},
												// Password
												{
													xtype : 'textfield',
													fieldLabel : 'Mot de passe ',
													name : 'password_demo',
													allowBlank : false,
													inputType : 'password',
													vtype : 'passwordlength',
													id : 'password_demo'
												},
												// Confirm pass
												{
													xtype : 'textfield',
													fieldLabel : 'Confirmer mot de passe',
													name : 'password_demo2',
													allowBlank : false,
													inputType : 'password',
													id : 'password_demo2',
													initialPassField : 'password_demo',
													vtype : 'password'
			
												},
			
												// Fonction
												{
													xtype : 'combo',
													fieldLabel : 'Fonction ',
													width : 190,
													name : 'fonction_demo',
													id : 'fonction_demo',
			
													allowBlank : false,
													editable : false,
													store : new Ext.data.SimpleStore(
															{
																fields : [ 'idfonction',
																		'nomfonction' ],
																data : [
																		[ "1",
																				"Responsable environnement" ],
																		[ "2",
																				"Responsable sécurité" ],
																		[ "3",
																				"Responsable technique" ],
																		[ "4", "Autres" ] ]
															}),
													displayField : 'nomfonction',
													valueField : 'idfonction',
													hiddenName : 'fonction_demo',
													typeAhead : false,
													mode : 'local',
													triggerAction : 'all',
													emptyText : 'Sélectionnez ...',
													selectOnFocus : false
												},
												// Comment avez vous connu l outil?
												{
													xtype : 'combo',
													fieldLabel : 'Comment avez vous connu l\'outil? ',
													width : 190,
													name : 'comment_demo',
													id : 'comment_demo',
													allowBlank : false,
													editable : false,
													valueField : 'idcomment',
													store : new Ext.data.SimpleStore(
															{
																fields : [ 'idcomment',
																		'nomcomment' ],
																data : [
																		[ "1", "Internet" ],
																		[ "2",
																				"Recommandation d\'un utilisateur" ],
																		[ "3", "Publicité" ],
																		[ "4",
																				"Contact commercial" ],
																		[ "5", "Autres" ] ]
															}),
													displayField : 'nomcomment',
													valueField : 'idcomment',
													hiddenName : 'comment_demo',
													typeAhead : false,
													mode : 'local',
													triggerAction : 'all',
													emptyText : 'Sélectionnez ...',
													selectOnFocus : false
												},{
													html : "<br><br>",
													xtype : "box"
													}			
										]
						              	},
						              	{
						              		title : 'Site',	
						                    columnWidth:.5,
						                    height : 290,
						                    layout: 'form',
						                    defaults: {labelStyle: 'padding:0 0 0 5px', width : 180},
						                    items: [{
												html : "<br>",
												xtype : "box"
												},{
													xtype : 'textfield',
													fieldLabel : 'Nom du site',
													name : 'site_name',
													id : 'site_name',
													allowBlank : false,
													validationEvent : ''						                       
							                    },regimeCmb,{
							                    	xtype : 'textfield',
													fieldLabel : 'Adresse 1',
													name : 'site_address1',
													id : 'site_address1',
													allowBlank : false,
													validationEvent : ''	
							                    },{
							                    	xtype : 'textfield',
													fieldLabel : 'Adresse 2',
													name : 'site_address2',
													id : 'site_address2',
													allowBlank : true,
													validationEvent : ''	
							                    },{
							                	      xtype: 'textfield',
							                          fieldLabel: 'Code Postal',
							                          name: 'code_postal',
							                          id: 'code_postal',
							                          maxLength: 5,
							                          minLength: 5,
							                          allowBlank: false
							                   
							                    },{
							                  	    xtype: 'textfield',
							                          fieldLabel: 'Ville',
							                          name: 'ville',
							                          id: 'villeA',
							                          allowBlank: false,
							                          validationEvent: ''
							                    },{   
							                  	      xtype: 'textfield',
							                          fieldLabel: 'Mots clés',
							                          name: ' mot_cles_',
							                          id: 'attribut_2_site',
							                          allowBlank: true,
							                          validationEvent: ''
							                    },{
							                         fieldLabel: 'Commentaires',
							            			   xtype:'textarea',
							            			   name: 'commentaires',
							                         id: 'commentaires',
							                         allowBlank: true                 
							                    }]
						                }],
										buttons : [
												{
													text : 'Valider',
													icon : 'https://www.ma-gic.net/assets/icons/connect.png',
													handler : function(){
														if (formComptegratuit.getForm().isValid()) {	
															createDecouverte();
														} else{
															Ext.getCmp('sbWinLogin4').setStatus({
																text : 'Merci de saisir les champs obligatoires.',
																iconCls : 'x-status-error'
															});
															
														}
														}
													
			
												},
												{
													text : 'Annuler',
													icon : 'https://www.ma-gic.net/assets/icons/delete.png',													
													handler : function() {
														Ext.getCmp('sbWinLogin4').hide();
														Ext.getCmp('sbWinLogin4')
																.clearStatus();
														formComptegratuit.getForm().reset();
														winCompteGratuit.hide();
														winMotOublie.hide();
														winChangeMot.hide();
													}
												}
			
										]
							}]
						});
				// 5 Form Liens

				var formLiens = new Ext.FormPanel(
						{
							frame : false,
							border : false,
							hidden : false,
							draggable : false,
							buttonAlign : 'center',
							url : "az" + 'acces/liens',
							method : 'POST',
							id : 'frmLiens',
							//bodyStyle : 'padding:10px 10px 15px 25px;',
							bodyStyle : 'padding:10px 10px 15px 25px;background:#F7F7F7;',
							width : 200,
							labelWidth : 150,
							items : [
									{
										html : "<a href='https://www.ma-gic.net/concept/ConceptMa-GIC.html' TARGET='_new'>1. Présentation du concept maGIC©</a>",
										xtype : "box"
									},
									{
										html : "<br>",
										xtype : "box"
									},
									{
										html : "<a href='https://www.ma-gic.net/plaquette/Plaquette_maGIC.pdf'>2. Plaquette maGIC©</a>",
										xtype : "box"
									},
									{
										html : "<br>",
										xtype : "box"
									},
									{
										html : "<a href='http://tildanet.fr/BlogMa-GIC/' TARGET='_new'>3. Blog maGIC©</a>",
										xtype : "box"
									},
									{
										html : '<br><br><br>maGIC© a été développé par',
										xtype : "box"
									},
									{
										html : '<br><a href="http://www.tilda.fr" TARGET="_new"><img src="https://www.ma-gic.net/assets/img/tilda67.png" class="app-img"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.insyco.fr" TARGET="_new"><img src="https://www.ma-gic.net/assets/img/logo-insyco67.png" class="app-img" /></a><br><br><br>Pour toute information: <A HREF="mailto:ma-gic@tilda.fr">ma-gic@tilda.fr</A> - 03.21.51.35.34',
										xtype : "box"
									}, {
										html : '<br><br>',
										xtype : "box"
									} ]
						});

				// 02. Window Login
				var winLogin = new Ext.Window({
					title : 'Connexion',
					id : 'winLogin',
					layout : 'fit',
					width : 445,
					height : 300,
					y : 70,
					//x : 15,
					resizable : false,
					draggable : false,
					closable : false,
					items : [ formLogin ],
					bbar : new Ext.ux.StatusBar({
						id : 'sbWinLogin'
					})
				});

				winLogin.show();

				// 2 Ventana cambiar mot de passe

				var winChangeMot = new Ext.Window({
					title : 'Changement de mot de passe',
					id : 'winChangeMot',
					layout : 'fit',
					width : 430,
					height : 210,
					y : 450,
					x : 15,
					resizable : false,
					draggable : false,
					closable : false,
					// carga formulario
					items : [ formChangeMotPasse ],
					bbar : new Ext.ux.StatusBar({
						id : 'sbWinLogin2'
					})
				});

				// 3 Ventana Mot de passe oublié

				var winMotOublie = new Ext.Window({
					title : 'Récupération de mot de passe',
					id : 'winMotOublie',
					layout : 'fit',
					width : 430,
					height : 126,
					layout : 'fit',
					y : 450,
					x : 15,
					resizable : false,
					draggable : false,
					closable : false,
					// carga formulario
					items : [ formMotPasseOublie ],
					bbar : new Ext.ux.StatusBar({
						id : 'sbWinLogin3'
					})
				});

				// Ventanas por defecto estan escondidas
				// winChangeMot.hide();
				// winMotOublie.hide();

				// 4 Ventana Compte Gratuit
				var winCompteGratuit = new Ext.Window({
					title : 'Création d\'un compte découverte',
					id : 'winCompteGratuit',
					layout : 'fit',
					width : 900,
					height : 385,
					y : 70,
					x : 90,
					resizable : false,
					draggable : true,
					closable : false,
					plain: true,
					modal: true,
					// carga formulario
					items : [ formComptegratuit ]
					,
					bbar : new Ext.ux.StatusBar({
						id : 'sbWinLogin4'
					})
				});

				// 5 Ventana de link
				var winLiens = new Ext.Window({
					title : 'Liens',
					id : 'winLiens',
					layout : 'fit',
					width : 400,
					height : 330,
					y : 110,
					x : 450,
					resizable : false,
					draggable : false,
					closable : false,
					items : [ formLiens ],
					bbar : new Ext.ux.StatusBar({
						id : 'sbWinLogin5'
					})
				});
				// formLogin.getForm().items.itemAt(0).focus(true,0.20);
				//winLiens.show();
				winLogin.show();
				// chargement de la page
				setTimeout(function() {
					// placement du curseur dans le champs logUsername //
					Ext.getCmp('logUsername').focus();
				}, 1300);
			}
		

		/*if (navigator.appName == "Microsoft Internet Explorer") {

			Ext.Msg
					.show({
						title : 'Notification maGIC&#169;',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.INFO,
						width: 520,
						msg :   "Votre navigateur n'est pas supporté par l'application."+
								 "<br>Pour vous connecter, veuillez utiliser l'un des navigateurs suivants:<br> Mozilla Firefox   <a href='http://www.mozilla-europe.org/fr/' TARGET='_new'>  <img src='https://www.ma-gic.net/assets/img/firefox.png' class='app-img'/></a>"
								+ "   Google Chrome <a href='http://www.google.com/chrome?hl=fr' TARGET='_new'><img src='https://www.ma-gic.net/assets/img/chrome.png' class='app-img' /></a>    et Safari<a href='http://www.apple.com/fr/safari/' TARGET='_new'><img src='https://www.ma-gic.net/assets/img/safari.png' class='app-img' /></a>",
						fn : function(btn) {

							if (btn == 'ok') {
								history.back();
							}
						}
					});

		}*/
		/*
		Ext.Msg.show({	 
		    msg: 'Une mise à jour de maGIC© est désormais disponible. <br>Veuillez s\'il vous plaît supprimer la mémoire temporaire de votre navigateur (vider le cache) afin de profiter des nouvelles fonctionalités de maGIC©.',
		 	frame: true,
			border: true, 
			closable :false,
			resizable: false,
			draggable: false,
			buttons: Ext.Msg.OK,
	        icon: Ext.Msg.WARNING
		});*/
	
	 
	/*modification des couleurs  
	document.getElementById('ext-gen29').style.backgroundColor = COLOR;
	document.getElementById('ext-gen33').style.backgroundColor = COLOR;
	document.getElementById('ext-gen95').style.backgroundColor = COLOR;
	document.getElementById('ext-gen30').style.backgroundColor = COLOR;
	document.getElementById('ext-gen88').style.backgroundColor = COLOR;
	document.getElementById('ext-gen31').style.backgroundColor = COLOR;
	*/
	//
		});