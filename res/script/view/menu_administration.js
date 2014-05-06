Ext.onReady(function(){
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
								html : '<a href="gestioncommande/"><h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Gestion des commandes</h1></a>'
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
								html : '<h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Gestion des produits</h1>'
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
								html : '<h1><span style="color: #555555;font: bold 16px tahoma,arial,verdana,sans-serif;"><center>Gestion des utilisateurs</h1>'
							}
						}]
			});
	var panel_accueil = new Ext.Window({
		title : 'Menu d\'administration',
		id : 'panel_accueil',
		layout : 'fit',
		width : 445,
		height : 146,
		y : 70,
		resizable : true,
		draggable : false,
		closable : false,
		items : [formMenu],
		bbar : new Ext.ux.StatusBar({
			id : 'sbWinLogin'
		})
	});
	
	panel_accueil.show();
});