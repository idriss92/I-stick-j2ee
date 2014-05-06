Ext.onReady(function(){
	Ext.QuickTips.init();
	
	var formMenu = new Ext.FormPanel(
			{
				frame : false,
				border : false,
				draggable : false,							 
				buttonAlign : 'center',
				url : 'acces/ext_login',
				method : 'POST',
				id : 'frmLogin',
				bodyStyle : 'padding:10px 10px 15px 25px;background:#F7F7F7; opacity: 1;  ',
			
				width : 390,
				labelWidth : 150,
				items : [
				         {
							xtype : 'box',
							autoEl : {
								tag : 'div',
								html : '<a href="gestioncommande/"><h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Commandes</h1></a>'
							}
				         },
				         {
								xtype : 'box',
								autoEl : {
									tag : 'div',
									html : '<h1><span style="color: #F7F7F7;font: bold 16px tahoma,arial,verdana,sans-serif;">blank</h1>'
								}
					     },
					     {
							xtype : 'box',
							autoEl : {
								tag : 'div',
								html : '<h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Produits</h1>'
							}
						},
						{
							xtype : 'box',
							autoEl : {
								tag : 'div',
								html : '<h1><span style="color: #F7F7F7;font: bold 16px tahoma,arial,verdana,sans-serif;">blank</h1>'
							}
						},
						{
							xtype : 'box',
							autoEl : {
								tag : 'div',
								html : '<h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Utilisateurs</h1>'
							}
						}]
			});

	
	/**
	 * Definition proxy
	 */
		var dataProxylistcommande = new Ext.data.HttpProxy({
			url : "http://localhost:8080/EsgiRouter/json_render/getAllCommande/",
			method : 'POST'
		});
	/***/
		
	/**
	 * Definition record
	 */
	/***/
	     
		var dataRecord_annonces = new Ext.data.Record.create([{
			name : 'num_commande'
		}, {
			name : 'date'
		}, {
			name : 'id_utilisateur'
		}]);
		
		var dataReader_commande = new Ext.data.JsonReader({
			root : 'data',
		}, dataRecord_annonces);

		var store_commande = new Ext.data.Store({
			reader : dataReader_commande,
			proxy : dataProxylistcommande
		});	
		
		store_commande.load();
		
		var cm_commande = new Ext.grid.ColumnModel([{
			header : "Titre",
			width : 140,
			dataIndex : 'num_commande'
		}, {
			header : "Date de publication",
			width : 170,
			dataIndex : 'date'

		}, {
			header : "Langue",
			width : 270,
			dataIndex : 'id_utilisateur'
		}]);
		
		var tb = new Ext.Toolbar({
		    
		    width: 870,
		    items: [
		        {
		            xtype: 'button', // default for Toolbars, same as 'tbbutton'
		            text: 'Consulter',
		            iconCls: 'add16',
		        },
		        {
		            xtype: 'button', // default for Toolbars, same as 'tbbutton'
		            text: 'Valider'
		        },
		        {
		            xtype: 'button', // default for Toolbars, same as 'tbbutton'
		            text: 'Supprimer'
		        }
		    ]
		});
		
	/**
	 * Definition grid
	 */

		var grid_commandes = new Ext.grid.GridPanel({
			frame : true,
			loadMask : true,
			border : false,
			stripeRows : true,
			height : 730,
			width : 870,
			autoScroll : true,
			enableTabScroll : true,
			store : store_commande,
			id : 'grid_commandes',
			cm : cm_commande,
			tbar:tb,
			viewConfig : {
				stripeRows : true,
				enableTextSelection : true
			}
		});
		var panel_accueil = new Ext.Window({
			title : 'Menu d\'administration',
			id : 'panel_accueil',
			layout : 'fit',
			width : 212,
			height : 268,
			y : 53,
			x :40,
			resizable : true,
			draggable : true,
			closable : true,
			items : [formMenu],
			bbar : new Ext.ux.StatusBar({
				id : 'sbWinLogin'
			})
		});
		
		
	      var win = new Ext.Window({
	            title: 'Liste des Commandes',
	            closable:true,
	            width:870,
	            height:472,
	            plain:true,
	            y : 53,
				x : 284,
	            items: [grid_commandes]
	        });
	      win.show();
	      panel_accueil.show();
	/***/
});