package org.esgi.web;

import javax.servlet.ServletException;

import org.esgi.module.file.FileList;


public class Application {
	public static void main(String[] args) {
		
		FrontController front = new FrontController();
		
		
	front.registerAction(new FileList());
	try {
		front.init();
	} catch (ServletException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		//front.registerAction(new );
		
	//	front.registerAction(new UserCreate());
		
	//	front.registerAction(new NewsDisplay());
		
	
	}
}
