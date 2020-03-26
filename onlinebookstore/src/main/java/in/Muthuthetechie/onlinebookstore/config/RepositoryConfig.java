package in.Muthuthetechie.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	/*Autowiring feature of spring framework enables you to inject the object dependency implicitly. 
	 * It internally uses setter or constructor injection. 
	 * Autowiring can't be used to inject primitive and string values. 
	 * It works with reference only
	 * */
	@Autowired
	private EntityManager entityManager;

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config){
		/*config.exposeIdsFor(Book.class);
	config.exposeIdsFor(BookCategory.class);*/
		/*Instead of adding the entities
		 * once by one
		 * generically we are using the entityManger*/
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType).toArray(Class[]::new));
		config.getCorsRegistry()
			.addMapping("/**")
			.allowedOrigins("http://localhost:4200");
	}

}
