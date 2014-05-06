package org.esgi.web;

import java.util.Date;

import org.esgi.model.Administrateur;
import org.esgi.model.Categorie;
import org.esgi.model.Commande;
import org.esgi.model.Contenir;
import org.esgi.model.Couleur;
import org.esgi.model.Newsletter;
import org.esgi.model.Produit;
import org.esgi.model.Utilisateur;
import org.esgi.orm.my.persistence.ORM;



public class Application {
	public static void main(String[] args) {
		
	    Administrateur admin = new Administrateur(1,"admin","admin");
    	
    	
    	Categorie cat = new Categorie(0, "I-phone");
    	Commande com = new Commande(0, new Date(), 0);
    	Contenir cont =  new Contenir(0, 1, 2);
    	Couleur coul = new Couleur(0, "bleu");
    	Newsletter nl = new Newsletter(0, "jsimpore@gmail.com");
    	Produit produit = new Produit(0, "Alpha", "azerty", "link", 0, 0, 0, "non");
    	Utilisateur util = new Utilisateur(0, "az", "moi", "la", "bas", "92322", "fr",new Date(), "adresse_mail", "mot_de_passe", "newsletter", "active");
    	
    	ORM.save(admin);
    	ORM.save(cat);
    	ORM.save(com);
    	ORM.save(cont);
    	ORM.save(coul);
    	ORM.save(nl);
    	ORM.save(produit);
    	ORM.save(util);
	    
    	Object ob = ORM.getItem();
    	
    	System.out.println(ob.toString());
    	
    	
	}
}
