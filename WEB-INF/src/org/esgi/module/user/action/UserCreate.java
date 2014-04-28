package org.esgi.module.user.action;

import org.esgi.web.action.AbstractAction;
import org.esgi.web.action.IContext;

public class UserCreate extends AbstractAction {

	public String getRoute() {
		return "user/create";
	}
	
	public void execute(IContext context) {
		// TODO Auto-generated method stub
		System.out.println("In User Create");
	}

}
