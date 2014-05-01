package org.esgi.model;

import java.util.Date;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("commande")
public class Commande {
	
	public int num_commande;
	public Date date;
	public int id_utilisateur;
	
	@Override
	public String toString() {
		return "Commande [num_commande=" + num_commande + ", date=" + date
				+ ", id_utilisateur=" + id_utilisateur + "]";
	}	
}