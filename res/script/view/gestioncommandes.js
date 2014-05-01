
	Ext.QuickTips.init();
	
	/**
	 * Definition proxy
	 */
		var dataProxylistcommande = new Ext.data.HttpProxy({
			url : "http://localhost:8080/EsgiRouter/json_render/",
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
		
	/**
	 * Definition grid
	 */

		var grid_commandes = new Ext.grid.GridPanel({
			frame : true,
			loadMask : true,
			border : false,
			stripeRows : true,
			height : 730,
			width : 980,
			autoScroll : true,
			enableTabScroll : true,
			store : store_commande,
			id : 'grid_commandes',
			cm : cm_commande,
			viewConfig : {
				stripeRows : true,
				enableTextSelection : true
			}
		});
		
	      var win = new Ext.Window({
	            title: 'Layout Window',
	            closable:true,
	            width:600,
	            height:350,
	            plain:true,
	            
	            items: [grid_commandes]
	        });
	      win.show();
	/***/
