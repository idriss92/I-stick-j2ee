package org.esgi.administration;

import java.io.IOException;
import java.io.Writer;
import java.util.Properties;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		String msg ="{succes:true,data:[{num_commande=1,date=01012010,id_utilisateur=1}]}";
        writer.append(msg);
        writer.flush();
       
    	
	}


}
