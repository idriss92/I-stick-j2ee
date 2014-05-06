package org.esgi.model;

import org.esgi.orm.my.annotations.ORM_PK;
import org.esgi.orm.my.annotations.ORM_TABLE;


@ORM_TABLE("newsletter")
public class Newsletter {

	@ORM_PK
	public Integer num_newsletter;
	public String adresse_mail;
	
	
	@Override
	public String toString() {
		return "Newsletter [num_newsletter=" + num_newsletter
				+ ", adresse_mail=" + adresse_mail + "]";
	}


	public Newsletter(Integer num_newsletter, String adresse_mail) {
		super();
		this.num_newsletter = num_newsletter;
		this.adresse_mail = adresse_mail;
	}
}
