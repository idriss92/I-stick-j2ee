package org.esgi.module.file;

import org.esgi.web.action.IAction;
import org.esgi.web.action.IContext;

public class FileUpload  implements IAction {

	@Override
	public void execute(IContext context) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getRoute() {
		return "^/file/upload(.*/)$";
	}

	@Override
	public String getLayout() {
		return "file/upload/";
	}

	@Override
	public String[] getRewriteGroups() {
		return null;
	}
}
