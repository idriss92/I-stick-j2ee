package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("contenir")
public class Contenir {
	@ORM_PK
	public Integer  num_commande;
	public Integer  id_produit;
	public Integer  quantite;
	
	
	@Override
	public String toString() {
		return "Contenir [num_commande=" + num_commande + ", id_produit="
				+ id_produit + ", quantite=" + quantite + "]";
	}


	public Contenir(Integer num_commande, Integer id_produit, Integer quantite) {
		super();
		this.num_commande = num_commande;
		this.id_produit = id_produit;
		this.quantite = quantite;
	}
	
	
	
}
