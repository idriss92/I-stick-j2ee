package org.esgi.administration;

import org.esgi.web.action.IAction;
import org.esgi.web.action.IContext;

public class Administration implements IAction{

	@Override
	public void execute(IContext context) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getRoute() {
		return "/administration(.*/)$";
	}

	@Override
	public String getLayout() {
		return "administration";
	}

	@Override
	public String[] getRewriteGroups() {
		// TODO Auto-generated method stub
		return null;
	}

}
