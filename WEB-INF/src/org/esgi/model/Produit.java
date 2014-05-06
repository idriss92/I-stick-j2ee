package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;

@ORM_TABLE("produit")
public class Produit {

	@ORM_PK
	public Integer id_produit;
	public String nom;
	public String description;
	public String image_produit;
	public float prix;
	public Integer id_couleur;
	public Integer id_type_tel;
	public String visible;
	
	
	@Override
	public String toString() {
		return "Produit [id_produit=" + id_produit + ", nom=" + nom
				+ ", description=" + description + ", image_produit="
				+ image_produit + ", prix=" + prix + ", id_couleur="
				+ id_couleur + ", id_type_tel=" + id_type_tel + ", visible="
				+ visible + "]";
	}


	public Produit(Integer id_produit, String nom, String description,
			String image_produit, float prix, Integer id_couleur,
			Integer id_type_tel, String visible) {
		super();
		this.id_produit = id_produit;
		this.nom = nom;
		this.description = description;
		this.image_produit = image_produit;
		this.prix = prix;
		this.id_couleur = id_couleur;
		this.id_type_tel = id_type_tel;
		this.visible = visible;
	}
	
	
	
}
