package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("categorie")
public class Categorie {
	
	@ORM_PK
	public int id_type_tel;
	public String libelle;
	
	@Override
	public String toString() {
		return "Categorie [id_type_tel=" + id_type_tel + ", libelle=" + libelle
				+ "]";
	}

	public Categorie(int id_type_tel, String libelle) {
		super();
		this.id_type_tel = id_type_tel;
		this.libelle = libelle;
	}
	
	
	
}
