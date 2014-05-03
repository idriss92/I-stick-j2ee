package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("administrateur")
public class Administrateur {
	@ORM_PK
	public Integer id_admin;
	public String nom_admin;
	public String mot_de_passe;
	
	
	@Override
	public String toString() {
		return "Administrateur [id_admin=" + id_admin + ", nom_admin="
				+ nom_admin + ", mot_de_passe=" + mot_de_passe + "]";
	}


	public Administrateur(Integer id_admin, String nom_admin,
			String mot_de_passe) {
		super();
		this.id_admin = id_admin;
		this.nom_admin = nom_admin;
		this.mot_de_passe = mot_de_passe;
	}
}
