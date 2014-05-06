package org.esgi.administration;

import org.esgi.web.action.IAction;
import org.esgi.web.action.IContext;
public class GestionCommandes implements IAction {

	@Override
	public void execute(IContext context) throws Exception {
		
	}

	@Override
	public String getRoute() {
		return "/gestioncommande(.*/)$";
	}

	@Override
	public String getLayout() {
		return "gestioncommande";
	}

	@Override
	public String[] getRewriteGroups() {
		// TODO Auto-generated method stub
		return null;
	}

}
