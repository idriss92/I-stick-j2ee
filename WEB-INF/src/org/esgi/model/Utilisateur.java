package org.esgi.model;

import java.util.Date;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;


@ORM_TABLE("utilisateur")
public class Utilisateur {
	@ORM_PK
	public Integer id_utilisateur;
	public String nom_utilisateur;
	public String prenom;
	public String rue;
	public String ville;
	public String code_postale;
	public String pays;
	public Date date_naissance;
	public String adresse_mail;
	public String mot_de_passe;
	public String newsletter;
	public String activer;
	
	
	@Override
	public String toString() {
		return "Utilisateur [id_utilisateur=" + id_utilisateur
				+ ", nom_utilisateur=" + nom_utilisateur + ", prenom=" + prenom
				+ ", rue=" + rue + ", ville=" + ville + ", code_postale="
				+ code_postale + ", pays=" + pays + ", date_naissance="
				+ date_naissance + ", adresse_mail=" + adresse_mail
				+ ", mot_de_passe=" + mot_de_passe + ", newsletter="
				+ newsletter + ", activer=" + activer + "]";
	}


	public Utilisateur(Integer id_utilisateur, String nom_utilisateur,
			String prenom, String rue, String ville, String code_postale,
			String pays, Date date_naissance, String adresse_mail,
			String mot_de_passe, String newsletter, String activer) {
		super();
		this.id_utilisateur = id_utilisateur;
		this.nom_utilisateur = nom_utilisateur;
		this.prenom = prenom;
		this.rue = rue;
		this.ville = ville;
		this.code_postale = code_postale;
		this.pays = pays;
		this.date_naissance = date_naissance;
		this.adresse_mail = adresse_mail;
		this.mot_de_passe = mot_de_passe;
		this.newsletter = newsletter;
		this.activer = activer;
	}
	
	
}
