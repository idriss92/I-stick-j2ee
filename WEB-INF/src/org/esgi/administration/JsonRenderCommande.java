package org.esgi.administration;

import java.io.IOException;
import java.io.Writer;
import java.util.Properties;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.esgi.orm.my.persistence.ORM;
import org.esgi.web.route.Router;

public class JsonRenderCommande extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Router router = new Router();
	Properties properties = new Properties();

	@Override
	public void init(ServletConfig config) throws ServletException {
	}
	@Override
	public void service(HttpServletRequest 
			request, HttpServletResponse response)
					throws ServletException, IOException {
		Writer writer =  response.getWriter();
		
		String[] url = request.getRequestURI().split("/");
		System.out.println(url[3]);
		String value;
		
		
		switch (url[3]) {
			case "getAllCommande":
				value = this.getAllCommande(); 
			break;

		default:
			value = "";
			break;
		}
		
        writer.append(value);;
        writer.flush();
	}

	private String getAllCommande(){
		
		
		ORM a = new ORM();
		
		String msg ="{"
				+ "data:["
				+ "{"
					+ "num_commande:1111"
					+ ",date:01012010"
					+ ",id_utilisateur:1}"
				+ "]}";
		return msg;
	}
}
