package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("couleur")
public class Couleur {
	@ORM_PK
	public int id_couleur;
	public String libelle_couleur;
	
	@Override
	public String toString() {
		return "Couleur [id_couleur=" + id_couleur + ", libelle_couleur="
				+ libelle_couleur + "]";
	}

	public Couleur(int id_couleur, String libelle_couleur) {
		super();
		this.id_couleur = id_couleur;
		this.libelle_couleur = libelle_couleur;
	}
}
