package org.esgi.orm.my.persistence;

public interface IORM {

	/** Create or update a record in db. */
	public Object _save(Object o);
	
	/** return an instance of clazz */
	public Object _load(Class<?> c, Object id);
	
	/** delete an record from clazz persistence layer */
	public boolean _remove(Class<?> c, Object id);
	
	
	
}
