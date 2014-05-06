package org.esgi.structure;

import org.esgi.web.action.IAction;
import org.esgi.web.action.IContext;

public class Accueil implements IAction {

	@Override
	public void execute(IContext context) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getRoute() {
		return "/accueil(.*/)$";
	}

	@Override
	public String getLayout() {
		return "accueil";
	}

	@Override
	public String[] getRewriteGroups() {
		return null;
	}

}
