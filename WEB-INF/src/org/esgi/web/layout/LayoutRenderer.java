package org.esgi.web.layout;

import java.io.File;
import java.io.StringWriter;
import java.util.ArrayList;

import org.apache.velocity.Template;
import org.apache.velocity.app.Velocity;
import org.esgi.web.action.IAction;
import org.esgi.web.action.IContext;
import org.esgi.web.route.Router;

/* Le Layout Renderer � pour fonction de g�n�rer
 * la vue en faisant le lien entre les class du package modules
 * et les template de vue de Velocity.
 */

public class LayoutRenderer {
	
	public void render(IAction action, IContext context, Router router) throws Exception {
		
		
		
		System.out.println(action.getLayout());
		System.out.println(context.toString());
		System.out.println(router.toString());
		System.out.println("C:\\Users\\joaany\\Documents\\javaee\\joanny\\workspace\\EsgiRouter\\layout\\default.json");
		@SuppressWarnings("unused")
		JsonExtractor extractor = new JsonExtractor();
		
			//ArrayList<String> layoutDependencies =   extractor.getDependencies("C:\\Users\\joaany\\Documents\\javaee\\joanny\\workspace\\EsgiRouter\\layout\\default.json");
	
		/* 
	    ArrayList<String> layoutDependencies = 
	            extractor.getDependencies(context.getRequest().getSession().getServletContext().getRealPath("/") + context.getProperties().getProperty("layout.path")+ "/" + action.getLayout()+".json");
		*/// Chargement du fichier JSON de la liste des d�pendence au niveau des variable.
		//String[] layoutDependencies = {"__CURRENT__","shared/main_header","shared/main_footer"};

		ArrayList<String> layoutDependencies = new ArrayList<>();
	   
	 
	    layoutDependencies.add("shared/main_footer");
	       layoutDependencies.add("shared/main_header");
	     layoutDependencies.add("__CURRENT__");
		//Template Racine de la vue
	    String mainTemplateName = layoutDependencies.get(layoutDependencies.size()-1);
	    System.out.println(mainTemplateName);
	//	layoutDependencies.remove(layoutDependencies.size()-1);
		//Parcours des d�pendance et chargement des template
		for (String layoutDependence : layoutDependencies) {
			IAction a;
			if(layoutDependence.equals("__CURRENT__")){
				a = action;
				System.out.println("-----0-------");
			}else{
				a = router.find(layoutDependence, context);
				System.out.println("-----1-------");
			}
			
			if (a!=null) {
				a.execute(context);
				System.out.println(a.getLayout());
				System.out.println("-----2-------");
			}
			
			//V�rification de l'exitense du template et retour de celui-ci
			String templateFile = this.checkTemplateFile(layoutDependence, action, context);
			
			//Liaison des variable des template avec celle du context. Exemple $title de filelist.vm et title de FIleList.java
			if(templateFile!=null){
				Template actionTemplate = Velocity.getTemplate(templateFile);
				StringWriter renderedTemplate = new StringWriter();
				actionTemplate.merge(context.getVelocityContext(), renderedTemplate);
				context.setFragment(layoutDependence, renderedTemplate);
					System.out.println(layoutDependence+"-----3-------");
			}	
		}
		
		//Impression � l'écran de la vue racine (ici shared/html) 
		String templateFile = this.checkTemplateFile(mainTemplateName, action, context);
		System.out.println("templateFile  :"+templateFile);
		if(templateFile != null){
			Template actionTemplate = Velocity.getTemplate(templateFile);			
			actionTemplate.merge(context.getVelocityContext(), context.getResponse().getWriter());
		}
	}
	
	// Fonction de vérification de l'existence du template file
	private String checkTemplateFile (String templateName, IAction action, IContext context){
		if(templateName.equals("__CURRENT__")){
			String[] className = action.getClass().toString().split("\\.");
			System.out.println("className  :"+className[className.length-1]);
			templateName = className[className.length-2]+"/"+className[className.length-1].toLowerCase();
			System.out.println("-----templateName  :"+templateName);
		}
		String root = context.getRequest().getSession().getServletContext().getRealPath("/") + context.getProperties().getProperty("template.path") + "/";
		
		
	//	String root = "C:\\Users\\joaany\\Documents\\javaee\\joanny\\workspace\\EsgiRouter\\layout\\default.json";
		
		System.out.println("root"+root +  templateName);
		if(new File(root +  templateName + ".vm").exists()){
			return templateName + ".vm";
		}
		 return null;
	}

}

